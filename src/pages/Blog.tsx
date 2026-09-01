import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaMedium } from "react-icons/fa6";
import { useMediumArticles } from "../hooks/useMediumArticles";

const pillars = [
  {
    domain: "Healthcare",
    description:
      "Clinical informatics, health data systems, medical devices, and the future of medicine in emerging economies.",
    topics: [
      "Electronic Health Records (EHR)",
      "Clinical Informatics",
      "AI in Medicine",
      "Blockchain for Health Data",
    ],
  },
  {
    domain: "Finance",
    description:
      "Financial engineering, algorithmic trading, wealth systems, and how value moves in the world.",
    topics: [
      "Algorithmic Trading",
      "Financial Engineering",
      "Wealth Advocacy",
      "Market Systems & Value Creation",
    ],
  },
  {
    domain: "Technology",
    description:
      "Blockchain, smart contracts, decentralized applications, AI, and the responsible use of technology.",
    topics: [
      "Blockchain Development",
      "Smart Contracts & dApps",
      "AI & Data Science",
      "Cloud & Web3 Systems",
    ],
  },
  {
    domain: "Media",
    description:
      "Cinematography, content production, digital storytelling, and building a personal brand that lasts.",
    topics: [
      "Cinematography",
      "Content Production",
      "Digital Marketing",
      "Personal Brand Strategy",
    ],
  },
];

const formatDate = (pubDate: string) => {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const Blog = () => {
  const { articles, loading, error } = useMediumArticles();
  const showFallback = !loading && (error || articles.length === 0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".blog-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    if (loading) return;
    gsap.from(".blog-card-animate", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
    });
  }, [loading, showFallback, articles.length]);

  return (
    <section className="blog-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="blog-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Writing & Insights</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Thoughts and perspectives across Health, Finance, Technology & Media.
        </p>
        <a
          href="https://otsimaofficial.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaMedium className="size-5" />
          Read on Medium
        </a>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-tetiary">
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-6 md:p-8 space-y-4">
                <div className="h-5 w-20 bg-gray-200 rounded-full" />
                <div className="h-5 w-3/4 bg-gray-200" />
                <div className="h-4 w-full bg-gray-200" />
                <div className="h-4 w-2/3 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !showFallback && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10">
          {articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card-animate group flex flex-col bg-tetiary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-200 shrink-0">
                {article.thumbnail ? (
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/30">
                    <FaMedium className="size-10" />
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-primary border border-primary px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  {formatDate(article.pubDate) && (
                    <span className="text-xs text-gray-400 shrink-0">
                      {formatDate(article.pubDate)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium pt-2">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {showFallback && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.domain}
              className="blog-card-animate bg-tetiary p-8 md:p-12 space-y-4"
            >
              <span className="text-xs font-medium text-primary border border-primary px-3 py-1 rounded-full">
                {pillar.domain}
              </span>
              <p className="text-[#111827] text-sm md:text-base mt-4">
                {pillar.description}
              </p>
              <ul className="space-y-2 mt-4">
                {pillar.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 text-secondary text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-6 italic">
                {error ? "Latest articles are on Medium — check back shortly." : "Articles coming soon"}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
