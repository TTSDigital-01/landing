// api/contact.js
const express = require('express');
const { Pool } = require('pg'); // PostgreSQL client
const cors = require('cors'); // Import CORS

// Carga variables de entorno LOCALMENTE si no está en Vercel
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

// Configura CORS para permitir solicitudes desde tu dominio de Vercel (o '*' para desarrollo)
// IMPORTANTE: Reemplaza 'https://landing-brko3v1i9-marcos-projects-d149c133.vercel.app/' con tu URL real de Vercel en producción
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? 'https://tu-proyecto-tts-digital-xxxx.vercel.app' // <-- CAMBIA ESTO a tu URL de Vercel
        : '*', // Permite cualquier origen en desarrollo
    methods: ['POST', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Cabeceras permitidas
};
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Middleware para manejar solicitudes OPTIONS (preflight de CORS)
app.options('*', cors(corsOptions)); // Habilita preflight para todas las rutas

// Configuración de la conexión a Neon DB
// Vercel inyectará DATABASE_URL automáticamente desde las variables de entorno
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Necesario para Neon DB en algunos entornos
    }
});

// Ruta POST para recibir los datos del formulario
app.post('/api/contact', async (req, res) => {
    const { name, email, company, message } = req.body;

    // Validación básica del servidor
    if (!name || !email) {
        return res.status(400).json({ message: 'Nombre y Correo Electrónico son requeridos.' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Correo Electrónico inválido.' });
    }

    try {
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO contacts (name, email, company, message, submitted_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id',
            [name, email, company || null, message || null] // Usa null si no se proporcionan company o message
        );
        client.release(); // Libera el cliente de vuelta al pool

        console.log('Contacto guardado con ID:', result.rows[0].id);
        res.status(201).json({ message: '¡Gracias por contactarnos! Nos pondremos en contacto pronto.' });

    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        res.status(500).json({ message: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.' });
    }
});

// Exporta la app para que Vercel la maneje
// Vercel ejecutará esto como una función serverless
module.exports = app;
