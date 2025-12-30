import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CategoryTabs } from "@/components/articles/ui/CategoryTabs";
import { CategorySelect } from "@/components/articles/ui/CategorySelect";

const categories = ["Highlight", "Cat", "Inspiration", "General"];

export default function ArticleSearchSection() {
  const [activeCategory, setActiveCategory] = useState("Highlight");

  return (
    <section className="w-full bg-brown-100">
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-6">
        <h2 className="text-headline-3 text-brown-600">
          Latest articles
        </h2>

        {/* Mobile View */}
        <div className="space-y-4 sm:hidden">
          {/* Search */}
          <div className="relative bg-white border border-brown-300 rounded-lg px-3">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full py-2 pr-10
                text-body-2
                bg-transparent
                text-brown-600
                placeholder:text-brown-400
                focus:outline-none
              "
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 text-sm" />
          </div>

          {/* Category Select */}
          <CategorySelect
            categories={categories}
            value={activeCategory}
            onChange={setActiveCategory}
          />
          
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex items-center justify-between gap-4 bg-brown-200 px-4 py-3 rounded-lg">
          <CategoryTabs
            categories={categories}
            // สมมติมีตัวแปรใหม่ ชื่อว่า categoryList
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
          {/* <Component key={value} /> */}

          <div className="relative w-[220px] bg-white rounded-full px-4">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full py-1.5 pr-10
                text-body-2
                bg-transparent
                text-brown-600
                placeholder:text-brown-400
                focus:outline-none
              "
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
