import { CallToActionButton } from '@/components/ui/CallToAction'
import { Nunito } from 'next/font/google'
import { CSSProperties } from 'react'
import styles from './style.module.css'

const nunitoFont = Nunito({
  // weight: '700',
  subsets: ['latin'],
  // variable: '--font-poppins',
})

export const FirstScreen = () => {
  return (
    <main
      className={`section flex flex-col bg-[url("/main_abstract_figure.webp")] p-5 laptop:pl-[40px] laptop:pt-[70px] bg-no-repeat bg-[50vw_10%] bg-[length:927px] tablet:h-[1475px] desktop:h-[1055px] laptop:h-[911px] laptop:bg-right-bottom laptop:bg-contain ${styles.screen}`}
    >
      <section className="tablet:flex-1">
        <h1 className={`${styles.title} phone:bold text-3xl phone:text-4xl tablet:text-6xl laptop:text-6xl pb-5 desktop:text-7xl leading-[120%]`}>
          Техническое
          <br /> сопровождение
          <br /> Онлайн-школы
          <br /> под ключ
        </h1>
        <CallToActionButton>Обсудить проект</CallToActionButton>
      </section>
      <ul className={styles.adv + ' laptop:max-w-[1300px] flex flex-col laptop:flex-row'}>
        <Box num={1} title="Оперативность" p={<>Находимся каждый день на связи и в готовности помогать по разным вопросам</>} style={{ backgroundColor: '#C5C5C533' }} />
        <Box num={2} title="скорость" p={<>Делаем всю работу за несколько дней, вам не нужно месяцами ждать воронку</>} style={{ backgroundColor: '#C5C5C533' }} />
        <Box num={3} title="Под силу всё" p={<>Воронки и чат-боты в Telegram, Instagram, Авито, WhatsApp, ВК любой сложности</>} style={{ backgroundColor: '#C5C5C533' }} />
      </ul>
    </main>
  )
}

const Box = ({ num, title, p, style }: { num: number; title: string; p: React.JSX.Element; style?: CSSProperties }) => {
  return (
    <li
      className={`${styles.box} h-[223px] phone:h-[315px] tablet:h-[255px] laptop:h-[305px] w-full pe-6 phone:pe-[44px] pl-[120px] phone:pl-[150px]`}
      style={style}
    >
      <h2
        className={`${styles.titleNumber} top-[-50px] phone:top-[-35px] tablet:top-[-69px] laptop:top-[-59px] left-[-48px] phone:left-[-56px] tablet:left-[-56px] laptop:left-[-56px] text-middle text-[260px] phone:text-[260px] tablet:text-[260px] laptop:text-[260px]`}
      >
        {num}
      </h2>
      <h1 className={`${styles.h2} pt-[40px] phone:pt-[120px]  text-lg phone:text-2xl tablet:text-2xl laptop:text-xl`}>{title}</h1>
      <p className={`${styles.p} phone:text-lg tablet:text-lg laptop:text-lg leading-6 phone:leading-6 laptop:leading-tight`}>{p}</p>
    </li>
  )
}
