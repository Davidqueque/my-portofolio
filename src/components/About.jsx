// components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16">
          Tentang Saya
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Saya adalah seorang fresh graduate Teknik Informatika yang
              berfokus pada bidang pengembangan web, khususnya front-end dan
              full-stack development. Saya memiliki pengalaman dalam membangun
              aplikasi berbasis web menggunakan React.js, Node.js, dan PHP,
              serta familiar dengan pengelolaan database MySQL dan PostgreSQL.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Selama masa studi, saya mengembangkan beberapa proyek akademik
              yang menekankan pada implementasi antarmuka pengguna yang
              responsif dan sistem backend yang efisien. Selain kemampuan
              teknis, saya juga memiliki soft skill seperti komunikasi yang
              baik, problem-solving, serta kemampuan bekerja dalam tim maupun
              mandiri.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
              Pengalaman Magang
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Periode Magang */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                  Periode Magang
                </span>
                <span className="text-purple-400 font-bold text-sm sm:text-base text-left sm:text-right">
                  1 Tahun (2024-2025)
                </span>
              </div>

              {/* Perusahaan */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                  Perusahaan
                </span>
                <span className="text-purple-400 font-bold text-sm sm:text-base text-left sm:text-right">
                  MKP
                </span>
              </div>

              {/* Bidang */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                  Bidang
                </span>
                <span className="text-purple-400 font-bold text-sm sm:text-base text-left sm:text-right">
                  IT Production
                </span>
              </div>

              {/* Fokus */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                  Fokus
                </span>
                <span className="text-purple-400 font-bold text-sm sm:text-base text-left sm:text-right sm:max-w-xs">
                  Testing Software QC (MPOS & QPROX)
                </span>
              </div>

              {/* Kontribusi */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 pt-2 border-t border-white/10">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                  Kontribusi
                </span>
                <span className="text-purple-400 font-bold text-sm sm:text-base text-left sm:text-right sm:max-w-xs">
                  Uji coba sistem, laporan bug, & peningkatan kualitas
                </span>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300 text-sm font-medium">
                  Fresh Graduate Ready to Work
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
