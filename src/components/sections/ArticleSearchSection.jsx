import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { FaSearch } from "react-icons/fa";

function ArticleSearchSection() {
  return (
    <section className="w-full bg-brown-100">
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-6">
        {/* Title */}
        <h2 className="text-headline-3 text-brown-600">Latest articles</h2>

        {/* Mobile View */}
        <div className="space-y-4 sm:hidden">
          {/* Search */}
          <div className="relative bg-white border border-brown-300 rounded-lg px-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pr-10 pl-0 text-body-2
      bg-transparent text-brown-600 placeholder:text-brown-400
      focus:outline-none"
            />
            <FaSearch
              className="absolute right-4 top-1/2 -translate-y-1/2
      text-brown-300 text-sm"
            />
          </div>

          {/* Category label */}
          <label className="block text-body-2 text-brown-500">Category</label>

          {/* Category select */}
          <Select>
            <SelectTrigger className="w-full bg-white border border-brown-300 shadow-none text-body-2 text-brown-500">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highlight">Highlight</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop View */}
        <div
          className="hidden sm:flex items-center justify-between
            gap-4 bg-brown-200 px-4 py-3 rounded-lg"
        >
          {/* Categories */}
          <div className="flex items-center gap-2">
            {/* Active */}
            <button
              className="px-4 py-1.5 rounded-full text-body-2
                bg-brand-orange text-white border border-brand-orange"
            >
              Highlight
            </button>

            {/* Inactive */}
            {["Cat", "Inspiration", "General"].map((item) => (
              <button
                key={item}
                className="px-4 py-1.5 rounded-full text-body-2
                    text-brown-500 border border-transparent
                    hover:border-brand-orange hover:text-brand-orange
                    transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-[220px] bg-white rounded-full px-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1.5 pr-10 pl-0 text-body-2
      bg-transparent text-brown-600 placeholder:text-brown-400
      focus:outline-none"
            />
            <FaSearch
              className="absolute right-4 top-1/2 -translate-y-1/2
      text-brown-300 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleSearchSection;
