import React, { useState, useEffect } from "react";
import { projects } from "./data/project";
import { Download, Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    window.open("/my-portofolio/cv/CV.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      <Hero isVisible={isVisible} handleDownloadCV={handleDownloadCV} />

      <About />

      <Skills isVisible={isVisible} />

      <Projects
        projects={projects}
        isVisible={isVisible}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />

      <Contact handleDownloadCV={handleDownloadCV} />

      <Footer />

      <FloatingParticles />
    </div>
  );
};

export default Portfolio;
