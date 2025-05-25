//import { useState } from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-100">
      <nav className="bg-pink-200 p-2 shadow-md relative z-50 border-b-2 border-purple-300">
        <div className="mx-auto flex justify-between items-center w-full max-w-7xl px-4">
          {" "}
          {/*HOME */}
          <a
            href="/"
            className="text-purple-900 font-semi-bold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg" // Added font-pacifico and text-lg
          >
            Home
          </a>
          <span className="text-purple-900 font-semibold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg">
            {" "}
            {/* Added font-pacifico and text-lg */}
            Social Media
          </span>
          <span className="text-purple-900 font-semibold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-lg">
            {" "}
            {/* Added font-pacifico and text-lg */}
            Placeholder
          </span>
          <span className="text-purple-900 font-semibold text-lg px-4 py-2 rounded-md transition-shadow duration-200 hover:shadow-md">
            {" "}
            {/* Added font-pacifico and text-lg */}
            Placeholder
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
