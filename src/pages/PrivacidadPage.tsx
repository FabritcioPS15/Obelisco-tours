import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Users, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { useStore } from '../store/useStore';

export default function PrivacidadPage() {
  const { language } = useStore();

  const sections = [
    {
      icon: Database,
      title: language === 'es' ? '1. Información que Recopilamos' : '1. Information We Collect',
      content: language === 'es'
        ? 'Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, número de teléfono y detalles de reserva cuando utiliza nuestros servicios. También recopilamos información de uso del sitio web de forma anónima para mejorar su experiencia.'
        : 'We collect information you provide directly, such as name, email address, phone number and booking details when using our services. We also collect anonymous website usage data to improve your experience.'
    },
    {
      icon: Eye,
      title: language === 'es' ? '2. Cómo Usamos su Información' : '2. How We Use Your Information',
      content: language === 'es'
        ? 'Utilizamos su información para procesar reservas, enviar confirmaciones de tours y hoteles, responder a sus consultas vía WhatsApp o correo electrónico, y mejorar nuestros servicios. Nunca vendemos su información personal a terceros.'
        : 'We use your information to process bookings, send tour and hotel confirmations, respond to your inquiries via WhatsApp or email, and improve our services. We never sell your personal information to third parties.'
    },
    {
      icon: Lock,
      title: language === 'es' ? '3. Seguridad de Datos' : '3. Data Security',
      content: language === 'es'
        ? 'Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o divulgación. Utilizamos cifrado SSL en todas las comunicaciones del sitio web.'
        : 'We implement technical and organizational security measures to protect your personal information against unauthorized access, loss or disclosure. We use SSL encryption in all website communications.'
    },
    {
      icon: Users,
      title: language === 'es' ? '4. Compartir Información' : '4. Information Sharing',
      content: language === 'es'
        ? 'Podemos compartir su información con proveedores de servicios de confianza (hoteles, aerolíneas) que nos ayudan a operar nuestros servicios. Estos terceros están obligados a proteger su información y usarla solo para los fines especificados.'
        : 'We may share your information with trusted service providers (hotels, airlines) who help us operate our services. These third parties are required to protect your information and use it only for specified purposes.'
    },
    {
      icon: Shield,
      title: language === 'es' ? '5. Sus Derechos' : '5. Your Rights',
      content: language === 'es'
        ? 'Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, contáctenos a través de nuestro correo electrónico o WhatsApp. Responderemos dentro de 30 días hábiles.'
        : 'You have the right to access, correct or delete your personal information at any time. To exercise these rights, contact us via email or WhatsApp. We will respond within 30 business days.'
    },
    {
      icon: Mail,
      title: language === 'es' ? '6. Contacto' : '6. Contact',
      content: language === 'es'
        ? 'Si tiene preguntas sobre esta Política de Privacidad, contáctenos en info@obeliscotravel.com o al +51 999 999 999. También puede visitarnos en Portal Constitución 9, Ayacucho, Perú.'
        : 'If you have questions about this Privacy Policy, contact us at info@obeliscotravel.com or +51 999 999 999. You can also visit us at Portal Constitución 9, Ayacucho, Peru.'
    }
  ];

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24">
      <SEO
        title={language === 'es' ? 'Política de Privacidad | Obelisco Travel' : 'Privacy Policy | Obelisco Travel'}
        description={language === 'es' ? 'Conoce cómo Obelisco Travel protege tu información personal.' : 'Learn how Obelisco Travel protects your personal information.'}
      />

      {/* Hero */}
      <section className="bg-[#1A2530] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #927429 0, #927429 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <div className="inline-block bg-[#927429] text-[#1A2530] font-black text-[10px] tracking-widest px-3 py-1 mb-6 border-2 border-[#1A2530] uppercase">
            {language === 'es' ? 'LEGAL' : 'LEGAL'}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            {language === 'es' ? (
              <><span className="block">POLÍTICA DE</span><span className="block text-[#927429]">PRIVACIDAD</span></>
            ) : (
              <><span className="block">PRIVACY</span><span className="block text-[#927429]">POLICY</span></>
            )}
          </h1>
          <p className="text-white/60 font-medium text-sm max-w-lg">
            {language === 'es' ? 'Última actualización: Enero 2024' : 'Last updated: January 2024'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {sections.map(({ icon: Icon, title, content }, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#1A2530] shadow-[6px_6px_0px_0px_#1A2530] p-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#927429] border-2 border-[#1A2530] p-3 shrink-0">
                  <Icon className="w-5 h-5 text-[#1A2530]" />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight text-[#1A2530] mb-3">{title}</h2>
                  <p className="text-[#1A2530]/70 font-medium text-sm leading-relaxed">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1A2530] text-white font-black uppercase tracking-widest text-xs px-8 py-4 border-2 border-[#1A2530] shadow-[4px_4px_0px_0px_#927429] hover:bg-[#927429] transition-colors"
          >
            ← {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
          </Link>
        </div>
      </section>
    </div>
  );
}
