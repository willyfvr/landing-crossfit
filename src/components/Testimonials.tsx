export default function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Bajé 8kg en 2 meses y mejoré mi resistencia.",
    },
    {
      name: "María López",
      text: "Nunca pensé que iba a disfrutar entrenar tanto.",
    },
    {
      name: "Carlos Gómez",
      text: "Más fuerza, más energía y mejor calidad de vida.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Resultados de alumnos
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <p className="text-gray-300 mb-4">
              “{t.text}”
            </p>

            <p className="font-semibold text-red-400">
              {t.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}