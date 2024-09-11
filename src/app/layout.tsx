
import { Footer } from '@/modules/Footer'
import { Header } from '@/modules/Header'

import { NotLeavePopUp } from '@/components/ui/DontLeavePopUp'
import YandexMetrika from '@/components/YandexMetrika'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'
import './globals.css'

const manrope = Manrope({ weight: ['300', '400', '500'], subsets: ['cyrillic'] })

function logMemoryUsage() {
  setInterval(() => {
    const memoryUsage = process.memoryUsage();
    
    console.log('Memory Usage:');
    console.log(`  RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
    console.log(`  Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
    console.log(`  Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
    console.log(`  External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
  }, 1000 * 60);  // Каждую минуту (60 * 1000 миллисекунд)
}

logMemoryUsage();

export const metadata: Metadata = {
  title: 'Создание чат-ботов в Телеграм, Вконтакте, Инстаграм, WhatsApp любой сложности',
  description: 'Заказать разработку чат-бота в телеграм, Вконтакте, Инстаграм. Выделим вас на фоне конкурентов, приведём лидов за счёт работы с текущей базой и автоматизируем продажи и упростим работу с клиентами.',
  openGraph: {
    title: 'Создание чат-ботов в Телеграм, Вконтакте, Инстаграм, WhatsApp любой сложности',
    description: 'Заказать разработку чат-бота в телеграм, Вконтакте, Инстаграм. Выделим вас на фоне конкурентов, приведём лидов за счёт работы с текущей базой и автоматизируем продажи и упростим работу с клиентами.',
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
        {process.env.NEXT_PUBLIC_MODE === 'development' ? (
          <></>
        ) : (
          <>
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
          </>
        )}

        <Header />
        {children}
        <Footer />
        {/* <NotLeavePopUp /> */}
      </body>
    </html>
  )
}
