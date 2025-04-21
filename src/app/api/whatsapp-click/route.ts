// src/app/api/whatsapp-click/route.ts

export async function POST() {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("❌ SHEETS_WEBHOOK_URL no está definida");
  }

  const payload = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: 'Click en botón de WhatsApp',
    fecha: new Date().toISOString(),
    fuente: 'whatsapp' // ✅ ¡clave en minúsculas!
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('❌ Error al enviar datos a Google Sheets');
    }

    console.log('✅ Click en WhatsApp registrado en Sheets');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('🔥 Error en el API:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
