import { type Metadata } from 'next/types'

import { CMSLayout } from '../modules/CMSLayout'

export const metadata: Metadata = {
  title: {
    default: 'Статьи блога о продвижении и автоматизации бизнеса с помощью чат ботов',
    template: '%s | Chat Boty',
  },
  description: 'Как чат боты могут помочь вашему бизнесу? Как произвести их правильную настройку, чтобы увеличить продажи? Ответы выйдёте в нашеих статьях блога по продвижении!',
  keywords: 'статьи ол продвижении, блог по продвижению',
  openGraph: {
    title: {
      default: 'Статьи блога о продвижении и автоматизации бизнеса с помощью чат ботов',
      template: '%s | Chat Boty',
    },
    description: 'Как чат боты могут помочь вашему бизнесу? Как произвести их правильную настройку, чтобы увеличить продажи? Ответы выйдёте в нашеих статьях блога по продвижении!',
    url: 'https://chat-boty.com/blog',
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
