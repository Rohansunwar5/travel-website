import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';

/**
 * WhatsAppContactButton component for redirecting to WhatsApp chat
 * @param {Object} props - Component props
 * @param {string} props.phoneNumber - WhatsApp phone number (include country code, e.g., '1234567890')
 * @param {string} [props.message=''] - Optional pre-filled message
 * @param {string} [props.buttonText='Contact Us'] - Text to display on the button
 * @param {string} [props.className=''] - Additional CSS classes
 */
const WhatsAppContactButton = ({ 
  phoneNumber, 
  message = '', 
  buttonText = 'Contact Us', 
  className = '' 
}: { phoneNumber: string; message?: string; buttonText?: string; className?: string; }) => {
  const handleWhatsAppRedirect = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct WhatsApp web URL
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleWhatsAppRedirect}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ${className}`}
    >
      {buttonText} <TiLocationArrow />
    </button>
  );
};

export default WhatsAppContactButton;