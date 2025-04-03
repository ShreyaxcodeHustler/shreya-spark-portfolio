
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Activities from "../components/Activities";
import OtherSkills from "../components/OtherSkills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Function to handle animations on scroll
    const handleAnimateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    // Initialize animations
    handleAnimateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleAnimateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleAnimateOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Activities />
      <OtherSkills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
