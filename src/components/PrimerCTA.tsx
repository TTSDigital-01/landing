// src/components/PrimerCTA.tsx

export default function PrimerCTA() {
  return (
    <section className="bg-gray-100 mt-12 py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6">
        Recibe una asesoría gratis
      </h2>
      <a
        href="#contacto"
        className="inline-block bg-[#FFD700] text-[#1E3A8A] font-semibold py-3 px-6 rounded-2xl hover:bg-yellow-400 transition-colors"
      >
        ¡Contáctanos ahora!
      </a>
    </section>
  );
}
