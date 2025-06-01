//import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-100">
      <nav className="bg-pink-200 p-2 shadow-md relative z-50 border-b-2 border-purple-300">
        <div className="mx-auto flex justify-between items-center w-full max-w-7xl px-4">
          {" "}
          {/*HOME */}
          <a
            href="/"
            className="text-purple-900 font-bold text-lg px-10 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg" // Added font-pacifico and text-lg
          >
            Home
          </a>
          <Link
            to="/music"
            className="text-purple-900 font-bold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg focus:outline-none "
          >
            Playlist
          </Link>
          <Link
            to="/contact"
            className="text-purple-900 font-bold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg"
          >
            Contact Me
          </Link>
          <span className="text-purple-900 font-bold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg">
            {" "}
            Fonts
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
