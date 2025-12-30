import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-brown-200">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Get in touch */}
          <div className="order-1 flex items-center gap-4 text-brown-500">
            <span className="text-body-1 text-brand-orange">Get in touch</span>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/r-sripen/"
                aria-label="LinkedIn"
                className="hover:text-brown-600 transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="https://github.com/CodePawsDev"
                aria-label="GitHub"
                className="hover:text-brown-600 transition-colors"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="mailto:isripen@gmail.com"
                aria-label="Gmail"
                className="hover:text-brown-600 transition-colors"
              >
                <FaGoogle size={16} />
              </a>
            </div>
          </div>

          {/* Home page */}
          <a
            href="/"
            className="order-2 text-body-1 text-brown-500 underline hover:text-brown-600 transition-colors"
          >
            Home page
          </a>
        </div>
      </div>
    </footer>
  );
}
