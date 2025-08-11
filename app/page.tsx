// src/app/page.tsx
import Image from "next/image";
import Linktree from "./components/linktree/linktree";

// Datos de ejemplo para tu tienda de velas
const candleLinks = [
  {
    id: 1,
    title: "🛒 Tienda Online",
    url: "https://tu-tienda.com",
    description: "Explora nuestra colección de velas aromáticas",
    icon: "🕯️"
  },
  {
    id: 2,
    title: "📱 Instagram",
    url: "https://instagram.com/tu-tienda-velas",
    description: "Síguenos para contenido exclusivo",
    icon: "📸"
  },
  {
    id: 3,
    title: "🎥 TikTok",
    url: "https://tiktok.com/@tu-tienda",
    description: "Videos de nuestros procesos artesanales",
    icon: "🎬"
  },
  {
    id: 4,
    title: "📧 Newsletter",
    url: "mailto:contacto@tu-tienda.com",
    description: "Suscríbete para ofertas especiales",
    icon: "💌"
  },
  {
    id: 5,
    title: "🎯 Catálogo PDF",
    url: "/catalogo-velas.pdf",
    description: "Descarga nuestro catálogo completo",
    icon: "📋"
  },
  {
    id: 6,
    title: "📍 Ubicación",
    url: "https://maps.google.com/tu-ubicacion",
    description: "Visita nuestro taller",
    icon: "🗺️"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center py-8 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to Candle Shop
        </h1>
        <p className="text-gray-600">
          ✨ Conecta con nosotros en todas nuestras plataformas ✨
        </p>
      </div>

      {/* Imagen Agregada */}
      <div className="flex justify-center px-4">
        <Image
          src="https://i.pinimg.com/736x/1d/bf/b8/1dbfb8df8ba697a34b942900f1ee1204.jpg"
          alt="Velas aromáticas decorativas"
          width={368}
          height={552}
          priority
        />
      </div>
      

      {/* Linktree Component */}
      <Linktree
        title="Candle Shop"
        subtitle="Velas artesanales hechas con amor 🕯️"
        profileImage="/candle-logo.jpg" // Opcional: agrega tu logo aquí
        links={candleLinks}
      />

      {/* Contenedor del botón del catálogo */}
      <div className="text-center py-8">
        <a
          href="/catalogo-velas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Revisa el catálogo
        </a>
      </div>
    </div>
  );
}