import { CallToActionButton } from '@/components/ui/CallToAction'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import { CSSProperties, ReactNode } from 'react'
import styles from './style.module.css'

const nunitoFont = Nunito({
  subsets: ['latin'],
})

const FirstScreen = () => {
  return (
    <main
      className={`relative section flex flex-col p-5 laptop:pl-[40px] laptop:pt-[70px] bg-no-repeat bg-[50vw_10%] bg-[length:927px] tablet:h-[1475px] desktop:h-[1055px] laptop:h-[911px] laptop:bg-right-bottom laptop:bg-contain ${styles.screen}`}
    >
      <div className="absolute left-[50vw] top-0 laptop:bottom-0 laptop:right-0 w-[927px] h-[927px]">
        <Image
          fill
          src="/main_abstract_figure.webp"
          alt="Абстрактная фигура"
        />
      </div>

      <section className="tablet:flex-1 relative">
        <h1
          className={`${styles.title} phone:bold text-3xl phone:text-4xl tablet:text-6xl laptop:text-6xl pb-5 desktop:text-7xl leading-[120%]`}
        >
          Разработка чат-ботов
          <br />
          и автоворонок
          <br />
          для EdTech и E-com
        </h1>

        <p className="mb-8 text-lg phone:text-xl tablet:text-2xl laptop:text-2xl leading-[140%]">
          Создаём ботов в Telegram, VK, Max, Instagram
        </p>

        <CallToActionButton>
          Обсудить проект
        </CallToActionButton>
      </section>

      <ul
        className={`${styles.adv} laptop:max-w-[1300px] flex flex-col laptop:flex-row`}
      >
        <Box
          num={1}
          title="Оперативность"
          p={
            <>
              Находимся каждый день на связи и в готовности помогать по разным
              вопросам
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />

        <Box
          num={2}
          title="Скорость"
          p={
            <>
              Делаем всю работу за несколько дней, вам не нужно месяцами ждать
              воронку
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />

        <Box
          num={3}
          title="Под силу всё"
          p={
            <>
              Воронки и чат-боты в Telegram, Instagram, Авито, WhatsApp, ВК
              любой сложности
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />
      </ul>
    </main>
  )
}

type BoxProps = {
  num: number
  title: string
  p: ReactNode
  style?: CSSProperties
}

const Box = ({ num, title, p, style }: BoxProps) => {
  return (
    <li
      className={`${styles.box} h-[223px] phone:h-[315px] tablet:h-[255px] laptop:h-[305px] w-full pe-6 phone:pe-[44px] pl-[120px] phone:pl-[150px]`}
      style={style}
    >
      <div
        aria-hidden="true"
        className={`${styles.titleNumber} top-[-50px] phone:top-[-35px] tablet:top-[-69px] laptop:top-[-59px] left-[-48px] phone:left-[-56px] tablet:left-[-56px] laptop:left-[-56px] text-middle text-[260px] select-none`}
      >
        {num}
      </div>

      <h3
        className={`${styles.h2} pt-[40px] phone:pt-[120px] text-lg phone:text-2xl tablet:text-2xl laptop:text-xl`}
      >
        {title}
      </h3>

      <p
        className={`${styles.p} phone:text-lg tablet:text-lg laptop:text-lg leading-6 phone:leading-6 laptop:leading-tight`}
      >
        {p}
      </p>
    </li>
  )
}

export default FirstScreen