// components/PdfDownloadButton.jsx - Versión 19
'use client';

import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfInforme';

export default function InformePdf({ diagnostico }) {
  const [graficoDataURL, setGraficoDataURL] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Solo captura el gráfico cuando el diagnóstico está completo
  useEffect(() => {
    if (!diagnostico) return;

    const timer = setTimeout(() => {
      const graficoDiv = document.getElementById('grafico-comparativo');

      console.log("🔍 Elemento #grafico-comparativo encontrado?", graficoDiv ? "✅ Sí" : "❌ No");

      if (!graficoDiv) {
        setCargando(false);
        setError("No se encontró el elemento del gráfico");
        return;
      }

      // Asegura que el gráfico esté visible
      graficoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

      html2canvas(graficoDiv, {
        scale: 2,
        useCORS: true,
        ignoreElements: (element) => element.classList?.contains('no-capture') || false,
        logging: false
      })
        .then(canvas => {
          const image = canvas.toDataURL('image/png');
          console.log("📊 Imagen generada:", image.substring(0, 50) + "...");

          if (!image || image === 'data:,') {
            console.error("❌ La imagen está vacía");
            setError("La imagen del gráfico está vacía");
            setCargando(false);
            return;
          }

          setGraficoDataURL(image);
          setCargando(false);
        })
        .catch(err => {
          console.error("❌ Error al capturar el gráfico:", err);
          setError("Error al generar la imagen del gráfico");
          setCargando(false);
        });
    }, 3000); // Espera larga para asegurar renderizado

    return () => clearTimeout(timer);
  }, [diagnostico]);

  if (!diagnostico) {
    return (
      <div className="mt-8">
        <p className="text-gray-600">No hay datos disponibles</p>
      </div>
    );
  }

  if (cargando) {
    return (
      <div className="mt-8">
        <p className="text-gray-600">Preparando informe...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 text-red-600">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="underline mt-2">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <PDFDownloadLink
        document={<PdfDocument diagnostico={diagnostico} graficoDataURL={graficoDataURL} />}
        fileName="Diagnostico_Madurez_Digital.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? 'Generando PDF...' : 'Descargar Informe'
        }
      </PDFDownloadLink>

      {/* Botón alternativo */}
      <div className="mt-4">
        <button
          type="button"
          onClick={() => alert(`Datos del diagnóstico:\nNombre: ${diagnostico.nombre}\nEmpresa: ${diagnostico.empresa}`)}
          className="text-blue-600 underline"
        >
          Ver datos del diagnóstico
        </button>
      </div>
    </div>
  );
}