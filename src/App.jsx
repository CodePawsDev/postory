import profile1 from "./assets/profile1.jpg";

function App() {
  return (
    <div className="min-h-screen bg-brown-100">
      <NavBar />
      <HeroSection />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="w-full bg-brown-100">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-headline-2 text-brown-600 font-semibold">hh.</div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-8 py-2 bg-white border border-brown-600 rounded-full text-body-1 text-brown-600">
            Log in
          </button>
          <button className="px-8 py-2 bg-brown-600 rounded-full text-body-1 text-white">
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

function HeroSection() {
  return (
    <section className="w-full bg-brown-100">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-6 text-center lg:text-right">
            <h1 className="text-headline-1 text-brown-600 leading-tight mx-auto lg:mx-0 max-w-md">
              Stay Informed,
              <br />
              Stay Inspired
            </h1>

            <p className="text-body-1 text-brown-400 mx-auto lg:mx-0 max-w-md">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose
              of Inspiration and Information.
            </p>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-full max-w-[386px] aspect-[0.73] lg:w-[386px] lg:h-[529px] rounded-2xl overflow-hidden">
              <img
                src={profile1}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Author Bio */}
          <div className="lg:col-span-1 space-y-2 text-center lg:text-left">
            <p className="text-body-2 text-brown-400">- Author</p>

            <h2 className="text-headline-3 text-brown-600">Phapaiphat S.</h2>

            <div className="space-y-3 text-body-1 text-brown-400 mx-auto lg:mx-0 max-w-md">
              <p>
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </p>
              <p>
                When I'm not writing, I spend time volunteering at my local
                animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
