"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Logo TTS Digital"
            width={32}
            height={32}
          />
          <h1 className="text-xl font-bold text-blue-800">TTS Digital</h1>
        </div>
        <nav className="space-x-6">
          <Link href="#inicio" className="text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link href="#servicios" className="text-gray-700 hover:text-blue-600">
            Servicios
          </Link>
          <Link
            href="#valores"
            className="text-gray-700 hover:text-blue-600"
          >
            Valores
          </Link>
          <Link
            href="#contacto"
            className="text-gray-700 hover:text-blue-600"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
