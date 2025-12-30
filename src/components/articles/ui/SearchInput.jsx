import { FaSearch } from "react-icons/fa";

export function SearchInput({ rounded = false }) {
  return (
    <div
      className={`
        relative bg-white px-4
        border border-brown-300
        transition-colors
        focus-within:border-brown-600
        ${rounded ? "rounded-full" : "rounded-lg"}
      `}
    >
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

      <FaSearch
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          text-brown-400 text-sm
          pointer-events-none
        "
      />
    </div>
  );
}
