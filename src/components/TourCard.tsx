import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
interface TourBadge {
  text: string;
  color: string;
}

interface TourCardProps {
  id: string;
  title: string;
  tags: string;
  description: string;
  image: string;
  badge: TourBadge | null;
  icon: ReactNode;
}

export default function TourCard({
  id,
  title,
  tags,
  description,
  image,
  badge,
  icon,
}: TourCardProps) {
  return (
    <div className="bg-[#F5F4EC] border-2 border-[#1A2530] shadow-[10px_10px_0px_0px_#1A2530] flex flex-col h-full group">
      <div className="relative h-64 border-b-2 border-[#1A2530]">
        <div className="w-full h-full overflow-hidden absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {badge && (
          <div className={`absolute top-4 left-4 ${badge.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-[2px_2px_0px_0px_#1A2530] z-10`}>
            {badge.text}
          </div>
        )}

        <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#927429] border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#1A2530] flex items-center justify-center z-20 group-hover:-translate-y-1 transition-transform">
          {icon}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-[#1A2530] uppercase tracking-wide mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-[10px] font-bold text-[#405468] uppercase tracking-widest mb-4 font-mono">
          {tags}
        </p>

        <p className="text-sm text-[#1A2530]/80 font-medium mb-8 flex-grow">
          {description}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/tours/${id}`}
            className="flex-1 text-center bg-transparent border-2 border-[#1A2530] text-[#1A2530] text-[10px] font-black uppercase tracking-widest py-3 px-4 shadow-[4px_4px_0px_0px_#1A2530] hover:bg-[#1A2530] hover:text-white transition-colors"
          >
            Detalles
          </Link>
          <a
            href={`https://wa.me/51999999999?text=Hola!%20Me%20interesa%20el%20tour%20${encodeURIComponent(title)}.%20¿Me%20podrían%20dar%20más%20información?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#25D366] border-2 border-[#1A2530] text-[#1A2530] text-[10px] font-black uppercase tracking-widest py-3 px-4 shadow-[4px_4px_0px_0px_#1A2530] hover:bg-[#128C7E] hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <FaWhatsapp className="w-4 h-4" />

            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
