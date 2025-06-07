// src/app/components/Cuestionario/informePage.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Usa next/navigation en App Router
import PdfDownloadButton from './PdfDownloadButton';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function InformePage() {
  const router = useRouter();
  const [diagnostico, setDiagnostico] = useState(null);

  useEffect(() => {
    const datosGuardados = sessionStorage.getItem('diagnosticoFinal');
    if (!datosGuardados) {
      router.push('/madurez-digital');
      return;
    }

    const parsed = JSON.parse(datosGuardados);
    setDiagnostico(parsed);
  }, []);

  if (!diagnostico) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 bg-white">
        <img src="/logo-sf-1.png" alt="Logo TTS Digital" className="h-24 mb-8" />
        <p className="text-xl font-semibold text-primary-dark">Cargando informe...</p>
        <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-primary-light w-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  }

  const { nombre, empresa, tipoEmpresa, fecha, promedioGeneral, nivelGeneral, recomendacionGeneral, resultadosPorArea, fortalezas, oportunidadesClave } = diagnostico;
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-EC');

  // Datos del gráfico comparativo
  const dataComparativo = {
    labels: ['Personas', 'Canales Digitales', 'Comunicación', 'Marketing', 'Cliente', 'Operaciones', 'Datos', 'Seguridad', 'Estrategia', 'Innovación'],
    datasets: [
      {
        label: "Tu Puntaje",
        data: resultadosPorArea.map(r => r.puntaje),
        backgroundColor: '#FFD700',
        borderRadius: 4,
        barPercentage: 0.6
      },
      {
        label: "Promedio Sectorial",
        data: resultadosPorArea.map(r => {
          if (tipoEmpresa === "micro") return 2.2;
          if (tipoEmpresa === "pequeña") return 3.0;
          if (tipoEmpresa === "mediana") return 3.8;
          return 2.5;
        }),
        backgroundColor: '#b0b2bc',
        borderRadius: 4,
        barPercentage: 0.6
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 4,
        ticks: {
          callback: val => val.toFixed(1)
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div id="informe-contenido" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
      {/* Encabezado Institucional */}
      <div className="flex flex-col items-center justify-center text-center py-8 bg-white border-b border-gray-200">
        <img src="/logo-sf-1.png" alt="Logo TTS Digital" className="h-24 mb-6" />
        <h1 className="text-3xl font-bold text-primary-dark mb-4">Diagnóstico de Madurez Digital</h1>
        <p className="text-lg text-gray-600">Informe generado el {fechaFormateada}</p>
      </div>

      {/* Datos del Cliente */}
      <div className="bg-gray-50 rounded-lg shadow-md border border-blue-100 p-6 my-8">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Datos del Cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div>
            <label className="block text-sm text-gray-500">Nombre</label>
            <p className="font-medium text-primary-dark">{nombre}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500">Empresa</label>
            <p className="font-medium text-primary-dark">{empresa}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500">Tamaño de Empresa</label>
            <p className="font-medium text-primary-dark capitalize">{tipoEmpresa}</p>
          </div>
        </div>
      </div>

      {/* Diagnóstico General */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Diagnóstico General</h2>
        <p className="mb-6 text-gray-700">
          Tu empresa tiene un puntaje promedio de{' '}
          <strong>{parseFloat(promedioGeneral).toFixed(2)}</strong> de 4 posibles.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Nivel General:</strong> {nivelGeneral}
        </p>
      </div>

      {/* Gráfico Comparativo */}
      <div id="grafico-comparativo" className="max-w-4xl mx-auto my-10 h-96">
        <h3 className="text-lg font-semibold text-primary-dark mb-4">Comparativa por Área</h3>
        <Bar data={dataComparativo} options={options} />
      </div>

      {/* Acciones finales */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <button
          onClick={() => router.push('/')}
          className="bg-gray-300 hover:bg-gray-400 text-primary-dark px-6 py-3 rounded-full transition-all w-full md:w-auto"
        >
          Volver a Inicio 
        </button>
        <PdfDownloadButton diagnostico={diagnostico} />
        <a
          href={`https://wa.me/593968213129?text=Hola%20TTS%20Digital,%20quisiera%20mejorar%20mi%20madurez%20digital`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all inline-flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <span>Agendar Consulta</span>
          <span className="inline-block bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">💬</span>
        </a>
      </div>
    </div>
  );
}