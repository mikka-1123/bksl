import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

interface WhatsAppSupportProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

const AGENT = {
  name: 'Lokesh Choudhary',
  title: 'Technical Support Specialist',
  avatar: 'L', // Initials or image URL
};

const WhatsAppSupport: React.FC<WhatsAppSupportProps> = ({
  phoneNumber = '9033372022', // Replace with your actual WhatsApp number
  defaultMessage = 'Hello! 👋 Need assistance with Shipping & Logistics solutions? Chat with us on WhatsApp for immediate support.',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const text = message || defaultMessage;
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl mb-4 animate-fade-in border border-gray-200">
          {/* Header */}
          <div className="bg-green-600 rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <span className="text-white font-semibold text-lg">WhatsApp Support</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl leading-none hover:text-green-100">
              ×
            </button>
          </div>
          {/* Agent Info & Welcome Message */}
          <div className="px-4 pt-4 pb-2 flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl border-2 border-white shadow-md">
              {AGENT.avatar}
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-xl px-3 py-2 text-gray-800 text-sm shadow-sm">
                Hello! 👋 Need assistance with Shipping & Logistics solutions? Chat with us on WhatsApp for immediate support.
              </div>
              <div className="mt-2 text-xs text-gray-700 font-semibold">
                {AGENT.name} <span className="font-normal text-gray-500">{AGENT.title}</span>
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="px-4 py-2 border-t border-gray-200 flex items-center gap-2 bg-white">
            <input
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
            />
            <button
              onClick={handleSend}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 flex items-center justify-center transition-colors"
              aria-label="Send message"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
          {/* Footer */}
          <div className="text-center text-xs text-gray-400 py-2 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            Powered by WhatsApp Business
          </div>
        </div>
      )}
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-green-500 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-colors"
          aria-label="WhatsApp Support"
        >
          <FaWhatsapp className="text-3xl" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">1</span>
        </button>
      )}
    </div>
  );
};

export default WhatsAppSupport; 