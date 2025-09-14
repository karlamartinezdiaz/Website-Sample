import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // If not installed: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-purple-100">
      <nav className="bg-pink-200 p-2 shadow-md relative z-50 border-b-5 border-purple-300">
        <div className="mx-auto flex justify-between items-center w-full max-w-7xl px-7">
          {/* Brand / Home */}
          <a
            href="/"
            className="freshbaked-font text-purple-900 font-bold text-2xl px-2 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg underline"
          >
            Karla Martinez
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-purple-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link
              to="/music"
              className="wondercity-big text-purple-900 font-bold text-2xl px-20 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg"
            >
              Playlist
            </Link>
            <Link
              to="/contact"
              className="wondercity-big text-purple-900 font-satisfy text-2xl px-20 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg"
            >
              Contact Me
            </Link>
            <Link
              to="/font"
              className="wondercity-big text-purple-900 font-satisfy text-2xl px-20 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 px-7 space-y-2 pb-4">
            <Link
              to="/music"
              onClick={() => setIsOpen(false)}
              className="block wondercity-big text-purple-900 font-bold text-xl py-2 rounded-md hover:shadow-md"
            >
              Playlist
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block wondercity-big text-purple-900 font-satisfy text-xl py-2 rounded-md hover:shadow-md"
            >
              Contact Me
            </Link>
            <Link
              to="/font"
              onClick={() => setIsOpen(false)}
              className="block wondercity-big text-purple-900 font-satisfy text-xl py-2 rounded-md hover:shadow-md"
            >
              Experience
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
