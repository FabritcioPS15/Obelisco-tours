import { Compass } from 'lucide-react';
import SEO from '../components/SEO';

export default function GuiasAventuraPage() {
  return (
    <div className="bg-[#F5F4EC] min-h-screen">
      <SEO
        title="Líderes de Aventura | Obelisco Travel"
        description="Olvida los guías aburridos. Conéctate con verdaderos insiders locales."
      />

      {/* Top Split Section */}
      <section className="relative pt-20 pb-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row relative">

          {/* Left Text Side */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-12 w-full lg:w-1/2 flex flex-col justify-center animate-fade-in-left">

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-4">
              <span className="text-[#1A2530] block">NO SOMOS</span>
              <span className="text-[#927429] block">GUÍAS.</span>
              <span className="text-[#1A2530] block">SOMOS</span>
              <span className="text-[#1A2530] block">LÍDERES DE</span>
              <span className="text-transparent italic block" style={{ WebkitTextStroke: '3px #1A2530', background: '#1A2530', color: 'white', padding: '0 10px', display: 'inline-block', transform: 'skewX(-10deg)', textShadow: '4px 4px 0px #927429' }}>AVENTURA.</span>
            </h1>

            <p className="text-[#1A2530]/80 font-medium max-w-sm mt-8 text-sm">
              Olvida los discursos aburridos y los paraguas de colores. Conéctate con verdaderos insiders locales que te llevarán al límite de la ciudad y más allá.
            </p>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in-right delay-200">
            <div className="absolute inset-0 bg-[#F5F4EC] z-10" style={{ clipPath: 'polygon(0 0, 20% 0, 0 100%)' }}></div>
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
              alt="Hiker walking up mountain"
              className="w-full h-auto min-h-[500px] object-cover"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
            />
          </div>
        </div>
      </section>

      {/* Filter / Tabs Section */}
      <section className="border-y-2 border-[#1A2530] py-6 my-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <span className="text-[#1A2530] text-[10px] font-black uppercase tracking-widest">
            ESPECIALIDAD:
          </span>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1A2530] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 border-2 border-[#1A2530]">
              ADRENALINA
            </button>
            <button className="bg-transparent text-[#1A2530] hover:bg-[#1A2530]/10 text-[10px] font-bold uppercase tracking-widest px-6 py-2 border-2 border-[#1A2530]">
              CULTURA LOCAL
            </button>
            <button className="bg-transparent text-[#1A2530] hover:bg-[#1A2530]/10 text-[10px] font-bold uppercase tracking-widest px-6 py-2 border-2 border-[#1A2530]">
              VIDA NOCTURNA
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="relative aspect-[3/4] bg-[#1A2530] shadow-[12px_12px_0px_0px_#1A2530] border-2 border-[#1A2530] flex flex-col justify-end p-8 group cursor-pointer animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute -top-4 right-8 bg-[#E5D5A5] text-[#1A2530] text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-[#1A2530] shadow-[2px_2px_0px_0px_#1A2530] transform rotate-3">
                VIDA NOCTURNA
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white uppercase leading-none mb-4">
                MATEO R.
              </h3>
              <p className="text-[#927429] text-[10px] font-black uppercase tracking-widest flex items-center">
                INTENSIDAD: ALTA
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative aspect-[3/4] bg-gradient-to-b from-[#A59D8C] to-[#1A2530] mt-12 shadow-[12px_12px_0px_0px_#1A2530] border-2 border-[#1A2530] flex flex-col justify-end p-8 group cursor-pointer animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute -top-4 -right-4 bg-[#D32F2F] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-[#1A2530] shadow-[2px_2px_0px_0px_#1A2530] transform -rotate-2 z-10">
                ADRENALINA
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white uppercase leading-none mb-4">
                ELENA V.
              </h3>
              <p className="text-[#D32F2F] text-[10px] font-black uppercase tracking-widest flex items-center">
                <span className="mr-2">⚠</span> INTENSIDAD: EXTREMA
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative aspect-[3/4] bg-[#405468] shadow-[12px_12px_0px_0px_#1A2530] border-2 border-[#1A2530] flex flex-col justify-end p-8 group cursor-pointer animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="absolute -top-4 -right-2 bg-[#405468] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-[#1A2530] shadow-[2px_2px_0px_0px_#1A2530]">
                CULTURA LOCAL
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white uppercase leading-none mb-4">
                CARLOS M.
              </h3>
              <p className="text-[#AEC6D4] text-[10px] font-black uppercase tracking-widest flex items-center">
                <Compass className="w-3 h-3 mr-2" /> INTENSIDAD: MEDIA
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
