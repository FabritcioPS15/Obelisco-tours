import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { language } = useStore();

  const navLinks = [
    { label: language === 'es' ? 'Inicio' : 'Home', to: '/' },
    { label: language === 'es' ? 'Tours' : 'Tours', to: '/catalogotours' },
    { label: language === 'es' ? 'Hoteles' : 'Hotels', to: '/hoteles' },
    { label: language === 'es' ? 'Vuelos' : 'Flights', to: '/vuelos' },
    { label: language === 'es' ? 'Guías' : 'Guides', to: '/guias' },
  ];

  const legal = [
    { label: language === 'es' ? 'Política de Privacidad' : 'Privacy Policy', to: '/privacidad' },
    { label: language === 'es' ? 'Términos de Servicio' : 'Terms of Service', to: '/terminos' },
    { label: language === 'es' ? 'Sostenibilidad' : 'Sustainability', to: '/sostenibilidad' },
  ];

  return (
    <footer className="bg-[#1A2530] text-white mt-auto">

      {/* CTA Strip */}
      <div className="bg-[#927429] border-y-4 border-[#1A2530]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/70 mb-1">
              {language === 'es' ? '¿LISTO PARA LA AVENTURA?' : 'READY FOR THE ADVENTURE?'}
            </p>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1A2530] leading-none tracking-tighter">
              {language === 'es' ? 'Reserva tu experiencia hoy.' : 'Book your experience today.'}
            </h3>
          </div>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1A2530] text-white font-black text-xs uppercase tracking-widest px-8 py-4 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:text-[#1A2530] transition-colors whitespace-nowrap"
          >
            <FaWhatsapp className="w-5 h-5" />
            {language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-black italic text-[#927429] leading-none">
                Obelisco<br />
                <span className="text-white not-italic text-xl tracking-widest font-bold">TRAVEL</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm font-medium leading-relaxed mb-6">
              {language === 'es'
                ? 'Agencia de aventura líder en Ayacucho. Tours, hoteles y experiencias que nunca olvidarás.'
                : 'Leading adventure agency in Ayacucho. Tours, hotels and experiences you will never forget.'}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/obeliscotravel', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/obeliscotravel', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'Youtube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border-2 border-white/20 hover:border-[#927429] hover:bg-[#927429] flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#927429] mb-6 border-b-2 border-[#927429]/30 pb-3">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-medium text-white/70 hover:text-[#927429] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#927429] group-hover:w-4 transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#927429] mb-6 border-b-2 border-[#927429]/30 pb-3">
              {language === 'es' ? 'Legal' : 'Legal'}
            </h4>
            <ul className="space-y-3">
              {legal.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-medium text-white/70 hover:text-[#927429] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#927429] group-hover:w-4 transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#927429] mb-6 border-b-2 border-[#927429]/30 pb-3">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#927429] mt-0.5 shrink-0" />
                <span>Portal Constitución 9,<br />Ayacucho, Perú</span>
              </li>
              <li>
                <a href="tel:+51999999999" className="flex items-center gap-3 text-sm text-white/70 hover:text-[#927429] transition-colors">
                  <Phone className="w-4 h-4 text-[#927429] shrink-0" />
                  +51 999 999 999
                </a>
              </li>
              <li>
                <a href="mailto:info@obeliscotravel.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-[#927429] transition-colors">
                  <Mail className="w-4 h-4 text-[#927429] shrink-0" />
                  info@obeliscotravel.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">
            {language === 'es'
              ? '© 2024 Obelisco Travel. Todos los derechos reservados.'
              : '© 2024 Obelisco Travel. All rights reserved.'}
          </p>
          <p className="text-white/30 text-xs">
            {language === 'es' ? 'Hecho con ❤ en Ayacucho, Perú' : 'Made with ❤ in Ayacucho, Peru'}
          </p>
        </div>
      </div>

    </footer>
  );
}
