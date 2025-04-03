
import { useState, useEffect, useRef } from 'react';
import { Code, Server, Database, GitBranch, Monitor, Terminal } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    proficiency: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "C", proficiency: 85 },
      { name: "Java", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "SQL", proficiency: 75 },
      { name: "HTML/CSS", proficiency: 95 },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "GitHub", proficiency: 85 },
      { name: "Kali Linux", proficiency: 75 },
      { name: "SolidWorks", proficiency: 70 },
      { name: "Maven", proficiency: 65 },
      { name: "JavaFX", proficiency: 80 },
    ],
  },
  {
    name: "Operating Systems",
    icon: <Monitor className="h-6 w-6" />,
    skills: [
      { name: "Windows", proficiency: 95 },
      { name: "Linux", proficiency: 80 },
    ],
  },
  {
    name: "Other Skills",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Version Control", proficiency: 85 },
      { name: "Cloud Computing", proficiency: 70 },
      { name: "Database Management", proficiency: 75 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Team Collaboration", proficiency: 95 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const currentCategory = skillCategories.find(category => category.name === activeCategory);
  
  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and skills I've worked with and am proficient in.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`p-4 rounded-lg flex flex-col items-center transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-white dark:bg-gray-700 shadow-md border-t-2 border-portfolio-purple"
                    : "bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-700"
                }`}
              >
                <div className={`p-3 rounded-full ${
                  activeCategory === category.name
                    ? "bg-portfolio-purple/10 text-portfolio-purple"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}>
                  {category.icon}
                </div>
                <span className={`mt-2 text-sm font-medium ${
                  activeCategory === category.name
                    ? "text-portfolio-purple"
                    : "text-gray-700 dark:text-gray-300"
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6">{currentCategory?.name}</h3>
            <div className="space-y-6">
              {currentCategory?.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
