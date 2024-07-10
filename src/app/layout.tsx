import { Header } from '@/modules/Header'
import { Footer } from '@/modules/Footer'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ weight: ['300', '400', '500'], subsets: ['cyrillic'], variable: '--font-manrope'})

export const metadata: Metadata = {
  title: 'chat-boty',
  description: 'chat-boty app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
