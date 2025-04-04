
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-[380px] sm:w-[400px] h-[600px] border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col animate-fade-in">
          <div className="bg-portfolio-blue text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Chat with Shreya's Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbot} className="text-white hover:bg-portfolio-blue/90">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/ehFFSBM03E-Geoqi1_oHb"
              width="100%"
              height="100%"
              frameBorder="0"
              className="h-full"
              title="Chatbot"
            ></iframe>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChatbot}
          className="rounded-full p-3 h-14 w-14 bg-portfolio-blue hover:bg-portfolio-blue/90 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
    </div>
  );
};

export default ChatbotBubble;
