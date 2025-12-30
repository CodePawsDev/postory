import { useCallback, useEffect, useState } from "react";
import { getArticles } from "../api/articles";

export function useArticles({ limit = 6, category, keyword } = {}) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = useCallback(
    async (currentPage) => {
      setLoading(true);

      try {
        const data = await getArticles({
          page: currentPage,
          limit,
          category,
          keyword,
        });

        if (currentPage === 1) {
          setArticles(data);
        } else {
          setArticles((prev) => [...prev, ...data]);
        }

        // if the number of articles is less than the limit, set hasMore to false
        if (data.length < limit) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [limit, category, keyword]
  );

  // fetch articles when the component mounts
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchArticles(1);
  }, [fetchArticles]);

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  }, [page, fetchArticles]);

  return {
    articles,
    loading,
    hasMore,
    loadMore,
    page,
  };
}
