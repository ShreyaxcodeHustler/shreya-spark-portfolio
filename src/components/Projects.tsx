
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Database, Layout } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Online Banking Simulation",
    description: "A comprehensive online banking simulation application that allows users to create accounts, perform transactions, and manage their finances securely.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    year: "2024",
    technologies: ["Java", "Maven", "JavaFX", "PostgreSQL"],
    githubLink: "https://github.com/shreyaL/online-banking",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description: "An AI-powered streaming platform that replicates the core functionality of Netflix, including content recommendations and user authentication.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    year: "2025",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/shreyaL/netflix-clone",
    demoLink: "https://netflix-clone.shreyaL.dev",
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 card-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute top-0 right-0 bg-portfolio-purple text-white px-3 py-1 m-2 rounded text-sm font-medium">
                  {project.year}
                </div>
                
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs font-medium bg-white/20 text-white px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        {project.githubLink && (
                          <Button asChild variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demoLink && (
                          <Button asChild variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => {
                    // Assign icon based on technology
                    let icon;
                    if (tech === 'Java' || tech === 'React' || tech === 'Node.js') {
                      icon = <Code className="h-3 w-3 mr-1" />;
                    } else if (tech === 'PostgreSQL' || tech === 'MongoDB') {
                      icon = <Database className="h-3 w-3 mr-1" />;
                    } else {
                      icon = <Layout className="h-3 w-3 mr-1" />;
                    }
                    
                    return (
                      <span 
                        key={tech} 
                        className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full flex items-center"
                      >
                        {icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Repository
                      </a>
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button asChild size="sm" className="bg-portfolio-blue hover:bg-portfolio-blue/90">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
