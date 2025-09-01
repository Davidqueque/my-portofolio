// components/Hero.jsx
import React from "react";
import { Download } from "lucide-react";

const Hero = ({ isVisible, handleDownloadCV }) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Halo, Saya
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vincent Kurniawan Sugiarto
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Saya seorang fresh graduate Teknik Informatika dengan minat besar
            dalam pengembangan web. Menguasai teknologi modern seperti React.js,
            Node.js, dan PHP serta memiliki pengalaman mengerjakan proyek
            akademik maupun personal. Memiliki semangat belajar tinggi,
            detail-oriented, dan mampu beradaptasi dengan cepat terhadap
            tantangan baru.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Lihat CV
            </button>
            <a
              href="#projects"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
