import { ArticleCard } from "../components/ArticleCard";
import { formatDate } from "../../../utils/formatDate";
import { useArticles } from "../hooks/useArticles";

function ArticleSection({ category, keyword }) {
  const { articles, loading, hasMore, loadMore } = useArticles({
    limit: 6,
    category,
    keyword,
  });

  // if the articles are loading and the number of articles is 0, show the loading message
  if (loading && articles.length === 0) {
    return (
      <section className="w-full bg-brown-100 overflow-x-hidden">
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
          <p className="text-brand-orange text-center text-headline-4 font-medium">
            ไม่พบบทความ
          </p>
        ) : (
          <>
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

            {/* View More Button */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    if (!loading && hasMore) loadMore();
                  }}
                  disabled={loading}
                  className="
                    px-6 py-2
                    rounded-lg
                    bg-white
                    border border-brown-300
                    text-brand-orange
                    hover:bg-brand-orange
                    hover:text-white
                    transition
                    disabled:opacity-50
                  "
                >
                  {loading ? "Loading..." : "View More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ArticleSection;
