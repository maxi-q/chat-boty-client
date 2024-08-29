import { type Metadata } from 'next/types'
import { Article } from './modules/Article'
import { CallBackBlock } from '../../modules/Posts/CallBackBlock'
import { SideBar } from '../../modules/Posts/SideBar'

import style from './style.module.css'

export const metadata: Metadata = {
  title: {
    default: "Chat Boty",
    template: "%s | Chat Boty",
  },
};

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={`laptop:mx-[15px] px-6`}>
      <div className={`${style.screen} px-4 pt-8 laptop:pt-16 pb-6 flex justify-center flex-col laptop:flex-row`}>
        <Article>{children}</Article>
        <SideBar />
      </div>
      <CallBackBlock />
    </main>
  )
}
