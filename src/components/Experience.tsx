
import { useRef, useState, useEffect } from 'react';
import { CalendarClock, Briefcase, Award, Users } from 'lucide-react';

type TimelineItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string[];
  category: 'internship' | 'certification' | 'achievement' | 'extracurricular';
};

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Content Research Intern",
    organization: "The Business Sentinel",
    period: "Oct 2023 – Jan 2024",
    description: [
      "Conducted extensive research on assigned topics.",
      "Wrote detailed articles based on findings.",
      "Collaborated with editorial team to meet publishing deadlines."
    ],
    category: 'internship'
  },
  {
    id: 2,
    title: "Java Programming Fundamentals",
    organization: "Infosys SpringBoard",
    period: "2023",
    description: [
      "Completed comprehensive Java programming course.",
      "Developed multiple projects demonstrating core Java concepts."
    ],
    category: 'certification'
  },
  {
    id: 3,
    title: "Smart India Hackathon 2024 Preliminary Round",
    organization: "Government of India",
    period: "2024",
    description: [
      "Participated in the preliminary round of SIH 2024.",
      "Developed innovative technical solutions for real-world problems."
    ],
    category: 'achievement'
  },
  {
    id: 4,
    title: "U&I NGO Volunteer & Centre Leader",
    organization: "U&I NGO",
    period: "2022 - 2023",
    description: [
      "Taught underserved kids various subjects.",
      "Managed volunteers and students for 8 months as Centre Leader.",
      "Organized fundraising activities for the organization."
    ],
    category: 'extracurricular'
  }
];

const categoryIcons = {
  internship: <Briefcase className="h-6 w-6 text-portfolio-blue" />,
  certification: <Award className="h-6 w-6 text-portfolio-purple" />,
  achievement: <Award className="h-6 w-6 text-portfolio-pink" />,
  extracurricular: <Users className="h-6 w-6 text-portfolio-teal" />
};

const categoryColors = {
  internship: 'border-portfolio-blue',
  certification: 'border-portfolio-purple',
  achievement: 'border-portfolio-pink',
  extracurricular: 'border-portfolio-teal'
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<{ [key: number]: boolean }>({});

  const filteredItems = activeFilter 
    ? timelineItems.filter(item => item.category === activeFilter)
    : timelineItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    const itemElements = document.querySelectorAll('.timeline-item');
    itemElements.forEach(item => observer.observe(item));
    
    return () => {
      itemElements.forEach(item => observer.unobserve(item));
    };
  }, [activeFilter]);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter === activeFilter ? null : filter);
    setVisibleItems({});
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey, certifications, achievements, and extracurricular activities.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleFilterChange('internship')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'internship'
                ? 'bg-portfolio-blue text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Internships
          </button>
          <button
            onClick={() => handleFilterChange('certification')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'certification'
                ? 'bg-portfolio-purple text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Award className="h-4 w-4 mr-2" />
            Certifications
          </button>
          <button
            onClick={() => handleFilterChange('achievement')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'achievement'
                ? 'bg-portfolio-pink text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </button>
          <button
            onClick={() => handleFilterChange('extracurricular')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'extracurricular'
                ? 'bg-portfolio-teal text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Extracurricular
          </button>
        </div>
        
        <div ref={timelineRef} className="timeline max-w-4xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-item ${visibleItems[item.id] ? 'opacity-100' : 'opacity-0'}`}
              data-id={item.id}
              style={{ 
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                transitionDelay: `${index * 150}ms`,
                transform: visibleItems[item.id] ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="timeline-dot" style={{
                top: '32px'
              }}></div>
              <div className={`timeline-content border-l-4 ${categoryColors[item.category]}`}>
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    {categoryIcons[item.category]}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-portfolio-purple dark:text-portfolio-purple/80 font-medium">{item.organization}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="ml-4 space-y-1 text-gray-600 dark:text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-1.5 mr-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
