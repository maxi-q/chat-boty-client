import { type Metadata } from 'next/types'

import { CMSLayout } from '../modules/CMSLayout'

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
    url: 'https://chat-boty.com/cases',
  },
}

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CMSLayout>
      {children}
    </CMSLayout>
  )
}
