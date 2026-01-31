import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=Hello! I'm interested in your printing services.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 w-64 border border-gray-100">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-gray-900">We're Online!</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Need help? Chat with us on WhatsApp for quick assistance.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-center py-2.5 rounded-xl font-bold text-sm hover:from-secondary-600 hover:to-secondary-700 transition-colors shadow-lg shadow-secondary-500/25"
          >
            Start Chat
          </a>
        </div>
        {/* Triangle pointer */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-lg border-r border-b border-gray-100" />
      </div>

      {/* Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-secondary-500 animate-ping opacity-25" />
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform shadow-secondary-500/30">
          <MessageCircle className="text-white" size={32} />
        </div>
      </button>
    </div>
  );
}
