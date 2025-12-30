import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";
import { getPosts } from "../api/articles.api";
import { formatDate } from "@/utils/formatDate";

function ArticleSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getPosts();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-brown-100">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <p className="text-brown-400">Loading articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-brown-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {!Array.isArray(articles) || articles.length === 0 ? (
          <p className="text-brown-400">ไม่พบบทความ</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                category={article.category}
                author={article.author}
                authorAvatar={article.authorAvatar}
                date={formatDate(article.date)}
                image={article.image}
                description={article.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ArticleSection;
