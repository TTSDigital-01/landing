"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 px-4 max-w-3xl text-white pt-24">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-sf-1.png"
            alt="Logo TTS Digital"
            width={500}
            height={200}
            style={{ height: "auto" }}
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2">
          DIGITALIZA, CRECE, TRANSFORMA
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#FFD700]">
          GANA
        </h2>
        <p className="text-lg mb-8">
          ¿Tu Negocio está listo para competir en la era digital?
          <br />
          En TTS Digital convertimos tus desafíos en oportunidades.
          <br />
          Impulsamos tu empresa con soluciones tecnológicas accesibles combinadas con un acompañamiento estratégico paso a paso.
          <br />
          No solo digitalizamos: te ayudamos a vender más, a operar con eficiencia y a crecer con impacto.
        </p>
        <div className="space-y-3 mb-6">
          <a href="#servicios" className="block bg-[#1E3A8A] text-[#FFD700] py-3 rounded-lg hover:bg-[#0087D1] transition">
            Atrae a Tus Clientes Ideales
          </a>
          <a href="#servicios2" className="block bg-[#1E3A8A] text-[#FFD700] py-3 rounded-lg hover:bg-[#0087D1] transition">
            Conquista a Tus Clientes con Experiencias Inolvidables
          </a>
          <a href="#servicios3" className="block bg-[#1E3A8A] text-[#FFD700] py-3 rounded-lg hover:bg-[#0087D1] transition">
            Trabaja de Forma Productiva
          </a>
          <a href="#servicios4" className="block bg-[#1E3A8A] text-[#FFD700] py-3 rounded-lg hover:bg-[#0087D1] transition">
            Define tu Rumbo
          </a>
        </div>
        <Link
          href="https://wa.me/593968213129"
          target="_blank"
          className="underline text-white hover:text-[#FFD700]"
        >
          Escríbenos al +593 96 821 3129
        </Link>
      </div>
    </section>
  );
}
