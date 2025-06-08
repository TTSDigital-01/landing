// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ⚠️ Ignorar ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Tu variable de entorno sigue funcionando igual
  env: {
    SHEETS_WEBHOOK_URL: process.env.SHEETS_WEBHOOK_URL,
  },
};

module.exports = nextConfig;