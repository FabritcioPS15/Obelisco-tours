import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Coffee, Wifi, Star, X } from 'lucide-react';
import SEO from '../components/SEO';
import { useStore } from '../store/useStore';
import { FaWhatsapp } from 'react-icons/fa';

// Dummy data for hotels
export const hotelesData = {
  'neon-heights': {
    id: 'neon-heights',
    title: 'NEON HEIGHTS TOWER',
    location: 'Tokio, Japón',
    description: 'Domina el skyline desde la suite más alta. Acceso directo por ascensor privado al club subterráneo y vistas panorámicas de 360 grados.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop'
    ],
    amenities: 'Club VIP Integrado',
    badge: { text: 'VISTAS INCREÍBLES', color: 'bg-[#A58843] text-[#1A2530]' },
    price: '$850/noche',
    rating: 5.0,
    included: ['Desayuno buffet premium', 'Acceso ilimitado al club subterráneo', 'Transporte aeropuerto ida y vuelta en vehículo de lujo', 'Minibar de cortesía reabastecido diario'],
    rules: ['Check-in: 15:00 hrs', 'Check-out: 12:00 hrs', 'Exclusivo para mayores de 21 años', 'Dress code estricto para el club']
  },
  'concrete-oasis': {
    id: 'concrete-oasis',
    title: 'THE CONCRETE OASIS',
    location: 'Tulum, México',
    description: 'Donde la arquitectura brutalista se encuentra con la selva. Fiestas en la piscina de día, sesiones de techno de noche.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop'
    ],
    amenities: 'Pool Party, DJ Set',
    badge: { text: 'POOL PARTY', color: 'bg-[#1A2530] text-white' },
    price: '$450/noche',
    rating: 4.8,
    included: ['Acceso VIP a todas las pool parties', 'Una botella de champagne de bienvenida', 'Sesión de masajes de 30 min por estadía', 'Clases de yoga matutinas al aire libre'],
    rules: ['Check-in: 14:00 hrs', 'Check-out: 11:00 hrs', 'Adults Only', 'No se permiten mascotas']
  }
};

export default function HotelDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hotel = id && hotelesData[id as keyof typeof hotelesData] ? hotelesData[id as keyof typeof hotelesData] : null;

  if (!hotel) {
    return (
      <div className="bg-[#F5F4EC] min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-black uppercase text-[#1A2530] mb-4">Hotel no encontrado</h1>
        <p className="text-[#1A2530]/60 font-medium mb-8">El destino que buscas no está en nuestros registros o ya no está disponible.</p>
        <Link to="/hoteles" className="bg-[#A58843] text-[#1A2530] font-black uppercase tracking-widest px-8 py-4 border-2 border-[#1A2530] shadow-[6px_6px_0px_0px_#1A2530] hover:bg-[#1A2530] hover:text-white transition-colors">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24">
      <SEO title={`${hotel.title} | Obelisco Travel`} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={hotel.image} alt={hotel.title} className="w-full h-full object-cover animate-zoom-in" />
        <div className="absolute inset-0 bg-[#1A2530]/60"></div>
        <div className="absolute inset-0 flex flex-col justify-end max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 animate-fade-in-up">
          {hotel.badge && (
            <div className={`${hotel.badge.color} text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 w-max border-2 border-[#1A2530] shadow-[2px_2px_0px_0px_#1A2530]`}>
              {hotel.badge.text}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            {hotel.title}
          </h1>
          <p className="text-white/80 font-bold uppercase tracking-widest flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#A58843]" /> {hotel.location}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 animate-fade-in-left delay-100">
            <div className="bg-[#F5F4EC] border-2 border-[#1A2530] shadow-[8px_8px_0px_0px_#1A2530] p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-black text-[#1A2530] uppercase mb-6 border-b-4 border-[#1A2530] pb-4 inline-block">
                {language === 'es' ? 'La Experiencia' : 'The Experience'}
              </h2>
              <p className="text-[#1A2530]/80 font-medium mb-12 text-lg leading-relaxed">
                {hotel.description} Disfruta de un servicio impecable y comodidades de clase mundial en uno de los destinos más codiciados. Tu acceso directo a la adrenalina.
              </p>
              
              {/* Image Gallery */}
              {hotel.gallery && hotel.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                  {hotel.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-square border-2 border-[#1A2530] overflow-hidden shadow-[4px_4px_0px_0px_#1A2530] cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                  ))}
                </div>
              )}

              <h2 className="text-2xl font-black text-[#1A2530] uppercase mb-6 mt-8">
                {language === 'es' ? 'Comodidades Destacadas' : 'Premium Amenities'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="flex flex-col items-center p-6 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#A58843] bg-white">
                  <Bed className="w-8 h-8 text-[#A58843] mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-center text-[#1A2530]">Suite Luxury</span>
                </div>
                <div className="flex flex-col items-center p-6 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#A58843] bg-white">
                  <Coffee className="w-8 h-8 text-[#A58843] mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-center text-[#1A2530]">Room Service</span>
                </div>
                <div className="flex flex-col items-center p-6 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#A58843] bg-white">
                  <Wifi className="w-8 h-8 text-[#A58843] mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-center text-[#1A2530]">High Speed</span>
                </div>
                <div className="flex flex-col items-center p-6 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#A58843] bg-white">
                  <Star className="w-8 h-8 text-[#A58843] mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-center text-[#1A2530]">VIP Access</span>
                </div>
              </div>

              {/* Extra Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-[#1A2530] pt-12">
                <div>
                  <h3 className="text-xl font-black text-[#1A2530] uppercase mb-4">
                    {language === 'es' ? '¿Qué Incluye?' : 'What is included?'}
                  </h3>
                  <ul className="space-y-2">
                    {hotel.included?.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#1A2530]/80 font-medium">
                        <span className="text-[#A58843] mr-2">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#1A2530] uppercase mb-4">
                    {language === 'es' ? 'Políticas del Hotel' : 'Hotel Policies'}
                  </h3>
                  <ul className="space-y-2">
                    {hotel.rules?.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#1A2530]/80 font-medium">
                        <span className="text-[#A58843] mr-2">✦</span> {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Booking */}
          <div className="lg:col-span-1 animate-fade-in-right delay-200">
            <div className="bg-[#1A2530] border-2 border-[#1A2530] shadow-[8px_8px_0px_0px_#A58843] p-8 text-white sticky top-24">
              <h3 className="text-xl font-black uppercase mb-6 border-b-2 border-white/20 pb-4">
                {language === 'es' ? 'Reserva tu estadía' : 'Book your stay'}
              </h3>
              
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest block mb-1">
                    {language === 'es' ? 'Desde' : 'From'}
                  </span>
                  <span className="text-3xl font-black">{hotel.price}</span>
                </div>
                <div className="flex text-[#A58843]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/51999999999?text=Hola!%20Me%20interesa%20reservar%20${encodeURIComponent(hotel.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#25D366] text-[#1A2530] font-black uppercase tracking-widest py-4 px-4 hover:bg-[#128C7E] hover:text-white transition-colors border-2 border-transparent hover:border-[#1A2530] shadow-[4px_4px_0px_0px_#A58843] flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {language === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
                </a>
                <Link
                  to="/hoteles"
                  className="block w-full text-center bg-transparent border-2 border-[#A58843] text-white font-black uppercase tracking-widest py-4 px-4 hover:bg-[#A58843] hover:text-[#1A2530] transition-colors"
                >
                  {language === 'es' ? 'Volver a Hoteles' : 'Back to Hotels'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2530]/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video border-4 border-[#A58843] bg-black shadow-[16px_16px_0px_0px_#1A2530]">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#A58843] text-[#1A2530] border-2 border-[#1A2530] p-2 hover:bg-white transition-colors shadow-[4px_4px_0px_0px_#1A2530] z-10"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded Gallery Image" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}
