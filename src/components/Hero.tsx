import Image from "next/image";
import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Entrenamiento CrossFit"
          className="w-full h-full object-cover object-top"
          fill
        />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {siteData.hero.title}
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          {siteData.hero.subtitle}
          {/* Entrenamiento personalizado de CrossFit para resultados reales */}
        </p>

        <a
          href={`https://wa.me/${siteData.hero.whatsapp}?text=Hola%20quiero%20info`}
          target="_blank"
          // className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-xl font-semibold text-lg"
          className="bg-green-500 hover:bg-red-600 transition px-8 py-4 rounded-xl font-semibold text-lg"
        >
          
          Reservar clase gratis 
        </a>



        

      </div>
    </section>
  );
}