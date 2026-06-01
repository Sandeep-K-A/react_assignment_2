import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { FunctionComponent as FC } from "react";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "text-blue-400"
      : "text-gray-300 hover:text-white transition-colors duration-200";
  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand Name */}
        <NavLink to="/" className="text-white text-lg font-bold tracking-wide">
          UserDirectory
        </NavLink>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>
        </div>

        {/* Mobile Navigation */}
        <button
          className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-gray-800 px-6 py-4 flex flex-col gap-4">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/users"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
