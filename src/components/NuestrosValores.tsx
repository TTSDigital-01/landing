// components/NuestrosValores.tsx

import Image from "next/image";

export default function NuestrosValores() {
  return (
    <section id="valores" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">
        Nuestros Valores
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {/* Confianza */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow">
          <Image
            src="/icons/ICONO4.svg"
            alt="Icono Confianza"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#0087D1]">Confianza</h3>
          <p className="text-justify text-gray-700">
            Generamos relaciones basadas en la profesionalidad, fiabilidad y el respeto mutuo.
          </p>
        </div>

        {/* Innovación con Propósito */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow">
          <Image
            src="/icons/ICONO5.svg"
            alt="Icono Innovación con Propósito"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#0087D1]">Innovación con Propósito</h3>
          <p className="text-justify text-gray-700">
            Utilizamos tecnología de vanguardia para impulsar un crecimiento inclusivo y sostenible en las Mipymes.
          </p>
        </div>

        {/* Adaptabilidad */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow">
          <Image
            src="/icons/ICONO6.svg"
            alt="Icono Adaptabilidad"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#0087D1]">Adaptabilidad</h3>
          <p className="text-justify text-gray-700">
            Nos adaptamos a las necesidades específicas de cada cliente, ofreciendo soluciones personalizadas que se ajusten a sus objetivos y metas.
          </p>
        </div>

        {/* Solidaridad */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow">
          <Image
            src="/icons/ICONO7.svg"
            alt="Icono Solidaridad"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#0087D1]">Solidaridad</h3>
          <p className="text-justify text-gray-700">
            Nos comprometemos con el crecimiento y éxito de nuestros clientes, actuando como verdaderos socios estratégicos.
          </p>
        </div>
      </div>
    </section>
  );
}
