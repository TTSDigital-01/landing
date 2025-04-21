// components/TercerCTA.tsx

export default function TercerCTA() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          Si quieres transformar tu negocio, puedes empezar hoy.
        </h2>
        <a
          href="#contacto"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#1E3A8A] font-bold py-3 px-6 rounded-full transition duration-300"
        >
          ¡Contáctanos ahora!
        </a>
      </div>
    </section>
  );
}
