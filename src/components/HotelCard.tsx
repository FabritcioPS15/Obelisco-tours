import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface HotelBadge {
  text: string;
  color?: string;
}

export interface HotelCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  badge?: HotelBadge;
  amenities?: string;
}

export default function HotelCard({
  id,
  title,
  location,
  description,
  image,
  badge,
  amenities
}: HotelCardProps) {
  return (
    <div className="bg-[#F5F4EC] border-2 border-[#1A2530] shadow-[10px_10px_0px_0px_#1A2530] flex flex-col h-full group relative">
      <div className="relative aspect-[4/3] border-b-2 border-[#1A2530]">
        <div className="w-full h-full overflow-hidden absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {badge && (
          <div className={`absolute top-4 left-4 ${badge.color || 'bg-[#A58843] text-[#1A2530]'} text-[9px] font-black uppercase tracking-widest px-2 py-1 shadow-[2px_2px_0px_0px_#1A2530] z-10 border-2 border-[#1A2530]`}>
            {badge.text}
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-[#1A2530] uppercase mb-2">
          {title}
        </h3>
        
        <p className="text-[#1A2530]/60 text-[10px] font-bold uppercase tracking-widest flex items-center mb-4">
          <MapPin className="w-3 h-3 mr-1" /> {location} 
          {amenities && (
            <>
              <span className="mx-2">•</span> 
              <span className="font-serif italic text-xs lowercase">{amenities}</span>
            </>
          )}
        </p>
        
        <p className="text-sm font-medium text-[#1A2530]/80 mb-8 flex-grow">
          {description}
        </p>

        <div className="flex gap-4">
          <Link 
            to={`/hoteles/${id}`}
            className="flex-1 text-center bg-transparent border-2 border-[#1A2530] text-[#1A2530] text-[10px] font-black uppercase tracking-widest py-3 px-4 shadow-[4px_4px_0px_0px_#1A2530] hover:bg-[#1A2530] hover:text-white transition-colors"
          >
            Detalles
          </Link>
          <a
            href={`https://wa.me/51999999999?text=Hola!%20Me%20interesa%20reservar%20el%20hotel%20${encodeURIComponent(title)}.%20¿Me%20podrían%20dar%20más%20información?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#A58843] border-2 border-[#1A2530] text-[#1A2530] text-[10px] font-black uppercase tracking-widest py-3 px-4 shadow-[4px_4px_0px_0px_#1A2530] hover:bg-[#1A2530] hover:text-white transition-colors flex items-center justify-center gap-1"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
