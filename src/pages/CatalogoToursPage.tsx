import { ChevronDown, Map, Mountain, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import TourCard from '../components/TourCard';
import { useStore, translations } from '../store/useStore';

export default function CatalogoToursPage() {
  const { language } = useStore();
  const t = translations[language];

  // Bilingual tour database for maximum SEO relevance focusing on Peru and Ayacucho
  const toursBilingual = {
    es: [
      {
        id: 'millpu-pools',
        title: 'AGUAS TURQUESAS DE MILLPU EXPEDITION',
        tags: 'Piscinas Naturales • Senderismo Andino • Cañonismo',
        description: 'Recorre las deslumbrantes piscinas naturales ocultas en un cañón de piedra caliza en el corazón de Ayacucho. Aventura de senderismo a gran altitud y exploración de aguas cristalinas sagradas.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'ALTA INTENSIDAD', color: 'bg-red-600' },
        icon: <Compass className="w-5 h-5 text-[#1A2530]" />,
      },
      {
        id: 'qorihuillca-canyon',
        title: 'CAÑÓN DE QORIHUILCA EXTREMO',
        tags: 'Rappel • Escalada en Roca • Grietas Milenarias',
        description: 'Desciende a través de las grietas milenarias y misteriosas del laberinto de piedra de Qorihuillca en Ayacucho. Un tour de rappel y aventura ultra-exclusiva.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'EXTREMO', color: 'bg-red-700' },
        icon: <Mountain className="w-5 h-5 text-[#1A2530]" />,
      },
      {
        id: 'salkantay-machupicchu',
        title: 'SALKANTAY TREK TO MACHU PICCHU',
        tags: 'Glaciares • Selva Alta • Ruinas Incas',
        description: 'Conquista el imponente nevado Salkantay a más de 4,600 metros de altura antes de adentrarte en la ceja de selva y coronar la sagrada ciudadela inca de Machu Picchu.',
        image: 'https://images.unsplash.com/photo-1587593817642-8b9a7b19fa24?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'RECOMENDADO', color: 'bg-[#927429]' },
        icon: <Map className="w-5 h-5 text-[#1A2530]" />,
      },
    ],
    en: [
      {
        id: 'millpu-pools',
        title: 'MILLPU TURQUOISE POOLS EXPEDITION',
        tags: 'Natural Pools • Andean Trekking • Canyoning',
        description: 'Explore the stunning natural turquoise pools hidden inside a majestic limestone canyon in Ayacucho. A high-altitude hiking adventure into sacred crystal-clear waters.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'HIGH INTENSITY', color: 'bg-red-600' },
        icon: <Compass className="w-5 h-5 text-[#1A2530]" />,
      },
      {
        id: 'qorihuillca-canyon',
        title: 'QORIHUILCA EXTREME CANYON CRACKS',
        tags: 'Rappelling • Rock Climbing • Ancient Canyons',
        description: 'Descend through the narrow ancient crevices and mysterious stone maze of Qorihuillca Canyon in Ayacucho. An ultra-exclusive rappelling adventure.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'EXTREME', color: 'bg-red-700' },
        icon: <Mountain className="w-5 h-5 text-[#1A2530]" />,
      },
      {
        id: 'salkantay-machupicchu',
        title: 'SALKANTAY TREK TO MACHU PICCHU',
        tags: 'Glaciers • Cloud Forest • Inca Ruins',
        description: 'Conquer the imposing Mount Salkantay at over 4,600 meters of altitude before deep diving into the cloud forest and entering the sacred Inca citadel of Machu Picchu.',
        image: 'https://images.unsplash.com/photo-1587593817642-8b9a7b19fa24?q=80&w=2070&auto=format&fit=crop',
        badge: { text: 'RECOMMENDED', color: 'bg-[#927429]' },
        icon: <Map className="w-5 h-5 text-[#1A2530]" />,
      },
    ]
  };

  const tours = toursBilingual[language];

  // Specific SEO schemas for search engines
  const catalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'numberOfItems': tours.length,
    'itemListElement': tours.map((tour, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': `https://obeliscotravel.com/tours/${tour.id}`,
      'name': tour.title,
      'description': tour.description,
      'image': tour.image
    }))
  };

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24 overflow-hidden">
      <SEO
        title={language === 'es' ? 'Tours en Ayacucho y Perú | Catálogo de Aventuras | Obelisco Travel' : 'Tours in Ayacucho and Peru | Adventure Catalog | Obelisco Travel'}
        description={language === 'es' ? 'Descubre tours extremos en Ayacucho y el resto de Perú. Reserva el Cañón de Qorihuillca, Aguas de Millpu, y el Salkantay Trek a Machu Picchu.' : 'Discover extreme tours in Ayacucho and Peru. Book Qorihuillca Canyon cracks, Millpu turquoise pools, and Salkantay Trek to Machu Picchu.'}
        keywords="tours en ayacucho, tours en peru, turismo peru, aguas turquesas de millpu, cañon de qorihuillca, machu picchu trekking, salkantay trek, aventuras extremas peru, obelisco travel"
        schema={catalogSchema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#1A2530] text-white overflow-hidden h-[60vh] flex flex-col justify-center items-center text-center">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center animate-zoom-in"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2530] via-transparent to-[#1A2530]/50"></div>

        <div className="relative z-10 px-4 mt-16 animate-fade-in-down">
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6 animate-skew-in"
            style={{ textShadow: '4px 4px 0px #927429' }}
          >
            {t.catalogTitle}
          </h1>

          <div className="max-w-3xl mx-auto bg-[#324254]/80 backdrop-blur-sm border-2 border-[#1A2530] p-6 shadow-[8px_8px_0px_0px_#1A2530] animate-fade-in delay-200">
            <p className="text-base sm:text-lg text-white font-medium">
              {t.catalogSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

        {/* Filter Section */}
        <div className="bg-[#F5F4EC] border-2 border-[#1A2530] shadow-[8px_8px_0px_0px_#1A2530] p-8 sm:p-10 mb-16 animate-fade-in-up delay-300">
          <h2 className="text-3xl font-black uppercase text-[#405468] tracking-widest mb-8">
            {t.catalogFilterTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2530] mb-2">{t.catalogFilterIntensity}</label>
              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-[#1A2530] pb-2 text-sm font-medium text-[#1A2530] focus:outline-none appearance-none rounded-none cursor-pointer">
                  <option>{t.allLevels}</option>
                  <option>{t.moderate}</option>
                  <option>{t.highIntensity}</option>
                  <option>{t.extreme}</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A2530] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2530] mb-2">{t.catalogFilterActivity}</label>
              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-[#1A2530] pb-2 text-sm font-medium text-[#1A2530] focus:outline-none appearance-none rounded-none cursor-pointer">
                  <option>{t.allActivities}</option>
                  <option>{t.urbanExploration}</option>
                  <option>{t.natureTrekking}</option>
                  <option>{t.nightlifeMusic}</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A2530] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2530] mb-2">{t.catalogFilterRegion}</label>
              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-[#1A2530] pb-2 text-sm font-medium text-[#1A2530] focus:outline-none appearance-none rounded-none cursor-pointer">
                  <option>{t.global}</option>
                  <option>{t.asia}</option>
                  <option>{language === 'es' ? 'Sudamérica (Perú)' : 'South America (Peru)'}</option>
                  <option>{t.europe}</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A2530] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Tours Grid with staggered micro-animations */}
        <div className="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className={`animate-fade-in-up`}
              style={{ animationDelay: `${400 + (index * 150)}ms` }}
            >
              <TourCard {...tour} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

