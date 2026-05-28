import SEO from '../components/SEO';
import HotelCard from '../components/HotelCard';
import { hotelesData } from './HotelDetailPage';

export default function HotelesPage() {
  return (
    <div className="bg-[#F5F4EC] min-h-screen">
      <SEO
        title="Hoteles VIP | Obelisco Travel"
        description="Reserva hoteles exclusivos en el centro de la acción. Pool parties, vistas increíbles y acceso VIP."
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row relative px-4 sm:px-6 lg:px-8">

          {/* Left Text Side */}
          <div className="relative z-10 w-full lg:w-3/5 flex flex-col justify-center mb-12 lg:mb-0 animate-fade-in-left">
            <div className="inline-block bg-[#E5D5A5] text-[#1A2530] font-black text-[10px] tracking-widest px-3 py-1 mb-6 shadow-[2px_2px_0px_0px_#1A2530] w-max uppercase border-2 border-[#1A2530]">
              NIVEL: VIP EXCLUSIVO
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              <span className="text-[#1A2530] block">HOTELES EN EL</span>
              <span className="text-[#927429] block">CENTRO DE LA</span>
              <span className="text-[#927429] block">ACCIÓN</span>
            </h1>

            <p className="text-[#1A2530]/80 font-medium max-w-md mb-10 text-sm">
              Siente la adrenalina de las mejores pool parties, vistas de vértigo y acceso a los clubes más exclusivos. Tu reserva no es solo una habitación, es la entrada al festival de tu vida.
            </p>

            <button className="bg-[#A58843] hover:bg-[#1A2530] text-[#1A2530] hover:text-white font-black text-[10px] sm:text-xs uppercase tracking-widest py-4 px-8 w-max transition-colors border-2 border-[#1A2530] shadow-[6px_6px_0px_0px_#1A2530]">
              EXPLORAR OPCIONES
            </button>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-2/5 relative flex justify-end animate-fade-in-right delay-200">
            <div className="relative w-[90%] lg:w-[80%] aspect-[3/4] border-2 border-[#1A2530] shadow-[-16px_16px_0px_0px_#1A2530]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Hotel Pool at Sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2530] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-1">The Apex Rooftop</h3>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">IBIZA, ESPAÑA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-[#1A2530] mb-12 border-b-4 border-[#1A2530] pb-4 inline-block animate-fade-in-up">
            DESTACADOS DE ALTO VOLTAJE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-stretch">
            {Object.values(hotelesData).map((hotel, index) => (
              <div 
                key={hotel.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <HotelCard 
                  id={hotel.id}
                  title={hotel.title}
                  location={hotel.location}
                  description={hotel.description}
                  image={hotel.image}
                  badge={hotel.badge}
                  amenities={hotel.amenities}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
