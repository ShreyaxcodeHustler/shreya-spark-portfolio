
import { Languages, BookHeart, Puzzle } from 'lucide-react';

const OtherSkills = () => {
  return (
    <section id="other-skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages, Soft Skills & Hobbies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-portfolio-blue/10 p-3 rounded-full">
                <Languages className="h-8 w-8 text-portfolio-blue" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Languages</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Fluent</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">Hindi</span>
                  <span className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">Kannada</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-portfolio-purple/10 p-3 rounded-full">
                <Puzzle className="h-8 w-8 text-portfolio-purple" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Soft Skills</h3>
            
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="w-3 h-3 bg-portfolio-purple rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-200">Volunteer Management</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="w-3 h-3 bg-portfolio-purple rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-200">Team Leadership</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="w-3 h-3 bg-portfolio-purple rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-200">Event Planning</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="w-3 h-3 bg-portfolio-purple rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-200">Creative Direction</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="w-3 h-3 bg-portfolio-purple rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-200">Public Speaking</span>
              </div>
            </div>
          </div>
          
          {/* Hobbies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-portfolio-pink/10 p-3 rounded-full">
                <BookHeart className="h-8 w-8 text-portfolio-pink" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Hobbies & Interests</h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium mb-1">CTF Competitions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Participating in Capture The Flag cybersecurity challenges to enhance hacking skills.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium mb-1">Art & Creativity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Creating digital and traditional artwork during free time as a creative outlet.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium mb-1">Technical Writing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Writing technical articles and documentation to share knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherSkills;
