
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, BookmarkIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1 order-2">
            <div className="bg-gradient-to-tr from-portfolio-blue/5 to-portfolio-purple/5 dark:from-portfolio-blue/10 dark:to-portfolio-purple/10 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm an enthusiastic Computer Science student with a passion for solving complex problems through innovative software solutions. As I progress through my academic journey, I'm constantly seeking opportunities to expand my knowledge and apply my skills in real-world scenarios.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My interest spans across various domains including software development, artificial intelligence, cybersecurity, and cloud computing. I enjoy the process of creating efficient, user-friendly applications that make a positive impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me participating in CTF competitions, creating art, or volunteering to teach technology to underserved communities.
              </p>
            </div>
          </div>
          
          <div className="lg:order-2 order-1">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 card-hover">
                <div className="flex items-start">
                  <div className="bg-portfolio-blue/10 dark:bg-portfolio-blue/20 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-900 dark:text-gray-100 font-medium">Bachelor of Engineering in Information Science</p>
                        <p className="text-gray-700 dark:text-gray-300">R V Institute of Technology and Management</p>
                        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Oct 2023 – July 2027</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                  <a href="#skills">
                    Explore My Skills
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
