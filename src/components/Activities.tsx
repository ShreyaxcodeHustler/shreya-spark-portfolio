
import { useState } from 'react';
import { MicrophoneIcon, Shield, Smartphone, GraduationCap, Heart } from 'lucide-react';

type ClubType = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
};

const clubs: ClubType[] = [
  {
    id: 1,
    name: "Media & Mass Communication",
    description: "Creating and sharing engaging content across various platforms to enhance communication skills.",
    icon: <MicrophoneIcon className="h-8 w-8 text-portfolio-pink" />
  },
  {
    id: 2,
    name: "Model United Nations Society (MUNSOC)",
    description: "Participating in simulations of UN committees to develop diplomacy and public speaking skills.",
    icon: <GraduationCap className="h-8 w-8 text-portfolio-blue" />
  },
  {
    id: 3,
    name: "Aegis (Cybersecurity Club)",
    description: "Learning and practicing cybersecurity concepts through workshops, CTF competitions, and ethical hacking.",
    icon: <Shield className="h-8 w-8 text-portfolio-purple" />
  },
  {
    id: 4,
    name: "Mobile Applications & IoT (MaIOT)",
    description: "Developing innovative mobile applications and IoT solutions to address real-world problems.",
    icon: <Smartphone className="h-8 w-8 text-portfolio-teal" />
  }
];

type VolunteeringType = {
  id: number;
  title: string;
  organization: string;
  description: string;
};

const volunteeringExperiences: VolunteeringType[] = [
  {
    id: 1,
    title: "NGO Volunteer",
    organization: "U&I NGO",
    description: "Taught underserved kids various subjects to help them improve academically."
  },
  {
    id: 2,
    title: "Centre Leader",
    organization: "U&I NGO",
    description: "Managed volunteers and students for 8 months, ensuring smooth operations and effective learning."
  },
  {
    id: 3,
    title: "Fundraising Coordinator",
    organization: "Local NGO",
    description: "Organized crowdfunding stall to raise funds for an NGO, helping them continue their community work."
  }
];

const Activities = () => {
  const [activeTab, setActiveTab] = useState('clubs');
  
  return (
    <section id="activities" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Extracurricular Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Beyond academics, I actively participate in various clubs and volunteer initiatives.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('clubs')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'clubs'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Club Memberships
            </button>
            <button
              onClick={() => setActiveTab('volunteering')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'volunteering'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Volunteering
            </button>
          </div>
        </div>
        
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club) => (
              <div 
                key={club.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 card-hover p-6"
              >
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                    {club.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {club.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'volunteering' && (
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
            <div className="p-6 bg-gradient-to-r from-portfolio-purple/10 to-portfolio-pink/10">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-portfolio-pink" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Volunteering Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                I'm passionate about giving back to the community and making a positive impact through volunteer work.
              </p>
              
              <div className="space-y-6">
                {volunteeringExperiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-600"
                  >
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <p className="text-portfolio-purple dark:text-portfolio-purple/80 font-medium mb-2">{exp.organization}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Activities;
