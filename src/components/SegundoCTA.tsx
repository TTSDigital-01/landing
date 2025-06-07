import Image from "next/image";

export default function SegundoCTA() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        {/* TÍTULO en Azul Oscuro */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6">
          ¿Cuál es el nivel de madurez digital de tu empresa?
        </h2>

        {/* BOTÓN con fondo Oro y texto Azul Oscuro */}
        <a
          href="/madurez-digital"
          className="inline-block bg-[#FFD700] text-[#1E3A8A] font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-yellow-300 transition"
        >
          ¡Conócelo ahora!
        </a>
      </div>

      <div className="md:w-1/2">
        <Image
          src="/CTA2.png"
          alt="Transformación digital"
          width={600}
          height={400}
          className="rounded-2xl shadow-md"
        />
      </div>
    </section>
  );
}
