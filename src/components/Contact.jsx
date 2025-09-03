// components/Contact.jsx
import React from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = ({ handleDownloadCV }) => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Mari Berkolaborasi
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Saya selalu terbuka untuk proyek baru dan kesempatan kolaborasi. Mari
          diskusikan bagaimana kita bisa bekerja sama!
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:vincent.gwan02@gmail.com"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-sugiarto-a59983344/"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="https://github.com/Davidqueque"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} className="text-white" />
          </a>
        </div>

        <button
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
        >
          <Download size={24} />
          Lihat CV
        </button>
      </div>
    </section>
  );
};

export default Contact;
