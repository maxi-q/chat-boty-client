import { CallBackBlock } from '@/modules/Posts/CallBackBlock'
import { SideBar } from '@/modules/Posts/SideBar'
import { type Metadata } from 'next/types'
import { Case } from './modules/Case'

import style from './style.module.css'

export const metadata: Metadata = {
  title: {
    default: 'Реальные кейсы продвижения услуг онлайн школ и интернет-магазинов',
    template: '%s | Chat Boty',
  },
  description: 'Как эффективно осуществить рост продаж в интернете? Рассказываем на реальных кейсах наших клиентов из сферы онлайн школ и интернет магазинов. Подробности тут!',
  keywords: 'кейс продвижения магазинов, кейс продвижения школ',
  openGraph: {
    title: {
      default: 'Реальные кейсы продвижения услуг онлайн школ и интернет-магазинов',
      template: '%s | Chat Boty',
    },
    description: 'Как эффективно осуществить рост продаж в интернете? Рассказываем на реальных кейсах наших клиентов из сферы онлайн школ и интернет магазинов. Подробности тут!',
    url: 'https://chat-boty.com',
  },
}

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={`laptop:mx-[15px] px-6`}>
      <div className={`${style.screen} px-4 pt-8 laptop:pt-16 pb-6 flex justify-center flex-col laptop:flex-row`}>
        <Case>{children}</Case>
        <SideBar />
      </div>
      <CallBackBlock />
    </main>
  )
}
