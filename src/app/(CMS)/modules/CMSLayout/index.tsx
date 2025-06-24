import { CallBackBlock } from "@/modules/Articles/CallBackBlock"
import { SideBar } from "@/modules/Articles/SideBar"
import { Article } from "./modules/Article"

import style from './style.module.css'

export function CMSLayout({
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