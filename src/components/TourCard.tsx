import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="relative h-64 border-b-2 border-[#1A2530] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {badge && (
          <div className={`absolute top-4 left-4 ${badge.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-[2px_2px_0px_0px_#1A2530]`}>
            {badge.text}
          </div>
        )}

        <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#927429] border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#1A2530] flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform">
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
            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.906-6.99C16.452 1.875 13.974.843 11.34.843 5.902.843 1.48 5.263 1.478 10.702c-.001 1.698.443 3.355 1.288 4.845L1.83 20.89l5.59-1.464-.773-.472z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
