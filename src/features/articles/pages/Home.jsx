import { useState } from "react";
import HeroSection from "../sections/HeroSection";
import ArticleSearchSection from "../sections/ArticleSearchSection";
import ArticleSection from "../sections/ArticleSection";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const [activeCategory, setActiveCategory] = useState("Highlight");
  const [searchKeyword, setSearchKeyword] = useState("");

  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const handleChangeCategory = (newCategory) => {
    if (newCategory === activeCategory) return; // if the category is the same, do nothing
    setActiveCategory(newCategory);
    setSearchKeyword(""); // clear search keyword when category changes
  };

  return (
    <>
      <HeroSection />

      <ArticleSearchSection
        activeCategory={activeCategory}
        onChangeCategory={handleChangeCategory}
        searchKeyword={searchKeyword}
        onChangeSearch={setSearchKeyword}
      />

      <ArticleSection
        category={activeCategory}
        keyword={debouncedSearchKeyword}
      />
    </>
  );
}

export default Home;
