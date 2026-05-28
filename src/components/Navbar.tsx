import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useStore, translations } from '../store/useStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, searchQuery, setSearchQuery } = useStore();

  const t = translations[language];

  const navLinks = [
    { label: t.navDestinations, path: '/' },
    { label: t.navTours, path: '/catalogotours' },
    { label: t.navGuides, path: '/guias' },
    { label: t.navHotels, path: '/hoteles' },
    { label: t.navFlights, path: '/vuelos' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/catalogotours') {
      navigate('/catalogotours');
    }
  };

  const currentWhatsAppText = language === 'es' 
    ? 'Hola Obelisco Travel! Quiero reservar una consulta para planificar mi próximo viaje de aventura.'
    : 'Hello Obelisco Travel! I want to book a consultation to plan my next adventure trip.';

  return (
    <nav className="bg-[#F5F4EC] w-full z-50 border-b border-[#1A2530]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span
              className="text-2xl sm:text-3xl font-black italic text-[#927429] leading-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Obelisco <br /> Travel
            </span>
          </Link>

          {/* Search Bar Desktop */}
          <div className="hidden md:flex items-center relative border-2 border-[#1A2530] bg-[#F5F4EC] shadow-[3px_3px_0px_0px_#1A2530] transition-all duration-200 px-3 py-2 w-48 xl:w-60 focus-within:-translate-x-0.5 focus-within:-translate-y-0.5 focus-within:shadow-[4px_4px_0px_0px_#1A2530]">
            <input
              type="text"
              placeholder={t.catalogSearchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-[10px] font-black uppercase tracking-wider text-[#1A2530] outline-none placeholder-[#1A2530]/40 shrink"
            />
            <Search className="w-4 h-4 text-[#1A2530] opacity-60 ml-2" />
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive 
                      ? 'text-[#927429] underline underline-offset-[6px] decoration-2' 
                      : 'text-[#1A2530] hover:text-[#927429]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="bg-[#1A2530] text-white border-2 border-[#1A2530] text-[10px] font-black tracking-widest px-4 py-4 shadow-[4px_4px_0px_0px_#927429] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#927429] transition-all duration-200 uppercase cursor-pointer"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href={`https://wa.me/51999999999?text=${encodeURIComponent(currentWhatsAppText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#927429] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#7a6021] transition-colors shadow-[4px_4px_0px_0px_#1A2530] flex items-center gap-2 cursor-pointer border-2 border-[#1A2530]"
            >
              {t.navBookConsultation}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#1A2530] flex items-center gap-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Language Switcher Mobile */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLanguage(language === 'es' ? 'en' : 'es');
              }}
              className="bg-[#1A2530] text-white border border-[#1A2530] text-[9px] font-black tracking-widest px-2.5 py-1.5 shadow-[2px_2px_0px_0px_#927429] transition-all uppercase cursor-pointer"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-[#F5F4EC] border-b border-[#1A2530]/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 z-50' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center relative border-2 border-[#1A2530] bg-[#F5F4EC] px-3 py-3 w-full mb-4">
            <input
              type="text"
              placeholder={t.catalogSearchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-xs font-black uppercase tracking-wider text-[#1A2530] outline-none placeholder-[#1A2530]/40"
            />
            <Search className="w-4 h-4 text-[#1A2530] opacity-60 ml-2" />
          </div>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive 
                    ? 'text-[#927429] underline underline-offset-[6px] decoration-2' 
                    : 'text-[#1A2530] hover:text-[#927429]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`https://wa.me/51999999999?text=${encodeURIComponent(currentWhatsAppText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full mt-4 bg-[#927429] text-white text-xs font-bold uppercase tracking-widest px-6 py-4 shadow-[4px_4px_0px_0px_#1A2530] cursor-pointer border-2 border-[#1A2530]"
          >
            {t.navBookConsultation}
          </a>
        </div>
      </div>
    </nav>
  );
}
