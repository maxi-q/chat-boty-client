import { Header } from '@/modules/Header'
import { Footer } from '@/modules/Footer'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ weight: ['300', '400', '500'], subsets: ['cyrillic'], variable: '--font-manrope'})

export const metadata: Metadata = {
  title: 'chat-boty',
  description: 'chat-boty app',
  openGraph: {
    title: 'chat-boty',
    description: 'chat-boty app',
    url: 'https://chat-boty.com',
    images: [
      {
        url: 'https://chat-boty.com/aside_abstract.webp',
        width: 800,
        height: 800
      }
    ]
  }
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
