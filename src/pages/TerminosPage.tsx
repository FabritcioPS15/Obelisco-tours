import { Link } from 'react-router-dom';
import { FileText, CreditCard, AlertTriangle, RefreshCw, CheckSquare, XCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useStore } from '../store/useStore';

export default function TerminosPage() {
  const { language } = useStore();

  const sections = [
    {
      icon: CheckSquare,
      title: language === 'es' ? '1. Aceptación de Términos' : '1. Acceptance of Terms',
      content: language === 'es'
        ? 'Al acceder y utilizar los servicios de Obelisco Travel, usted acepta estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestros servicios.'
        : 'By accessing and using Obelisco Travel\'s services, you agree to be legally bound by these Terms of Service. If you disagree with any of these terms, please do not use our services.'
    },
    {
      icon: CreditCard,
      title: language === 'es' ? '2. Reservas y Pagos' : '2. Bookings and Payments',
      content: language === 'es'
        ? 'Las reservas se confirman una vez recibido el pago completo o el depósito acordado. Los precios están expresados en dólares americanos (USD) e incluyen los impuestos correspondientes. Aceptamos transferencias bancarias, tarjetas de crédito y pagos vía WhatsApp.'
        : 'Bookings are confirmed upon receipt of full payment or agreed deposit. Prices are expressed in US dollars (USD) and include applicable taxes. We accept bank transfers, credit cards and WhatsApp payments.'
    },
    {
      icon: RefreshCw,
      title: language === 'es' ? '3. Política de Cancelación' : '3. Cancellation Policy',
      content: language === 'es'
        ? 'Cancelaciones con más de 15 días de anticipación: reembolso del 80%. Entre 7 y 15 días: reembolso del 50%. Menos de 7 días: sin reembolso. Las cancelaciones por causas de fuerza mayor (desastres naturales, emergencias médicas documentadas) serán evaluadas caso a caso.'
        : 'Cancellations more than 15 days in advance: 80% refund. Between 7 and 15 days: 50% refund. Less than 7 days: no refund. Cancellations due to force majeure (natural disasters, documented medical emergencies) will be evaluated case by case.'
    },
    {
      icon: AlertTriangle,
      title: language === 'es' ? '4. Responsabilidades del Viajero' : '4. Traveler Responsibilities',
      content: language === 'es'
        ? 'El viajero es responsable de contar con documentación válida (pasaporte, visas), seguros de viaje adecuados y condición física apropiada para las actividades contratadas. Obelisco Travel no se hace responsable por accidentes causados por negligencia del participante.'
        : 'The traveler is responsible for having valid documentation (passport, visas), adequate travel insurance and appropriate physical condition for contracted activities. Obelisco Travel is not responsible for accidents caused by participant negligence.'
    },
    {
      icon: XCircle,
      title: language === 'es' ? '5. Limitación de Responsabilidad' : '5. Limitation of Liability',
      content: language === 'es'
        ? 'Obelisco Travel actuará como intermediario entre el viajero y los proveedores de servicios. No asumimos responsabilidad por demoras, cancelaciones o cambios realizados por aerolíneas, hoteles u otros proveedores externos fuera de nuestro control directo.'
        : 'Obelisco Travel acts as an intermediary between the traveler and service providers. We assume no responsibility for delays, cancellations or changes made by airlines, hotels or other external providers beyond our direct control.'
    },
    {
      icon: FileText,
      title: language === 'es' ? '6. Ley Aplicable' : '6. Applicable Law',
      content: language === 'es'
        ? 'Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa será resuelta en los tribunales competentes de Ayacucho, Perú. Al usar nuestros servicios, usted consiente la jurisdicción exclusiva de dichos tribunales.'
        : 'These terms are governed by the laws of the Republic of Peru. Any dispute will be resolved in the competent courts of Ayacucho, Peru. By using our services, you consent to the exclusive jurisdiction of said courts.'
    }
  ];

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24">
      <SEO
        title={language === 'es' ? 'Términos de Servicio | Obelisco Travel' : 'Terms of Service | Obelisco Travel'}
        description={language === 'es' ? 'Términos y condiciones de uso de los servicios de Obelisco Travel.' : 'Terms and conditions for using Obelisco Travel services.'}
      />

      {/* Hero */}
      <section className="bg-[#1A2530] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #927429 0, #927429 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <div className="inline-block bg-[#927429] text-[#1A2530] font-black text-[10px] tracking-widest px-3 py-1 mb-6 border-2 border-[#1A2530] uppercase">
            LEGAL
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            {language === 'es' ? (
              <><span className="block">TÉRMINOS DE</span><span className="block text-[#927429]">SERVICIO</span></>
            ) : (
              <><span className="block">TERMS OF</span><span className="block text-[#927429]">SERVICE</span></>
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
