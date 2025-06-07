// src/app/api/sendDiagnosticoSheets/route.js - Versión mejorada con validación de duplicados
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validar que tenga email
    if (!body.email) {
      console.warn('⚠️ Email no proporcionado:', body.nombre, body.empresa);
    }

    // Imprimir los datos recibidos
    console.log('📩 Datos recibidos en API route:', body);

    // Validar si ya se ha procesado este diagnóstico antes
    const idUnico = `${body.nombre}-${body.empresa}-${body.tipoEmpresa}`;
    if (global.sentReports && global.sentReports.has(idUnico)) {
      console.warn('🚫 Envío duplicado detectado:', idUnico);
      return NextResponse.json({ success: true, duplicate: true, message: 'Este informe ya fue procesado' });
    }

    const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;

    if (!SHEETS_WEBHOOK_URL) {
      console.error('❌ SHEETS_WEBHOOK_URL no configurada');
      return NextResponse.json({ success: false, message: 'Webhook no configurado' }, { status: 500 });
    }

    // Registrar como "enviado"
    if (!global.sentReports) {
      global.sentReports = new Set();
    }
    global.sentReports.add(idUnico);

    // Realizar envío a Google Sheets
    const sheetsResponse = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!sheetsResponse.ok) {
      const errorText = await sheetsResponse.text();
      console.error('❌ Error en Sheets:', errorText);
      return NextResponse.json({
        success: false,
        error: 'Error en Sheets',
        raw: errorText
      }, { status: 200 });
    }

    const sheetsResult = await sheetsResponse.text();
    console.log('✅ Evaluación enviada a Sheets:', sheetsResult);

    return NextResponse.json({
      success: true,
      duplicate: false,
      message: 'Evaluación guardada',
      raw: sheetsResult
    });

  } catch (error) {
    console.error('⚠️ Error al enviar a Sheets:', error.message);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}