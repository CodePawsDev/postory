import { ArticleCard } from "@/components/articles/ArticleCard";
import { articlesData } from "@/data/articles";

function ArticleSection() {
  return (
    <section className="w-full bg-brown-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {articlesData.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              author={article.author}
              authorAvatar={article.authorAvatar}
              date={article.date}
              image={article.image}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
