import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';

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
          <div className="relative z-10 w-full lg:w-3/5 flex flex-col justify-center mb-12 lg:mb-0">
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
          <div className="w-full lg:w-2/5 relative flex justify-end">
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
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-[#1A2530] mb-12 border-b-4 border-[#1A2530] pb-4 inline-block">
            DESTACADOS DE ALTO VOLTAJE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Large Feature Card */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-[#1A2530] border-2 border-[#1A2530] mb-6 overflow-hidden">
                {/* Simulated cross background */}
                <div className="absolute inset-0 opacity-80" style={{ background: 'linear-gradient(45deg, transparent 40%, #927429 40%, #927429 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, #927429 40%, #927429 60%, transparent 60%)' }}></div>
                <div className="absolute top-4 left-4 bg-[#A58843] text-[#1A2530] text-[9px] font-black uppercase tracking-widest px-2 py-1 z-10 border-2 border-[#1A2530]">
                  VISTAS INCREÍBLES
                </div>
              </div>
              <h3 className="text-3xl font-black text-[#1A2530] uppercase mb-2">NEON HEIGHTS TOWER</h3>
              <p className="text-[#1A2530]/60 text-[10px] font-bold uppercase tracking-widest flex items-center mb-4">
                <MapPin className="w-3 h-3 mr-1" /> Tokio, Japón <span className="mx-2">•</span> <span className="font-serif italic text-xs lowercase">Club VIP Integrado</span>
              </p>
              <p className="text-sm font-medium text-[#1A2530]/80">
                Domina el skyline desde la suite más alta. Acceso directo por ascensor privado al club subterráneo y vistas panorámicas de 360 grados.
              </p>
            </div>

            {/* Smaller Offset Card */}
            <div className="group cursor-pointer md:mt-24">
              <div className="relative aspect-[4/3] border-2 border-[#1A2530] mb-6 overflow-hidden bg-gradient-to-r from-[#A58843] to-[#e2e2e2]">
                <div className="absolute top-4 right-4 bg-[#1A2530] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 z-10">
                  POOL PARTY
                </div>
                <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 15% 100%)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A2530]/20"></div>
                </div>
              </div>
              <div className="border-l-4 border-[#A58843] pl-4">
                <h3 className="text-2xl font-black text-[#1A2530] uppercase mb-1">THE CONCRETE OASIS</h3>
                <p className="text-[#1A2530]/60 text-[10px] font-bold uppercase tracking-widest mb-3">
                  Tulum, México
                </p>
                <p className="text-sm font-medium text-[#1A2530]/80">
                  Donde la arquitectura brutalista se encuentra con la selva. Fiestas en la piscina de día, sesiones de techno de noche.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
