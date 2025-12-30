export function CategoryTabs({
    categories,
    activeCategory,
    onChange,
  }) {
    return (
      <div className="flex items-center gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
  
          return (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={`
                px-4 py-1.5
                rounded-full
                text-body-2
                transition-colors
                ${
                  isActive
                    ? "bg-brand-orange text-white border border-brand-orange"
                    : "text-brown-500 border border-transparent hover:border-brand-orange hover:text-brand-orange"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
  