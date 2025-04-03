
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="text-2xl font-bold text-gradient mb-6">
            Shreya L.
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="hover:text-portfolio-blue transition-colors">Home</a>
            <a href="#about" className="hover:text-portfolio-blue transition-colors">About</a>
            <a href="#skills" className="hover:text-portfolio-blue transition-colors">Skills</a>
            <a href="#projects" className="hover:text-portfolio-blue transition-colors">Projects</a>
            <a href="#experience" className="hover:text-portfolio-blue transition-colors">Experience</a>
            <a href="#activities" className="hover:text-portfolio-blue transition-colors">Activities</a>
            <a href="#contact" className="hover:text-portfolio-blue transition-colors">Contact</a>
          </div>
          
          <div className="w-24 h-px bg-gray-700 mb-8"></div>
          
          <p className="text-gray-400 text-center text-sm mb-4">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
          
          <p className="flex items-center text-sm text-gray-400">
            Designed with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Shreya L | © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
