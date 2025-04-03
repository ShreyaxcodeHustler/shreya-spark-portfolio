
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

const titles = ["Software Development", "AI", "Cybersecurity", "Cloud Computing"];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        if (isDeleting) {
          setCurrentWord("");
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
          setIsPaused(false);
        } else {
          setIsDeleting(true);
          setIsPaused(false);
        }
      } else if (isDeleting) {
        setCurrentWord(currentWord.slice(0, -1));
        if (currentWord.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      } else {
        const targetTitle = titles[currentTitleIndex];
        if (currentWord.length < targetTitle.length) {
          setCurrentWord(targetTitle.slice(0, currentWord.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isPaused ? 2000 : isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, currentTitleIndex, isPaused]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Shreya L</span>
                <br />
                Aspiring Software <br /> Development Engineer
              </h1>
              
              <div className="h-10 sm:h-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 flex">
                  <span className="mr-2">Passionate about</span>
                  <div className="relative inline-block">
                    <span className="text-portfolio-purple font-semibold">{currentWord}</span>
                    <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-portfolio-purple animate-pulse"></span>
                  </div>
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
                A student and tech enthusiast committed to creating innovative solutions through code.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-portfolio-blue hover:bg-portfolio-blue/90">
                  <a href="/resume.pdf" download="Shreya_L_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
                  <a href="#contact">
                    <Send className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-down">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-portfolio-blue to-portfolio-purple rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Shreya L"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
