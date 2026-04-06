export default function Trainer() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div>
          <img src="/face-yamil-short.png" alt="Entrenador personal" className="rounded-2xl w-full object-cover" />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>

          {/* FRASE CLAVE */}
          <p className="italic text-red-400 mb-4 text-lg">"No es solo entrenar, es cambiar tu estilo de vida"</p>

          <p className="text-gray-300 mb-4">Soy entrenador especializado en CrossFit y ayudo a personas comunes a lograr resultados reales.</p>

          <p className="text-gray-300 mb-6">Mi enfoque combina entrenamiento intenso, disciplina y seguimiento personalizado para que logres tus objetivos de forma sostenible.</p>

          <ul className="space-y-2 text-gray-200">
            <li>✔ +5 años de experiencia</li>
            <li>✔ Certificación en entrenamiento funcional</li>
            <li>✔ Planes personalizados</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
