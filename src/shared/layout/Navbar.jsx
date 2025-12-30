import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-brown-100 border-b border-brown-300">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="logo text-brown-600">
          hh<span className="text-brand-orange">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-8 py-2 bg-white border border-brown-600 rounded-full text-body-1 text-brown-600">
            Log in
          </button>
          <button className="px-8 py-2 bg-brand-orange rounded-full text-body-1 text-white">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-brown-600 text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            absolute left-0 top-full
            w-full
            bg-brown-100
            border-b border-brown-300
            z-50
          "
        >
          <div className="px-8 py-4 space-y-3">
            <button
              className="
                w-full py-3
                rounded-full
                border border-brown-600
                text-body-1 text-brown-600
              "
            >
              Log in
            </button>

            <button
              className="
                w-full py-3
                rounded-full
                bg-brand-orange
                text-body-1 text-white
              "
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
