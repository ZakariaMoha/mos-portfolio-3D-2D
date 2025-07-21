import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  isDark: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isDark }) => {
  const handleWhatsAppClick = () => {
    // Using the primary phone number for WhatsApp
    const phoneNumber = '254768895536'; // Kenya country code + number without leading 0
    const message = encodeURIComponent('Hello! I\'m interested in your branding services. Can you help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl group ${
        isDark 
          ? 'bg-green-500 hover:bg-green-400' 
          : 'bg-green-500 hover:bg-green-400'
      } text-white animate-bounce-slow`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDark 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-900 text-white'
      }`}>
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;