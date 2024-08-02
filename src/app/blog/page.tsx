import { Article } from './modules/Article'
import { CallBackBlock } from './modules/CallBackBlock'
import { SideBar } from './modules/SideBar'
import style from './style.module.css'

export default function Home() {
  return (
    <main className={`${style.screen} laptop:mx-[15px] pt-16 px-6`}>
      <div className="flex justify-center flex-col laptop:flex-row">
        <Article />
        <SideBar />
      </div>
      <CallBackBlock/>
    </main>
  )
}
