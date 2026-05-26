import React from 'react';
import { FaPlane, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useStore, translations } from '../store/useStore';

export default function VuelosTransportePage() {
  const { language } = useStore();
  const t = translations[language];

  const [origen, setOrigen] = React.useState('');
  const [destino, setDestino] = React.useState('');

  const handleWhatsAppConsult = () => {
    const text = language === 'es'
      ? `¡Hola Obelisco Travel!\n\nMe gustaría consultar disponibilidad de vuelos y transporte:\n- *Origen:* ${origen || 'No especificado'}\n- *Destino:* ${destino || 'No especificado'}`
      : `Hello Obelisco Travel!\n\nI would like to check availability for flights and transport:\n- *Origin:* ${origen || 'Not specified'}\n- *Destination:* ${destino || 'Not specified'}`;
    const url = `https://wa.me/51999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F5F4EC] min-h-screen animate-fade-in">
      <SEO 
        title={language === 'es' ? 'Vuelos y Transporte | Obelisco Travel' : 'Flights and Transport | Obelisco Travel'} 
        description={t.vuelosSubtitle}
      />
      
      {/* Top Split Section */}
      <section className="relative pt-20 pb-16 lg:py-0 overflow-hidden animate-fade-in-up">
        {/* Diagonal striped background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1A2530 0, #1A2530 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Text / Form Side */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-32 flex flex-col justify-center">
            <div className="inline-block bg-[#927429] text-white font-bold text-[10px] tracking-widest px-3 py-1 mb-6 shadow-[2px_2px_0px_0px_#1A2530] w-max uppercase">
              {t.vuelosBadge}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              {language === 'es' ? (
                <>
                  <span className="text-[#1A2530] block">LIBERTAD</span>
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A2530' }}>ABSOLUTA</span>
                </>
              ) : (
                <>
                  <span className="text-[#1A2530] block">ABSOLUTE</span>
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A2530' }}>FREEDOM</span>
                </>
              )}
            </h1>
            
            <p className="text-[#1A2530]/80 font-medium max-w-md border-l-4 border-[#927429] pl-4 mb-10 text-sm">
              {t.vuelosSubtitle}
            </p>
            
            {/* Search Form */}
            <div className="bg-white border-2 border-[#1A2530] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1A2530] relative z-20">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1 border-b-2 border-[#1A2530] pb-2 relative">
                  <label className="text-[10px] font-bold text-[#1A2530]/60 uppercase tracking-widest mb-1 block">{t.vuelosFormOrigen}</label>
                  <input 
                    type="text" 
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                    placeholder={t.vuelosFormOrigenPlaceholder} 
                    className="w-full bg-transparent text-sm font-medium text-[#1A2530] outline-none placeholder-[#1A2530]/40" 
                  />
                  <FaPlane className="absolute right-0 bottom-2 w-4 h-4 text-[#1A2530] opacity-50" />
                </div>
                <div className="flex-1 border-b-2 border-[#1A2530] pb-2 relative">
                  <label className="text-[10px] font-bold text-[#1A2530]/60 uppercase tracking-widest mb-1 block">{t.vuelosFormDestino}</label>
                  <input 
                    type="text" 
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    placeholder={t.vuelosFormDestinoPlaceholder} 
                    className="w-full bg-transparent text-sm font-medium text-[#1A2530] outline-none placeholder-[#1A2530]/40" 
                  />
                  <FaPlane className="absolute right-0 bottom-2 w-4 h-4 text-[#1A2530] opacity-50 rotate-90" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => alert(language === 'es' ? `Buscando rutas disponibles desde ${origen || 'tu origen'} hacia ${destino || 'tu destino'}...` : `Searching available routes from ${origen || 'your origin'} to ${destino || 'your destination'}...`)}
                  className="flex-1 bg-[#1A2530] hover:bg-[#927429] text-white font-black text-[10px] sm:text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center border-2 border-transparent cursor-pointer"
                >
                  {t.vuelosButtonSearch} <FaArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={handleWhatsAppConsult}
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-[10px] sm:text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#000] gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.906-6.99C16.452 1.875 13.974.843 11.34.843 5.902.843 1.48 5.263 1.478 10.702c-.001 1.698.443 3.355 1.288 4.845L1.83 20.89l5.59-1.464-.773-.472z"/>
                  </svg>
                  {t.vuelosButtonWA}
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative lg:min-h-screen flex items-center justify-center p-4 lg:p-12 hidden lg:flex">
            <div className="absolute inset-y-12 right-0 w-[90%] bg-[#1A2530] shadow-[-16px_16px_0px_0px_#1A2530]">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
                alt="Plane landing at sunset" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2530]/40 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features Section */}
      <section className="bg-[#2D3A4B] py-20 lg:py-28 animate-fade-in-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              <span className="text-white block">{language === 'es' ? 'MUEVETE' : 'MOVE'}</span>
              <span className="text-[#927429] block">{language === 'es' ? 'RÁPIDO' : 'FAST'}</span>
            </h2>
            <p className="text-white/70 max-w-sm text-right text-sm font-medium">
              {language === 'es' 
                ? 'Conexiones aéreas y terrestres diseñadas para los que no tienen tiempo que perder.'
                : 'Air and ground connections designed for those who have no time to waste.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#927429] p-8 aspect-[4/5] flex flex-col justify-end relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-100">
              <div className="absolute top-8 left-8 bg-[#1A2530] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                {language === 'es' ? 'VUELOS DIRECTOS' : 'DIRECT FLIGHTS'}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[#1A2530] uppercase leading-[0.9] tracking-tight mb-4">
                {language === 'es' ? <>Saltos <br/> Globales</> : <>Global <br/> Hops</>}
              </h3>
              <p className="text-[#1A2530]/80 text-xs font-medium">
                {language === 'es' ? 'Sin escalas, directo a la acción.' : 'Non-stop, straight to the action.'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 aspect-[4/5] flex flex-col justify-end relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-200">
              <div className="absolute top-8 left-8 bg-[#1A2530] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                {language === 'es' ? 'NIVEL: EXTREMO' : 'LEVEL: EXTREME'}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[#1A2530] uppercase leading-[0.9] tracking-tight mb-4">
                {language === 'es' ? <>Traslados <br/> Salvajes</> : <>Wild <br/> Transfers</>}
              </h3>
              <p className="text-[#1A2530]/60 text-xs font-medium">
                {language === 'es' ? 'Vehículos 4x4 para terrenos imposibles.' : '4x4 vehicles for impossible terrain.'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-transparent border border-white/20 p-8 aspect-[4/5] flex flex-col justify-end relative group cursor-pointer hover:-translate-y-2 hover:border-[#927429] transition-all duration-300 animate-fade-in-up delay-300">
              <div className="absolute top-8 left-8 bg-[#927429] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                {language === 'es' ? 'ALTA VELOCIDAD' : 'HIGH SPEED'}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
                {language === 'es' ? <>Rieles <br/> Nocturnos</> : <>Night <br/> Rails</>}
              </h3>
              <p className="text-white/60 text-xs font-medium">
                {language === 'es' ? 'Cruza países mientras duermes.' : 'Cross countries while you sleep.'}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
