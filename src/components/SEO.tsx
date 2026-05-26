import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  image?: string;
  schema?: Record<string, any> | object;
}

export default function SEO({
  title = 'Obelisco Travel | Experiencias y Aventuras Extremas',
  description = 'Descubre viajes, tours privados, hoteles VIP y vuelos con Obelisco Travel. Llevamos tus aventuras al límite.',
  keywords = 'viajes extremos, tours privados, hoteles VIP, vuelos rápidos, aventura, Obelisco Travel',
  type = 'website',
  image = 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
  schema
}: SEOProps) {
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://obeliscotravel.com';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geolocation Meta Tags for Peru / Ayacucho search boosting */}
      <meta name="geo.region" content="PE-AYC" />
      <meta name="geo.placename" content="Ayacucho" />
      <meta name="geo.position" content="-12.9708;-74.2239" />
      <meta name="ICBM" content="-12.9708, -74.2239" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Obelisco Travel" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

