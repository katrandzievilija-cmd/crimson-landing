import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Crimson — Дискретни решенија за мажи',
  description: 'Crimson — Дискретни решенија за подобра контрола и подолга издржливост. Производ за лична нега.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mk">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
