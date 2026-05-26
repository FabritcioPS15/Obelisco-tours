import React from 'react';

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
      <svg 
        className="w-6 h-6 fill-current" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.906-6.99C16.452 1.875 13.974.843 11.34.843 5.902.843 1.48 5.263 1.478 10.702c-.001 1.698.443 3.355 1.288 4.845L1.83 20.89l5.59-1.464-.773-.472z"/>
      </svg>
    </a>
  );
}
