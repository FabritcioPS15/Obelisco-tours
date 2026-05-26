import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function Footer() {
  const { language } = useStore();

  const links = language === 'es'
    ? ['Política de Privacidad', 'Términos de Servicio', 'Sostenibilidad', 'Contáctanos']
    : ['Privacy Policy', 'Terms of Service', 'Sustainability', 'Contact Us'];

  return (
    <footer className="bg-[#EBE9DF] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link to="/" className="inline-block mb-10">
          <span className="text-3xl font-black italic text-[#927429]">
            Obelisco Travel
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-[#1A2530] hover:text-[#927429] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-[#1A2530]/60 text-xs font-medium">
          {language === 'es'
            ? '© 2024 Obelisco Travel. Todos los derechos reservados.'
            : '© 2024 Obelisco Travel. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
