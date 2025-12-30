import { CategorySelect } from "../ui/CategorySelect";
import { CategoryTabs } from "../ui/CategoryTabs";
import { SearchInput } from "../ui/SearchInput";

const categories = ["Highlight", "Cat", "Inspiration", "General", "Other"];

export default function ArticleSearchSection({
  activeCategory,
  onChangeCategory,
  searchKeyword,
  onChangeSearch,
}) {
  return (
    <section className="w-full bg-brown-100">
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-6">
        <h2 className="text-headline-3 text-brown-600">Latest articles</h2>

        {/* Mobile */}
        <div className="space-y-4 sm:hidden">
          <SearchInput value={searchKeyword} onChange={onChangeSearch} />
          <CategorySelect
            categories={categories}
            value={activeCategory}
            onChange={onChangeCategory}
          />
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-between gap-4 bg-brown-200 px-4 py-3 rounded-lg">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={onChangeCategory}
          />
          <SearchInput
            value={searchKeyword}
            onChange={onChangeSearch}
            rounded
          />
        </div>
      </div>
    </section>
  );
}
