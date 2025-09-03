// components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/80 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white/80 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
