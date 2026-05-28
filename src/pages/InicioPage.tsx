import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, MapPin, Bed, Plane } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useStore, translations } from '../store/useStore';

export default function InicioPage() {
  const { language } = useStore();
  const t = translations[language];
  const navigate = useNavigate();

  // Local Business travel schema for Ayacucho local search positioning
  const localAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': 'Obelisco Travel',
    'alternateName': 'Obelisco Tours Ayacucho',
    'description': language === 'es'
      ? 'Agencia de viajes líder en turismo de aventura y expediciones en Ayacucho y todo el Perú.'
      : 'Leading travel agency for adventure tourism and expeditions in Ayacucho and all of Peru.',
    'url': 'https://obeliscotravel.com',
    'logo': 'https://obeliscotravel.com/logo.png',
    'telephone': '+51999999999',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Portal Constitución 9',
      'addressLocality': 'Ayacucho',
      'addressRegion': 'Ayacucho',
      'postalCode': '03001',
      'addressCountry': 'PE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -12.9708,
      'longitude': -74.2239
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '06:00',
      'closes': '22:00'
    },
    'sameAs': [
      'https://www.facebook.com/obeliscotravel',
      'https://www.instagram.com/obeliscotravel'
    ]
  };

  const heroes = [
    {
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop",
      tag: t.homeTag,
      title: t.homeTitle,
      subtitle: t.homeSubtitle,
      cta: t.homeCTA,
      link: "/catalogotours"
    },
    {
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2070&auto=format&fit=crop",
      tag: language === 'es' ? "TOURS EN PERÚ" : "PERU TOURS",
      title: language === 'es' ? "DESCUBRE AYACUCHO" : "DISCOVER AYACUCHO",
      subtitle: language === 'es' ? "Rappel en cañones, aguas turquesas de Millpu y la historia viva de Ayacucho." : "Canyon rappelling, turquoise Millpu pools and the living history of Ayacucho.",
      cta: language === 'es' ? "VER TOURS" : "VIEW TOURS",
      link: "/catalogotours"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      tag: language === 'es' ? "ALOJAMIENTO VIP" : "VIP ACCOMMODATION",
      title: language === 'es' ? "HOTELES DE ALTO VOLTAJE" : "HIGH VOLTAGE HOTELS",
      subtitle: language === 'es' ? "Vistas panorámicas y acceso exclusivo a los mejores clubes." : "Panoramic views and exclusive access to the best clubs.",
      cta: language === 'es' ? "VER HOTELES" : "VIEW HOTELS",
      link: "/hoteles"
    },
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
      tag: language === 'es' ? "GUIAS EXPERTOS" : "EXPERT GUIDES",
      title: language === 'es' ? "LÍDERES DE AVENTURA" : "ADVENTURE LEADERS",
      subtitle: language === 'es' ? "Explora lo desconocido con verdaderos insiders locales." : "Explore the unknown with true local insiders.",
      cta: language === 'es' ? "CONOCER MÁS" : "LEARN MORE",
      link: "/guias"
    }
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroes.length]);

  return (
    <div className="bg-[#F5F4EC] min-h-screen overflow-hidden">
      <SEO
        title={language === 'es' ? 'Tours en Ayacucho y Aventuras en Perú | Obelisco Travel' : 'Ayacucho Tours & Peru Adventures | Obelisco Travel'}
        description={language === 'es'
          ? 'Reserva los mejores tours en Ayacucho y Perú. Vive la adrenalina en el Cañón de Qorihuillca, admira las Aguas de Millpu y explora Machu Picchu con guías expertos.'
          : 'Book the best adventure tours in Ayacucho and Peru. Rappel inside Qorihuillca Canyon, hike to Millpu turquoise pools, and explore Cusco.'
        }
        keywords="tours en ayacucho, turismo ayacucho, aguas turquesas de millpu, cañon de qorihuillca, tours en peru, peru adventure tourism, obelisco travel"
        schema={localAgencySchema}
      />

      {/* Hero Section */}
      <section className="relative bg-[#1A2530] text-white overflow-hidden h-[85vh]">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHero ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url("${hero.image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2530] via-[#1A2530]/80 to-transparent" />

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 pb-20 z-10">
              <div className={`max-w-3xl ${index === currentHero ? 'animate-fade-in-left' : ''}`}>
                <div className="inline-block bg-[#F5F4EC] text-black font-bold text-xs tracking-widest px-3 py-1 mb-6 shadow-[4px_4px_0px_0px_#927429]">
                  {hero.tag}
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6">
                  {hero.title.split(' ').map((word, idx) => (
                    <span key={idx} className="block">{word}</span>
                  ))}
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl font-medium">
                  {hero.subtitle}
                </p>
                <button
                  onClick={() => navigate(hero.link)}
                  className="bg-[#927429] hover:bg-[#7a6021] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 flex items-center gap-3 transition-colors shadow-[6px_6px_0px_0px_#000] cursor-pointer w-max"
                >
                  {hero.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() => setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length)}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-[#927429] border-2 border-white/20 hover:border-[#927429] text-white w-12 h-12 flex items-center justify-center transition-all duration-300"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentHero((prev) => (prev + 1) % heroes.length)}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-[#927429] border-2 border-white/20 hover:border-[#927429] text-white w-12 h-12 flex items-center justify-center transition-all duration-300"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {heroes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`transition-all duration-500 border-2 ${
                index === currentHero
                  ? 'w-10 h-3 bg-[#927429] border-[#927429]'
                  : 'w-3 h-3 bg-transparent border-white/40 hover:border-white'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-left">
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight text-[#1A2530]">
            {t.homeServicesTitle}
          </h2>
          <h2 className="text-5xl sm:text-6xl font-black uppercase italic leading-none tracking-tight text-[#927429] inline-block border-b-8 border-[#1A2530] pb-2">
            {t.homeServicesSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tours Privados */}
          <div
            onClick={() => navigate('/catalogotours')}
            className="md:col-span-2 bg-gradient-to-br from-[#927429] to-[#5a4819] p-10 flex flex-col justify-end min-h-[400px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-100"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <Compass className="w-12 h-12 mb-6 text-[#F5F4EC]" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-wide mb-3">{t.homeToursTitle}</h3>
              <p className="text-white/90 font-medium max-w-md">
                {t.homeToursDesc}
              </p>
            </div>
          </div>

          {/* Guias Expertos */}
          <div 
            onClick={() => navigate('/guias')}
            className="md:col-span-1 bg-gradient-to-br from-[#405468] to-[#1A2530] p-10 flex flex-col justify-end min-h-[400px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-200"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <MapPin className="w-12 h-12 mb-6 text-[#F5F4EC]" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-wide mb-3">{t.homeGuidesTitle}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Refugios */}
          <div 
            onClick={() => navigate('/hoteles')}
            className="bg-[repeating-linear-gradient(45deg,#2D3A4B,#2D3A4B_10px,#25303E_10px,#25303E_20px)] p-10 flex flex-col items-center justify-center min-h-[250px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-300"
          >
            <div className="relative z-10 text-white text-center">
              <Bed className="w-16 h-16 mb-4 mx-auto text-[#F5F4EC]" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-wide">{t.homeHotelsTitle}</h3>
            </div>
          </div>

          {/* Transporte Total */}
          <div
            onClick={() => navigate('/vuelos')}
            className="bg-gradient-to-tr from-[#7a6021] to-[#927429] p-10 flex flex-col justify-end min-h-[250px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-400"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <Plane className="w-16 h-16 mb-4 text-[#F5F4EC]" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-wide">{t.homeTransportTitle}</h3>
            </div>
          </div>
        </div>

        {/* Extra Tours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Aventura Extrema */}
          <div
            onClick={() => navigate('/catalogotours')}
            className="bg-gradient-to-br from-[#5a3b81] to-[#8b5c9a] p-10 flex flex-col justify-end min-h-[300px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-500"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Aventura Extrema</h3>
              <p className="text-white/80 text-sm">Rappel, trekking y descubrimiento en los paisajes más asombrosos.</p>
            </div>
          </div>
          {/* Experiencia Cultural */}
          <div
            onClick={() => navigate('/catalogotours')}
            className="bg-gradient-to-br from-[#3b6a5a] to-[#6abfa2] p-10 flex flex-col justify-end min-h-[300px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-600"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Cultura Viva</h3>
              <p className="text-white/80 text-sm">Visita pueblos tradicionales y descubre la historia viva del Perú.</p>
            </div>
          </div>
          {/* Relax y Naturaleza */}
          <div
            onClick={() => navigate('/hoteles')}
            className="bg-gradient-to-br from-[#4a6b8c] to-[#7da5d0] p-10 flex flex-col justify-end min-h-[300px] shadow-[12px_12px_0px_0px_#1A2530] relative overflow-hidden group cursor-pointer animate-fade-in-up delay-700"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Relax y Naturaleza</h3>
              <p className="text-white/80 text-sm">Descansa en alojamientos boutique rodeados de naturaleza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

    </div>
  );
}

