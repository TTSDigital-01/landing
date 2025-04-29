import Image from "next/image";

export default function NuestrosServicios() {
  return (
    <section id="servicios" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">
        Nuestros Servicios
      </h2>

      {/* Servicio 1 */}
      <div className="bg-gray-100 py-12 px-6 mb-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center text-[#0087D1] mb-4">
          Atrae a Tus Clientes Ideales
        </h3>
        <p className="text-center max-w-3xl mx-auto text-[#4A4A4A] mb-6">
          Conecta con quienes realmente valoran tu trabajo. Usa herramientas digitales para llegar a tu audiencia perfecta, aumentar tus ventas y convertir cada interacción en una experiencia significativa.
        </p>
        <Image
          src="/SERVICIO1.png"
          alt="Conéctate con el Mundo"
          width={800}
          height={400}
          className="mx-auto rounded-xl"
          priority
        />
      </div>

      {/* Servicio 2 */}
      <div id="servicios2" className="bg-gray-100 py-12 px-6 mb-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center text-[#0087D1] mb-4">
          Conquista a Tus Clientes con Experiencias Inolvidables
        </h3>
        <p className="text-center max-w-3xl mx-auto text-[#4A4A4A] mb-6">
          Fideliza a tus clientes con recompensas que enamoran, un servicio excepcional y momentos memorables. Aprovecha la tecnología para anticipar necesidades, resolver inquietudes al instante y convertir cada contacto en una razón para que regresen una y otra vez.
        </p>
        <Image
          src="/SERVICIO2.png"
          alt="Atrae a tus Clientes Ideales"
          width={800}
          height={400}
          className="mx-auto rounded-xl"
          priority
        />
      </div>

      {/* Servicio 3 */}
      <div id="servicios3" className="bg-gray-100 py-12 px-6 mb-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center text-[#0087D1] mb-4">
          Optimiza Tus Operaciones con Tecnología Inteligente
        </h3>
        <p className="text-center max-w-3xl mx-auto text-[#4A4A4A] mb-6">
          Simplifica procesos, reduce costos y ahorra tiempo con soluciones digitales diseñadas para hacer tu negocio más ágil. Automatiza tareas repetitivas, centraliza información y enfócate en lo que realmente importa: hacer crecer tu empresa.
        </p>
        <Image
          src="/SERVICIO3.png"
          alt="Trabaja de Forma Productiva"
          width={800}
          height={400}
          className="mx-auto rounded-xl"
          priority
        />
      </div>

      {/* Servicio 4 */}
      <div id="servicios4" className="bg-gray-100 py-12 px-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center text-[#0087D1] mb-4">
          Define tu rumbo
        </h3>
        <p className="text-center max-w-3xl mx-auto text-[#4A4A4A] mb-6">
          Define objetivos claros y alcanzables. Toma decisiones informadas basadas en datos. Adapta tu negocio a las oportunidades.
        </p>
        <Image
          src="/SERVICIO4.png"
          alt="Define tu rumbo"
          width={800}
          height={400}
          className="mx-auto rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
