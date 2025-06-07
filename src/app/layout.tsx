// src/app/layout.tsx 

import '../globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'TTS Digital',
  description: 'Transformamos MiPymes con tecnología',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}