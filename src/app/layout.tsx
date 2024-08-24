import { Footer } from '@/modules/Footer'
import { Header } from '@/modules/Header'

import { NotLeavePopUp } from '@/components/ui/DontLeavePopUp'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Suspense } from 'react'
import YandexMetrika from '@/components/YandexMetrika'

const manrope = Manrope({ weight: ['300', '400', '500'], subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'chat-boty',
  description: 'chat-boty app',
  openGraph: {
    title: 'chat-boty',
    description: 'chat-boty app',
    url: 'https://chat-boty.com',
    images: [
      {
        url: 'https://static.chat-boty.com/snippet?field=slug',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98094334, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <NotLeavePopUp />
      </body>
    </html>
  )
}
