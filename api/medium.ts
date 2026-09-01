// Vercel Serverless Function: fetches and parses the Medium RSS feed so the
// /blog page can render live articles without a redeploy. Vercel injects
// res.status()/res.json() helpers on the response object at runtime, so no
// @vercel/node import is required here.

const FEED_URLS = [
  "https://otsimaofficial.medium.com/feed",
  "https://medium.com/feed/@otsimaofficial",
];

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
  category: string;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function unwrapCdata(raw: string): string {
  return raw
    .trim()
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function getItemBlocks(xml: string): string[] {
  const blocks: string[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;
  while ((match = itemRegex.exec(xml)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

function getTag(block: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = block.match(regex);
  return match ? unwrapCdata(match[1]) : "";
}

function getAllTags(block: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const results: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(block)) !== null) {
    results.push(unwrapCdata(match[1]));
  }
  return results;
}

function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function buildExcerpt(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

function extractExcerpt(html: string, maxLength = 160): string {
  // Medium's content opens with an <h3>/<h4> repeating the title, so pull the
  // intro from <p> tags rather than the full HTML to avoid duplicating it.
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => stripHtml(m[1]))
    .filter(Boolean)
    .join(" ");
  return buildExcerpt(paragraphs || stripHtml(html), maxLength);
}

function extractThumbnail(html: string): string | null {
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
  let match: RegExpExecArray | null;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !src.includes("medium.com/_/stat")) {
      return src;
    }
  }
  return null;
}

function parseItem(block: string): MediumArticle {
  const content = getTag(block, "content:encoded");
  const categories = getAllTags(block, "category");

  return {
    title: decodeEntities(getTag(block, "title")) || "Untitled",
    link: getTag(block, "link") || "https://otsimaofficial.medium.com/",
    pubDate: getTag(block, "pubDate"),
    excerpt: extractExcerpt(content),
    thumbnail: extractThumbnail(content),
    category: categories[0] || "Article",
  };
}

async function fetchFeedXml(): Promise<string> {
  let lastError: unknown;

  for (const url of FEED_URLS) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; OtsimaPortfolioBot/1.0; +https://otsima.vercel.app)",
          Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!response.ok) {
        lastError = new Error(`Feed request failed: ${response.status}`);
        continue;
      }

      const xml = await response.text();
      if (xml.includes("<item>")) {
        return xml;
      }
      lastError = new Error("Feed response had no items");
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError ?? new Error("Unable to load Medium feed");
}

export default async function handler(req, res) {
  try {
    const xml = await fetchFeedXml();
    const articles = getItemBlocks(xml).slice(0, 9).map(parseItem);

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1800, stale-while-revalidate=3600"
    );
    res.status(200).json({ articles });
  } catch {
    res.status(502).json({ error: "Unable to fetch Medium articles right now." });
  }
}
