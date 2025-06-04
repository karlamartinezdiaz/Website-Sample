import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-purple-100">
      <nav className="bg-pink-200 p-4 shadow-md border-b-2 border-purple-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold text-purple-800">
            MySite
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-purple-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Horizontal nav for desktop */}
          <ul className="hidden md:flex space-x-6 text-purple-800 font-medium">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Dropdown menu for mobile */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-3 px-4 text-purple-800 font-medium">
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
