import { Link } from 'react-router-dom';
import { Leaf, Sun, Droplets, Heart, TreePine, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { useStore } from '../store/useStore';

export default function SostenibilidadPage() {
  const { language } = useStore();

  const pillars = [
    {
      icon: TreePine,
      color: 'bg-[#3b6a5a]',
      title: language === 'es' ? 'Turismo de Bajo Impacto' : 'Low-Impact Tourism',
      content: language === 'es'
        ? 'Limitamos el tamaño de nuestros grupos a máximo 12 personas para minimizar el impacto en ecosistemas frágiles. Seguimos principios de Leave No Trace en todos nuestros tours.'
        : 'We limit group sizes to a maximum of 12 people to minimize impact on fragile ecosystems. We follow Leave No Trace principles on all our tours.'
    },
    {
      icon: Heart,
      color: 'bg-[#8b3a4a]',
      title: language === 'es' ? 'Apoyo a Comunidades Locales' : 'Support for Local Communities',
      content: language === 'es'
        ? 'El 80% de nuestros guías y proveedores son locales de Ayacucho. Colaboramos con artesanos, productores agrícolas y emprendedores locales para garantizar que el turismo beneficie directamente a las comunidades.'
        : '80% of our guides and suppliers are locals from Ayacucho. We collaborate with artisans, agricultural producers and local entrepreneurs to ensure tourism directly benefits communities.'
    },
    {
      icon: Droplets,
      color: 'bg-[#2a5f8a]',
      title: language === 'es' ? 'Conservación del Agua' : 'Water Conservation',
      content: language === 'es'
        ? 'Educamos a nuestros viajeros sobre la importancia de las fuentes de agua de los Andes. Parte de nuestros ingresos va a proyectos de acceso a agua potable en comunidades rurales de Ayacucho.'
        : 'We educate our travelers about the importance of Andean water sources. Part of our revenue goes to potable water access projects in rural communities of Ayacucho.'
    },
    {
      icon: Sun,
      color: 'bg-[#7a6021]',
      title: language === 'es' ? 'Energía Responsable' : 'Responsible Energy',
      content: language === 'es'
        ? 'En nuestras operaciones usamos vehículos con las menores emisiones posibles y promovemos el transporte público local. Nuestras oficinas operan con energías renovables desde 2022.'
        : 'In our operations we use vehicles with the lowest possible emissions and promote local public transport. Our offices have operated with renewable energy since 2022.'
    },
    {
      icon: Leaf,
      color: 'bg-[#4a6b3a]',
      title: language === 'es' ? 'Cero Plástico' : 'Zero Plastic',
      content: language === 'es'
        ? 'Hemos eliminado el plástico de un solo uso en todos nuestros tours. Entregamos botella reutilizable a cada viajero y promovemos que nuestros hoteles aliados implementen políticas libres de plástico.'
        : 'We have eliminated single-use plastic from all our tours. We give each traveler a reusable bottle and encourage our partner hotels to implement plastic-free policies.'
    },
    {
      icon: Globe,
      color: 'bg-[#3a4a7a]',
      title: language === 'es' ? 'Compensación de Carbono' : 'Carbon Offsetting',
      content: language === 'es'
        ? 'Calculamos la huella de carbono de cada tour y compensamos el 120% de las emisiones mediante reforestación en la Amazonía peruana. Trabajamos con organizaciones certificadas por el Ministerio del Ambiente.'
        : 'We calculate the carbon footprint of each tour and offset 120% of emissions through reforestation in the Peruvian Amazon. We work with organizations certified by the Ministry of the Environment.'
    }
  ];

  const stats = [
    { value: '80%', label: language === 'es' ? 'Proveedores Locales' : 'Local Suppliers' },
    { value: '120%', label: language === 'es' ? 'Carbono Compensado' : 'Carbon Offset' },
    { value: '0', label: language === 'es' ? 'Plástico de un Uso' : 'Single-Use Plastic' },
    { value: '12', label: language === 'es' ? 'Máx. por Grupo' : 'Max Group Size' },
  ];

  return (
    <div className="bg-[#F5F4EC] min-h-screen pb-24">
      <SEO
        title={language === 'es' ? 'Sostenibilidad | Obelisco Travel' : 'Sustainability | Obelisco Travel'}
        description={language === 'es' ? 'Descubre el compromiso de Obelisco Travel con el turismo responsable y la sostenibilidad.' : 'Discover Obelisco Travel\'s commitment to responsible tourism and sustainability.'}
      />

      {/* Hero */}
      <section className="bg-[#1A2530] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #927429 0, #927429 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-left">
            <div className="inline-block bg-[#3b6a5a] text-white font-black text-[10px] tracking-widest px-3 py-1 mb-6 border-2 border-[#927429] uppercase">
              {language === 'es' ? 'NUESTRO COMPROMISO' : 'OUR COMMITMENT'}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              <span className="block">{language === 'es' ? 'TURISMO' : 'RESPONSIBLE'}</span>
              <span className="block text-[#927429]">{language === 'es' ? 'RESPONSABLE' : 'TOURISM'}</span>
            </h1>
            <p className="text-white/70 font-medium text-base max-w-xl leading-relaxed">
              {language === 'es'
                ? 'En Obelisco Travel creemos que el turismo puede ser una fuerza positiva para el planeta y las comunidades locales. Así es cómo lo hacemos realidad.'
                : 'At Obelisco Travel we believe tourism can be a positive force for the planet and local communities. Here\'s how we make it happen.'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#927429] border-y-4 border-[#1A2530]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }, idx) => (
            <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl sm:text-5xl font-black text-[#1A2530] mb-1">{value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#1A2530]/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#1A2530] mb-12 tracking-tighter animate-fade-in-up">
          {language === 'es' ? 'NUESTROS 6 PILARES' : 'OUR 6 PILLARS'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, color, title, content }, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#1A2530] shadow-[6px_6px_0px_0px_#1A2530] p-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`${color} border-2 border-[#1A2530] p-4 w-fit mb-6`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#1A2530] mb-3 tracking-tight">{title}</h3>
              <p className="text-[#1A2530]/70 text-sm font-medium leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
