import { create } from 'zustand';

interface StoreState {
  language: 'es' | 'en';
  searchQuery: string;
  setLanguage: (lang: 'es' | 'en') => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  language: 'es',
  searchQuery: '',
  setLanguage: (lang) => set({ language: lang }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

// Translation helper
export const translations = {
  es: {
    navDestinations: 'Destinos',
    navTours: 'Tours',
    navGuides: 'Guías',
    navHotels: 'Reservas de Hoteles',
    navFlights: 'Vuelos',
    navBookConsultation: 'Haz una Consulta',

    catalogTitle: 'VIVE LA INTENSIDAD',
    catalogSubtitle: 'Experiencias seleccionadas para quienes buscan lo extremo. Rompe la rutina. Siente el pulso. Descubre las aventuras más electrizantes del mundo.',
    catalogFilterTitle: 'ELIGE TU EMOCIÓN',
    catalogSearchPlaceholder: 'Buscar tours...',
    catalogFilterIntensity: 'Intensidad',
    catalogFilterActivity: 'Actividad',
    catalogFilterRegion: 'Región',

    allLevels: 'Todos los Niveles',
    moderate: 'Moderado',
    highIntensity: 'Alta Intensidad',
    extreme: 'Extremo',

    allActivities: 'Todas las Actividades',
    urbanExploration: 'Exploración Urbana',
    natureTrekking: 'Naturaleza y Senderismo',
    nightlifeMusic: 'Vida Nocturna y Música',

    global: 'Global',
    asia: 'Asia',
    southAmerica: 'Sudamérica',
    europe: 'Europa',

    searchNoResults: 'No se encontraron tours que coincidan con tu búsqueda.',

    tourDetailIntensity: 'INTENSIDAD',
    tourDetailDuration: 'DURACIÓN',
    tourDetailGroupSize: 'TAMAÑO DE GRUPO',
    tourDetailLocation: 'UBICACIÓN',
    tourDetailItinerary: 'ITINERARIO DE LA AVENTURA',
    tourDetailReserveTitle: 'RESERVA TU AVENTURA',
    tourDetailReserveSubtitle: 'Completa los detalles a continuación y nos comunicaremos de inmediato para asegurar tu cupo.',
    tourDetailFormName: 'Nombre Completo',
    tourDetailFormNamePlaceholder: 'Ingresa tu nombre',
    tourDetailFormEmail: 'Correo Electrónico',
    tourDetailFormEmailPlaceholder: 'tucorreo@ejemplo.com',
    tourDetailFormMotivation: '¿Por qué quieres unirte a este tour?',
    tourDetailFormMotivationPlaceholder: 'Cuéntanos qué buscas en esta aventura...',
    tourDetailButtonWA: 'RESERVAR POR WHATSAPP',
    tourDetailButtonEmail: 'ENVIAR POR CORREO',

    vuelosTitle: 'LIBERTAD ABSOLUTA',
    vuelosSubtitle: 'Vuelos directos y traslados salvajes. Sin esperas. Rompe la rutina y aterriza donde la adrenalina manda.',
    vuelosBadge: 'Llega Rápido, Vive Intenso',
    vuelosFormOrigen: 'Origen',
    vuelosFormOrigenPlaceholder: '¿De dónde escapas?',
    vuelosFormDestino: 'Destino',
    vuelosFormDestinoPlaceholder: '¿Hacia dónde vas?',
    vuelosButtonSearch: 'BUSCAR RUTAS',
    vuelosButtonWA: 'CONSULTAR POR WA',

    homeTag: 'NIVEL: EXTREMO',
    homeTitle: 'Explora sin límites.',
    homeSubtitle: 'Experiencias de alto octanaje para viajeros que no se conforman. Deja atrás lo convencional y abraza la adrenalina.',
    homeCTA: 'Empieza la aventura',
    homeServicesTitle: 'Nuestros',
    homeServicesSubtitle: 'Servicios',
    homeToursTitle: 'Tours Privados',
    homeToursDesc: 'Rutas exclusivas diseñadas para llevarte al límite. Nada de itinerarios estándar, pura exploración.',
    homeGuidesTitle: 'Guías Expertos',
    homeHotelsTitle: 'Refugios',
    homeTransportTitle: 'Transporte Total',

    floatingWATooltip: '¿Alguna consulta?',
    floatingWAMessage: 'Hola%20Obelisco%20Travel!%20Me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20y%20tours%20de%20aventura.',
  },
  en: {
    navDestinations: 'Destinations',
    navTours: 'Private Tours',
    navGuides: 'Adventure Guides',
    navHotels: 'Hotel Booking',
    navFlights: 'Flights',
    navBookConsultation: 'Book a Consultation',

    catalogTitle: 'LIVE THE INTENSITY',
    catalogSubtitle: 'Curated experiences for those who seek the extreme. Break the routine. Feel the pulse. Discover the world\'s most electrifying adventures.',
    catalogFilterTitle: 'CHOOSE YOUR THRILL',
    catalogSearchPlaceholder: 'Search tours...',
    catalogFilterIntensity: 'Intensity',
    catalogFilterActivity: 'Activity',
    catalogFilterRegion: 'Region',

    allLevels: 'All Levels',
    moderate: 'Moderate',
    highIntensity: 'High Intensity',
    extreme: 'Extreme',

    allActivities: 'All Activities',
    urbanExploration: 'Urban Exploration',
    natureTrekking: 'Nature & Trekking',
    nightlifeMusic: 'Nightlife & Music',

    global: 'Global',
    asia: 'Asia',
    southAmerica: 'South America',
    europe: 'Europe',

    searchNoResults: 'No tours found matching your search query.',

    tourDetailIntensity: 'INTENSITY',
    tourDetailDuration: 'DURATION',
    tourDetailGroupSize: 'GROUP SIZE',
    tourDetailLocation: 'LOCATION',
    tourDetailItinerary: 'ADVENTURE ITINERARY',
    tourDetailReserveTitle: 'SECURE YOUR ADVENTURE',
    tourDetailReserveSubtitle: 'Fill out the details below and we will contact you immediately to lock in your spot.',
    tourDetailFormName: 'Full Name',
    tourDetailFormNamePlaceholder: 'Enter your name',
    tourDetailFormEmail: 'Email Address',
    tourDetailFormEmailPlaceholder: 'yourname@example.com',
    tourDetailFormMotivation: 'Why do you want to join this tour?',
    tourDetailFormMotivationPlaceholder: 'Tell us what you are looking for in this adventure...',
    tourDetailButtonWA: 'RESERVE VIA WHATSAPP',
    tourDetailButtonEmail: 'SUBMIT VIA EMAIL',

    vuelosTitle: 'ABSOLUTE FREEDOM',
    vuelosSubtitle: 'Direct flights and wild transfers. No waiting. Break the routine and land where adrenaline rules.',
    vuelosBadge: 'Arrive Fast, Live Intense',
    vuelosFormOrigen: 'Origin',
    vuelosFormOrigenPlaceholder: 'Where are you escaping from?',
    vuelosFormDestino: 'Destination',
    vuelosFormDestinoPlaceholder: 'Where are you heading to?',
    vuelosButtonSearch: 'SEARCH ROUTES',
    vuelosButtonWA: 'CONSULT VIA WA',

    homeTag: 'LEVEL: EXTREME',
    homeTitle: 'Explore without limits.',
    homeSubtitle: 'High-octane experiences for travelers who don\'t compromise. Leave the conventional behind and embrace adrenaline.',
    homeCTA: 'Start the adventure',
    homeServicesTitle: 'Our',
    homeServicesSubtitle: 'Services',
    homeToursTitle: 'Private Tours',
    homeToursDesc: 'Exclusive routes designed to push you to the limit. No standard itineraries, pure exploration.',
    homeGuidesTitle: 'Expert Guides',
    homeHotelsTitle: 'Lodges',
    homeTransportTitle: 'Total Transport',

    floatingWATooltip: 'Any questions?',
    floatingWAMessage: 'Hello%20Obelisco%20Travel!%20I%20would%20like%20to%20request%20information%20about%20your%20services%20and%20adventure%20tours.',
  }
};
