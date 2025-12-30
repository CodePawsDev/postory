export function CategorySelect({ categories, value, onChange }) {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            px-4 py-2 pr-10
            rounded-lg
            bg-white
            border border-brown-300
            text-body-2 text-brown-400
            appearance-none
            focus:outline-none
            focus:border-brown-600
          "
        >
            {/* arrName.map((item) => item ** 2 */}
            {/* arrName.map((item) => <html tag> เพื่อแสดงผลตามที่เราอยากเห็น) */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
  
        {/* Custom arrow */}
        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> 
      </div>
    );
  }
  