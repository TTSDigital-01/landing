'use client';

import { useState } from 'react';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado('enviando');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, telefono, mensaje })
      });

      if (res.ok) {
        setEstado('enviado');
        setNombre('');
        setEmail('');
        setTelefono('');
        setMensaje('');
      } else {
        setEstado('error');
      }
    } catch (err) {
      console.error('Error al enviar:', err);
      setEstado('error');
    }
  };

  return (
    <section id="contacto" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Columna 1: Información de contacto */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A]">Contáctanos</h2>

          <div className="flex items-start gap-4">
            <Phone className="text-blue-600 mt-1" />
            <div>
              <p className="text-[#1E3A8A] font-medium">Teléfono</p>
              <p className="text-gray-600">+593 96 821 3129</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MessageCircle className="text-green-500 mt-1" />
            <div>
              <p className="text-[#1E3A8A] font-medium">WhatsApp</p>
              <a
                href="https://wa.me/593968213129"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Enviar mensaje
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-red-500 mt-1" />
            <div>
              <p className="text-[#1E3A8A] font-medium">Email</p>
              <p className="text-gray-600">info@ttsdigital.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="text-purple-600 mt-1" />
            <div>
              <p className="text-[#1E3A8A] font-medium">Sitio Web</p>
              <a
                href="https://ttsdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                ttsdigital.com
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Formulario */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tucorreo@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+593..."
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </div>
          <button
            type="submit"
            disabled={estado === 'enviando'}
            className={`w-full bg-[#FFD700] text-[#1E3A8A] py-3 rounded-xl font-semibold transition duration-300 hover:bg-[#e6c200] ${
              estado === 'enviando' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {estado === 'enviando' ? 'Enviando...' : 'Enviar'}
          </button>

          {estado === 'enviado' && (
            <p className="text-green-600 font-medium text-center">Mensaje enviado con éxito ✅</p>
          )}
          {estado === 'error' && (
            <p className="text-red-600 font-medium text-center">Hubo un error. Intenta nuevamente.</p>
          )}
        </form>
      </div>
    </section>
  );
}
