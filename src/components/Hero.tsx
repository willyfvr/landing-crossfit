export default function Hero() {
  return (
  <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Transformá tu cuerpo en 90 días
      </h1>

      <p className="text-lg md:text-xl mb-6 text-gray-300">
        Entrenamiento personalizado de CrossFit
      </p>

      <a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold"
      >
        Reservar clase gratis
      </a>

    </section>
  )
}