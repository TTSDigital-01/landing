import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SHEETS_WEBHOOK_URL: process.env.SHEETS_WEBHOOK_URL,
  },
};

export default nextConfig;
