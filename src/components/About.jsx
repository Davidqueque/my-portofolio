// components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Tentang Saya
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Saya adalah seorang fresh graduate Teknik Informatika yang
              berfokus pada bidang pengembangan web, khususnya front-end dan
              full-stack development. Saya memiliki pengalaman dalam membangun
              aplikasi berbasis web menggunakan React.js, Node.js, dan PHP,
              serta familiar dengan pengelolaan database MySQL dan PostgreSQL.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Selama masa studi, saya mengembangkan beberapa proyek akademik
              yang menekankan pada implementasi antarmuka pengguna yang
              responsif dan sistem backend yang efisien. Selain kemampuan
              teknis, saya juga memiliki soft skill seperti komunikasi yang
              baik, problem-solving, serta kemampuan bekerja dalam tim maupun
              mandiri.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Pengalaman Magang
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/80">Periode Magang</span>
                <span className="text-purple-400 font-bold">
                  1 Tahun (2024-2025)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Perusahaan</span>
                <span className="text-purple-400 font-bold">MKP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Bidang</span>
                <span className="text-purple-400 font-bold">IT Production</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Fokus</span>
                <span className="text-purple-400 font-bold">
                  Testing Software QC (MPOS & QPROX)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Kontribusi</span>
                <span className="text-purple-400 font-bold">
                  Uji coba sistem, laporan bug, & peningkatan kualitas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
