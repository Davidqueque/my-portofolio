// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <div className="flex gap-6">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
