import { useEffect, useState } from "react";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
  category: string;
}

interface UseMediumArticlesResult {
  articles: MediumArticle[];
  loading: boolean;
  error: boolean;
}

export const useMediumArticles = (): UseMediumArticlesResult => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/medium")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Medium articles");
        return res.json() as Promise<{ articles: MediumArticle[] }>;
      })
      .then((data) => {
        if (!cancelled) setArticles(data.articles ?? []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading, error };
};
