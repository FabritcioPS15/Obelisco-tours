import React from 'react'; import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/51999999999?text=Hola%20Obelisco%20Travel!%20Me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20y%20tours%20de%20aventura."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#1A2530] p-4 rounded-full border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#1A2530] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1A2530] transition-all duration-200 cursor-pointer flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip Label */}
      <span className="absolute right-16 bg-[#1A2530] text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-[#1A2530] shadow-[2px_2px_0px_0px_#927429] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        ¿Alguna consulta?
      </span>
      
      {/* WhatsApp SVG Icon */}
      <FaWhatsapp className="w-6 h-6 fill-current" />
    </a>
  );
}
