import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Map, Clock, Users, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { useStore, translations } from '../store/useStore';
import { FaWhatsapp } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../components/calendar.css';

// Bilingual Tour details data focusing heavily on Peru and Ayacucho
const tourDetailsDataBilingual: Record<'es' | 'en', Record<string, any>> = {
  es: {
    'millpu-pools': {
      title: 'AGUAS TURQUESAS DE MILLPU EXPEDITION',
      intensity: 'ALTA INTENSIDAD',
      color: 'bg-red-600',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop',
      duration: '1 Día (Full Day)',
      groupSize: 'Máx 8 personas',
      location: 'Ayacucho, Perú',
      description: 'Sumérgete en la belleza surrealista de las Aguas Turquesas de Millpu. Recorre el cañón de piedra caliza y admira más de 20 piscinas naturales de color turquesa y esmeralda. Un recorrido de aventura, misticismo y naturaleza altoandina que te dejará sin aliento.',
      keywords: 'aguas turquesas de millpu, tours en ayacucho, millpu ayacucho, piscinas naturales ayacucho, tours en peru, trekking ayacucho, obelisco travel',
      itinerary: [
        { time: '07:30', title: 'Partida desde Ayacucho', desc: 'Salida en transporte privado hacia el sur de la región de Huancaraylla.' },
        { time: '10:30', title: 'Inicio del Trekking', desc: 'Caminata de ascenso de dificultad moderada a lo largo del espectacular cañón de piedra.' },
        { time: '11:30', title: 'Exploración de las Piscinas de Millpu', desc: 'Fotografía, exploración de las grietas de agua y contemplación de las cascadas ocultas.' },
        { time: '13:30', title: 'Almuerzo de Aventura', desc: 'Degustación de trucha local fresca al aire libre con vista al cañón.' },
        { time: '15:30', title: 'Retorno a la ciudad', desc: 'Viaje de vuelta disfrutando del atardecer sobre los Andes.' }
      ]
    },
    'qorihuillca-canyon': {
      title: 'CAÑÓN DE QORIHUILCA EXTREMO',
      intensity: 'EXTREMO',
      color: 'bg-red-700',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
      duration: '6 Horas',
      groupSize: 'Máx 6 personas',
      location: 'Ayacucho, Perú',
      description: 'Atrévete a penetrar en las misteriosas y angostas grietas del Cañón de Qorihuillca. Un laberinto subterráneo de piedra tallado por el agua y el tiempo. Esta expedición requiere coraje, arneses, equipo de rappel y un espíritu indomable listo para la máxima adrenalina.',
      keywords: 'cañon de qorihuillca, turismo aventura ayacucho, rappel en ayacucho, grietas de qorihuillca, turismo extremo peru, obelisco travel',
      itinerary: [
        { time: '08:00', title: 'Punto de Encuentro', desc: 'Reunión en la Plaza de Armas de Ayacucho y entrega de equipo técnico homologado.' },
        { time: '09:00', title: 'Descenso al Cañón', desc: 'Primer rappel vertical de 15 metros para ingresar a las grietas ocultas.' },
        { time: '10:30', title: 'Exploración del Laberinto', desc: 'Caminata entre paredes de roca de más de 30 metros de altura que bloquean la luz del sol.' },
        { time: '12:30', title: 'Ascenso Técnico', desc: 'Escalada guiada y salida del cañón con cuerdas de seguridad.' },
        { time: '14:00', title: 'Retorno y Celebración', desc: 'Regreso a Ayacucho para compartir una bebida helada y anécdotas de la aventura.' }
      ]
    },
    'salkantay-machupicchu': {
      title: 'SALKANTAY TREK TO MACHU PICCHU',
      intensity: 'ALTA INTENSIDAD',
      color: 'bg-[#927429]',
      image: 'https://images.unsplash.com/photo-1587593817642-8b9a7b19fa24?q=80&w=2070&auto=format&fit=crop',
      duration: '5 Días / 4 Noches',
      groupSize: 'Máx 10 personas',
      location: 'Cusco, Perú',
      description: 'Una de las rutas de senderismo más hermosas y extremas del mundo. Supera el paso Salkantay a 4,630 m.s.n.m., atraviesa majestuosos glaciares andinos, desciende hacia la densa ceja de selva de Quillabamba y culmina con la entrada triunfal a la milenaria ciudadela inca de Machu Picchu.',
      keywords: 'salkantay trek, machu picchu tour, caminata salkantay peru, tours en peru, trekking extremo machu picchu, obelisco travel',
      itinerary: [
        { time: 'Día 1', title: 'Cusco a Soraypampa & Laguna Humantay', desc: 'Inicio del viaje y caminata de aclimatación hacia la impresionante laguna Humantay.' },
        { time: 'Día 2', title: 'El Paso Salkantay', desc: 'El día más desafiante. Cruce del paso andino a 4,630 metros bajo el imponente glaciar.' },
        { time: 'Día 3', title: 'Descenso a la Selva Alta', desc: 'Transición radical de clima andino a selva subtropical. Caminata entre plantaciones de café.' },
        { time: 'Día 4', title: 'Hidroeléctrica a Aguas Calientes', desc: 'Caminata al lado de las vías del tren rodeados por colosales montañas verdes.' },
        { time: 'Día 5', title: 'Amanecer en Machu Picchu', desc: 'Ingreso guiado a la maravilla del mundo moderno y retorno por la tarde a Cusco.' }
      ]
    }
  },
  en: {
    'millpu-pools': {
      title: 'MILLPU TURQUOISE POOLS EXPEDITION',
      intensity: 'HIGH INTENSITY',
      color: 'bg-red-600',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop',
      duration: '1 Day (Full Day)',
      groupSize: 'Max 8 people',
      location: 'Ayacucho, Peru',
      description: 'Dive into the surreal beauty of the turquoise natural pools of Millpu. Trek through the breathtaking limestone canyon and admire over 20 emerald steps of water. An adventure full of mysticism and Andean nature that will blow your mind.',
      keywords: 'millpu turquoise pools, ayacucho tours, millpu canyon, peru travel, adventure travel peru, obelisco travel',
      itinerary: [
        { time: '07:30 AM', title: 'Departure from Ayacucho', desc: 'Travel in our private transport to the south, arriving at the region of Huancaraylla.' },
        { time: '10:30 AM', title: 'Trek Begins', desc: 'Moderate uphill hike along the spectacular limestone cliffs.' },
        { time: '11:30 AM', title: 'Exploring Millpu Pools', desc: 'Take photos, explore the water cracks, and contemplate the hidden waterfalls.' },
        { time: '01:30 PM', title: 'Adventure Lunch', desc: 'Taste fresh local trout in the open air overlooking the canyon.' },
        { time: '03:30 PM', title: 'Return trip', desc: 'Drive back to Ayacucho while enjoying a scenic sunset over the Andes.' }
      ]
    },
    'qorihuillca-canyon': {
      title: 'QORIHUILCA EXTREME CANYON CRACKS',
      intensity: 'EXTREME',
      color: 'bg-red-700',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
      duration: '6 Hours',
      groupSize: 'Max 6 people',
      location: 'Ayacucho, Peru',
      description: 'Dare to enter the narrow and mysterious stone cracks of Qorihuillca Canyon. An underground stone maze carved by water and time. This technical expedition requires harnesses, rappelling, and an indomitable spirit ready for peak adrenaline.',
      keywords: 'qorihuillca canyon, ayacucho adventure tours, rappelling peru, extreme travel ayacucho, obelisco travel',
      itinerary: [
        { time: '08:00 AM', title: 'Meeting Point', desc: 'Meet up at Ayacucho Main Square and check your professional gear.' },
        { time: '09:00 AM', title: 'Canyon Descent', desc: 'First vertical 15-meter rappel down to enter the secret stone crevices.' },
        { time: '10:30 AM', title: 'Crevice Exploration', desc: 'Walk between giant rock walls over 30 meters high that block out the sun.' },
        { time: '12:30 PM', title: 'Technical Ascent', desc: 'Guided climbing and exit from the canyon cracks using secure safety lines.' },
        { time: '02:00 PM', title: 'Return and Celebrate', desc: 'Head back to Ayacucho to share stories and a cold drink with your crew.' }
      ]
    },
    'salkantay-machupicchu': {
      title: 'SALKANTAY TREK TO MACHU PICCHU',
      intensity: 'HIGH INTENSITY',
      color: 'bg-[#927429]',
      image: 'https://images.unsplash.com/photo-1587593817642-8b9a7b19fa24?q=80&w=2070&auto=format&fit=crop',
      duration: '5 Days / 4 Nights',
      groupSize: 'Max 10 people',
      location: 'Cusco, Peru',
      description: 'One of the most beautiful and extreme trekking routes on Earth. Push your limits at the Salkantay Pass (4,630m), cross wild Andean glaciers, walk down into the dense high jungle, and finish with a majestic morning inside the sacred Inca citadel of Machu Picchu.',
      keywords: 'salkantay trek, machu picchu hiking, salkantay pass, peru trekking tours, extreme andes, obelisco travel',
      itinerary: [
        { time: 'Day 1', title: 'Cusco to Soraypampa & Humantay Lake', desc: 'Start your journey and acclimatize with a hike to the spectacular Humantay turquoise lake.' },
        { time: 'Day 2', title: 'The High Salkantay Pass', desc: 'The most demanding day. Cross the high-altitude pass at 4,630 meters under the glacier peak.' },
        { time: 'Day 3', title: 'Descent to Cloud Forest', desc: 'Drastic climate change from snowy Andes to subtropical high jungle. Walk through coffee fields.' },
        { time: 'Day 4', title: 'Hidroelectrica to Aguas Calientes', desc: 'Hike along the railway line surrounded by green towering canyon mountains.' },
        { time: 'Day 5', title: 'Sunrise at Machu Picchu', desc: 'Guided tour of the world wonder and return train ride back to Cusco in the afternoon.' }
      ]
    }
  }
};

export default function TourDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useStore();
  const t = translations[language];
  
  const currentTourData = tourDetailsDataBilingual[language];
  const activeId = id && currentTourData[id] ? id : 'millpu-pools';
  const data = currentTourData[activeId];

  const [fullName, setFullName] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [motivation, setMotivation] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const sendWhatsApp = () => {
    const message = language === 'es'
      ? `¡Hola Obelisco Travel!\n\nMe interesa reservar un cupo para el tour *${data.title}* en *${data.location}*.\n\n*Mis datos:*\n- *Nombre Completo:* ${fullName || 'No especificado'}\n- *Email:* ${emailAddress || 'No especificado'}\n- *Motivo para unirme:* ${motivation || 'No especificado'}`
      : `Hello Obelisco Travel!\n\nI am interested in reserving a spot for the *${data.title}* tour in *${data.location}*.\n\n*My details:*\n- *Full Name:* ${fullName || 'Not specified'}\n- *Email:* ${emailAddress || 'Not specified'}\n- *My motivation:* ${motivation || 'Not specified'}`;
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsApp();
  };

  // Custom rich schema for Search Engines (Trip Schema.org)
  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    'name': data.title,
    'description': data.description,
    'image': data.image,
    'touristType': 'Adventure travelers',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'price': '150.00',
      'eligibleQuantity': {
        '@type': 'QuantitativeValue',
        'maxValue': data.groupSize.match(/\d+/) ? parseInt(data.groupSize.match(/\d+/)[0]) : 8
      },
      'offeredBy': {
        '@type': 'TravelAgency',
        'name': 'Obelisco Travel',
        'url': 'https://obeliscotravel.com'
      }
    },
    'itinerary': data.itinerary.map((step: any, index: number) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.title,
      'description': step.desc
    }))
  };

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24 overflow-hidden">
      <SEO 
        title={`${data.title} | ${data.location} | Obelisco Travel`}
        description={data.description}
        keywords={data.keywords}
        image={data.image}
        schema={tripSchema}
      />
      
      {/* Hero Header with Zoom-in & Fade-in-down animations */}
      <div className="relative h-[50vh] sm:h-[60vh] flex items-end p-8 sm:p-16">
        <div className="absolute inset-0 bg-[#1A2530]">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay animate-zoom-in"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2530] via-transparent to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto animate-fade-in-down">
          <Link to="/catalogotours" className="inline-flex items-center text-white hover:text-[#927429] mb-6 font-bold text-xs uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {language === 'es' ? 'Volver al Catálogo' : 'Back to Catalog'}
          </Link>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className={`${data.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-[2px_2px_0px_0px_#000]`}>
              {data.intensity}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-none tracking-tight animate-skew-in">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details & Itinerary with slide-in-left animation */}
        <div className="lg:col-span-2 animate-fade-in-left delay-100">
          
          <div className="bg-white border-2 border-[#1A2530] p-8 shadow-[8px_8px_0px_0px_#1A2530] mb-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#1A2530] mb-6 border-b-4 border-[#1A2530] pb-2 inline-block">
              {language === 'es' ? 'La Experiencia' : 'The Experience'}
            </h2>
            <p className="text-[#1A2530]/80 font-medium text-lg leading-relaxed mb-8">
              {data.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t-2 border-[#1A2530]/10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/50 block mb-1">{t.tourDetailLocation}</span>
                <span className="font-bold text-[#1A2530] flex items-center text-xs sm:text-sm"><Map className="w-4 h-4 mr-2 text-[#927429] shrink-0" /> {data.location}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/50 block mb-1">{t.tourDetailDuration}</span>
                <span className="font-bold text-[#1A2530] flex items-center text-xs sm:text-sm"><Clock className="w-4 h-4 mr-2 text-[#927429] shrink-0" /> {data.duration}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/50 block mb-1">{t.tourDetailGroupSize}</span>
                <span className="font-bold text-[#1A2530] flex items-center text-xs sm:text-sm"><Users className="w-4 h-4 mr-2 text-[#927429] shrink-0" /> {data.groupSize}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/50 block mb-1">{t.tourDetailIntensity}</span>
                <span className="font-bold text-[#1A2530] flex items-center text-xs sm:text-sm"><Zap className="w-4 h-4 mr-2 text-[#927429] shrink-0" /> {data.intensity}</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-black uppercase tracking-widest text-[#1A2530] mb-8">
            {t.tourDetailItinerary}
          </h2>
          
          <div className="space-y-6">
            {data.itinerary.map((step: any, index: number) => (
              <div 
                key={index} 
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="w-24 shrink-0 flex flex-col items-center">
                  <div className="bg-[#1A2530] text-[#F5F4EC] text-xs font-black px-3 py-1 mb-2 whitespace-nowrap">
                    {step.time}
                  </div>
                  {index !== data.itinerary.length - 1 && (
                    <div className="w-0.5 h-full bg-[#1A2530]/20"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-black uppercase text-[#1A2530] mb-2">{step.title}</h3>
                  <p className="text-[#1A2530]/70 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Booking Widget with slide-in-right animation */}
        <div className="lg:col-span-1 animate-fade-in-right delay-200">
          <div className="bg-[#1A2530] text-[#F5F4EC] p-8 sticky top-24 shadow-[12px_12px_0px_0px_#927429] border-2 border-[#1A2530]">
            <h3 className="text-2xl font-black uppercase tracking-widest mb-6 border-b-2 border-[#F5F4EC]/20 pb-4 text-[#F5F4EC]">
              {t.tourDetailReserveTitle}
            </h3>
            
            <p className="text-sm font-medium mb-8 text-[#F5F4EC]/80">
              {t.tourDetailReserveSubtitle}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest block mb-2 text-[#F5F4EC]/60">{t.tourDetailFormName}</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent border-2 border-[#F5F4EC]/30 text-[#F5F4EC] px-4 py-3 focus:outline-none focus:border-[#927429] transition-colors text-sm font-medium" 
                  placeholder={t.tourDetailFormNamePlaceholder} 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest block mb-2 text-[#F5F4EC]/60">{t.tourDetailFormEmail}</label>
                <input 
                  type="email" 
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full bg-transparent border-2 border-[#F5F4EC]/30 text-[#F5F4EC] px-4 py-3 focus:outline-none focus:border-[#927429] transition-colors text-sm font-medium" 
                  placeholder={t.tourDetailFormEmailPlaceholder} 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest block mb-2 text-[#F5F4EC]/60">{t.tourDetailFormMotivation}</label>
                <textarea 
                  rows={3} 
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full bg-transparent border-2 border-[#F5F4EC]/30 text-[#F5F4EC] px-4 py-3 focus:outline-none focus:border-[#927429] transition-colors resize-none text-sm font-medium" 
                  placeholder={t.tourDetailFormMotivationPlaceholder}
                  required
                ></textarea>
            {/* Calendar for selecting tour date */}
            <div className="mt-4 max-w-[300px] mx-auto bg-[#1A2530] p-4 rounded-lg shadow-lg">
                <Calendar
                  onChange={(value) => setSelectedDate(value as Date)}
                  value={selectedDate ?? undefined}
                  className="react-calendar"
                />
            </div>
              </div>
              
              <div className="flex flex-col gap-3 pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-xs uppercase tracking-widest py-4 transition-colors border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {t.tourDetailButtonWA}
                </button>

                <button 
                  type="button"
                  onClick={() => alert(language === 'es' ? '¡Solicitud recibida! Nos pondremos en contacto contigo por correo electrónico a la brevedad.' : 'Request received! We will contact you via email shortly.')}
                  className="w-full bg-[#927429] hover:bg-[#F5F4EC] text-white hover:text-[#1A2530] font-black text-xs uppercase tracking-widest py-4 transition-colors border-2 border-transparent"
                >
                  {t.tourDetailButtonEmail}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
