// src/components/Footer.tsx

"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const handleWhatsappClick = () => {
    const endpoint = "/api/whatsapp-click";
    const data = JSON.stringify({ timestamp: new Date().toISOString() });

    // Enviar beacon
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: "application/json" });
      navigator.sendBeacon(endpoint, blob);
    } else {
      // Fallback si sendBeacon no está disponible
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
    }
  };

  return (
    <footer className="bg-[#1E3A8A] text-white py-10 relative">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo */}
        <Image
          src="/logo-sf-2.png"
          alt="Logo de TTS Digital"
          width={150}
          height={150}
        />

        {/* Lema */}
        <div className="text-center">
          <p className="text-xl font-bold leading-tight">
            DIGITALIZA, CRECE, TRANSFORMA
          </p>
          <p className="text-xl font-bold leading-tight text-[#FFD700]">GANA</p>
        </div>

        {/* Enlaces legales */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-[#FFD700] transition-colors">Política de privacidad</a>
          <a href="#" className="hover:text-[#FFD700] transition-colors">Términos y condiciones</a>
          <a href="#contacto" className="hover:text-[#FFD700] transition-colors">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-[#FFD700]"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#FFD700]"><FaInstagram /></a>
          <a href="#" className="hover:text-[#FFD700]"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-[#FFD700]"><FaYoutube /></a>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/593968213129"
        className="fixed bottom-6 right-6 shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
      >
        <Image
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          width={56}
          height={56}
        />
      </a>
    </footer>
  );
}
