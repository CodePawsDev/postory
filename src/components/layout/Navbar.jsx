export function NavBar() {
  return (
    <nav className="w-full bg-brown-100 border-b border-brown-300">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="logo text-brown-600">
          hh
          <span className="text-brand-orange">.</span>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-8 py-2 bg-white border border-brown-600 rounded-full text-body-1 text-brown-600">
            Log in
          </button>
          <button className="px-8 py-2 bg-brand-orange rounded-full text-body-1 text-white">
            Sign up
          </button>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden text-brown-600 text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}
