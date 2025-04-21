// components/PorqueDigitalizar.tsx
export default function PorqueDigitalizar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TÍTULO en Azul Oscuro */}
        <h2 className="text-3xl font-bold mb-12 text-[#1E3A8A]">
          ¿Por qué digitalizar tu negocio?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cuadro 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start">
            <img
              src="/icons/ICONO1.svg"
              alt="Incrementar tus ventas"
              className="w-12 h-12 mr-4 mt-1"
            />
            <div>
              {/* SUBTÍTULO en Azul Cerúleo */}
              <h3 className="text-xl font-semibold mb-2 text-center text-[#0087D1]">
                Incrementar tus ventas
              </h3>
              {/* TEXTO en Gris Plomo */}
              <p className="text-justify text-[#4A4A4A]">
                La digitalización ha demostrado tener un impacto significativo y
                cuantificable en el rendimiento de ventas de las MIPYMES. Diversos
                estudios indican un aumento promedio del 30% en el crecimiento anual
                de los ingresos para las PYMES que adoptan la digitalización.
              </p>
            </div>
          </div>

          {/* Cuadro 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start">
            <img
              src="/icons/ICONO2.svg"
              alt="Mayor ganancia"
              className="w-12 h-12 mr-4 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center text-[#0087D1]">
                Mayor ganancia
              </h3>
              <p className="text-justify text-[#4A4A4A]">
                El aumento de la rentabilidad se deriva de una combinación de
                mayores ingresos y la disminución de los costos, lo que subraya el
                beneficio financiero integral de la digitalización.
              </p>
            </div>
          </div>

          {/* Cuadro 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start">
            <img
              src="/icons/ICONO3.svg"
              alt="Mayor oportunidad de permanecer en el tiempo"
              className="w-12 h-12 mr-4 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center text-[#0087D1]">
                Mayor oportunidad de permanecer en el tiempo
              </h3>
              <p className="text-justify text-[#4A4A4A]">
                La adopción de tecnologías digitales mejora la competitividad, la
                productividad y la rentabilidad de una empresa, al tiempo que
                garantiza su supervivencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
