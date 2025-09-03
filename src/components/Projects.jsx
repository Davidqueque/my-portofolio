import React, { useState, useEffect } from "react";
import { Github, ChevronLeft, ChevronRight, X } from "lucide-react";

const Projects = ({
  projects,
  isVisible,
  hoveredProject,
  setHoveredProject,
}) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  // Reset screenshot index when project changes
  useEffect(() => {
    setCurrentScreenshotIndex(0);
  }, [selectedProjectIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProjectIndex === null) return;

      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        closeSlideshow();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, currentScreenshotIndex]);

  const currentProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;
  const screenshots = currentProject?.screenshots || [];

  const goToPrevious = () => {
    if (screenshots.length === 0) return;
    setCurrentScreenshotIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    if (screenshots.length === 0) return;
    setCurrentScreenshotIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const openSlideshow = (projectIndex) => {
    setSelectedProjectIndex(projectIndex);
    setCurrentScreenshotIndex(0);
  };

  const closeSlideshow = () => {
    setSelectedProjectIndex(null);
    setCurrentScreenshotIndex(0);
  };

  const goToScreenshot = (index) => {
    setCurrentScreenshotIndex(index);
  };

  // Handle card click (except links)
  const handleCardClick = (e, projectIndex) => {
    if (e.target.closest("a")) return;
    openSlideshow(projectIndex);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Proyek Terbaru
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={(e) => handleCardClick(e, index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Screenshot count indicator */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                    {project.screenshots.length} 📸
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 pointer-events-none ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 pointer-events-auto">
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-3 left-3 bg-green-500/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Click to view
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal slideshow with custom slider */}
      {selectedProjectIndex !== null && currentProject && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={closeSlideshow}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 z-10"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Slide counter */}
          {screenshots.length > 1 && (
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white/80 text-xs sm:text-sm bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full z-10">
              {currentScreenshotIndex + 1} / {screenshots.length}
            </div>
          )}

          {/* Dot indicators */}
          {screenshots.length > 1 && (
            <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToScreenshot(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentScreenshotIndex
                      ? "bg-purple-400"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Main content area */}
          <div className="flex flex-col items-center max-w-7xl max-h-[90vh] px-6 w-full">
            {screenshots.length > 0 ? (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Current screenshot */}
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={screenshots[currentScreenshotIndex].image}
                    alt={screenshots[currentScreenshotIndex].title}
                    className="max-h-[70vh] max-w-full rounded-xl shadow-2xl object-contain"
                    style={{ transition: "opacity 0.3s ease-in-out" }}
                  />

                  {/* Screenshot description */}
                  <div className="mt-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 max-w-4xl mx-auto">
                    <p className="text-white/90 text-center text-sm leading-relaxed">
                      {screenshots[currentScreenshotIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-60 bg-white/10 rounded-xl">
                <p className="text-white/60">Belum ada screenshot tersedia</p>
              </div>
            )}
          </div>

          {/* Project info */}
          <div className="absolute bottom-6 left-6 right-6 text-center bg-black/60 backdrop-blur-sm rounded-xl p-4">
            <h3 className="text-white font-semibold text-lg mb-2">
              {currentProject.title}
            </h3>
            <p className="text-white/80 text-sm max-w-4xl mx-auto">
              {currentProject.description}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Custom styles for smooth transitions */
        .slide-enter {
          opacity: 0;
          transform: translateX(100px);
        }
        .slide-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .slide-exit {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-exit-active {
          opacity: 0;
          transform: translateX(-100px);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
