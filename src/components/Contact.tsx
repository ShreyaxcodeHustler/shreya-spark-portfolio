
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5 dark:from-portfolio-blue/10 dark:to-portfolio-purple/10 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-portfolio-blue/10 dark:bg-portfolio-blue/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                  <a href="mailto:Llshreya0505@gmail.com" className="text-gray-900 dark:text-gray-100 hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors">
                    Llshreya0505@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/10 dark:bg-portfolio-purple/20 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</h4>
                  <a href="https://linkedin.com/in/shreya-l" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-portfolio-purple dark:hover:text-portfolio-purple transition-colors">
                    linkedin.com/in/shreya-l
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gray-800/10 dark:bg-gray-800/20 p-3 rounded-full">
                  <Github className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">GitHub</h4>
                  <a href="https://github.com/shreyaL" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    github.com/shreyaL
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/shreya-l" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                </a>
                <a 
                  href="https://github.com/shreyaL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                </a>
                <a 
                  href="mailto:Llshreya0505@gmail.com" 
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <Mail className="h-5 w-5 text-red-500" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
