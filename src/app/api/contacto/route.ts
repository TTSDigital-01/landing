import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json();

    const payload = {
      nombre,
      email,
      telefono,
      mensaje,
      fecha: new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' }),
      fuente: 'Formulario'
    };

    const response = await fetch(process.env.SHEETS_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error('Error al enviar a Google Sheets:', await response.text());
      return NextResponse.json({ message: 'Error al enviar a Sheets' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Datos enviados correctamente a Sheets' });
  } catch (error) {
    console.error('Error en la API de contacto:', error);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}
