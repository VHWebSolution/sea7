import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <a
        href="https://api.whatsapp.com/send?phone=48984611646"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-s7green hover:bg-s7greend text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center w-16 h-16"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
