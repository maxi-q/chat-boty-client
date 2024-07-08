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
    <main className={'section bg-[url("/main_abstract_figure.webp")] p-5 lg:pl-[40px] lg:pt-[70px] bg-no-repeat bg-center lg:bg-right-bottom bg-contain ' + styles.screen}>
      <section className="">
        <h1 className={styles.title + ' leading-tight bold text-2xl md:text-4xl lg:text-5xl ' }>
          Техническое
          <br /> сопровождение
          <br /> Онлайн-школы
          <br /> под ключ
        </h1>
        <CallToActionButton>Обсудить проект</CallToActionButton>
      </section>
      <ul className={styles.adv + ' flex flex-col lg:flex-row'}>
        <Box
          num={1}
          title="Оперативность"
          p={
            <>
              Находимся каждый день
              <br /> на связи и в готовности
              <br /> помогать по разным
              <br /> вопросам
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />
        <Box
          num={2}
          title="скорость"
          p={
            <>
              Делаем всю работу
              <br /> за несколько дней,
              <br /> вам не нужно месяцами
              <br /> ждать воронку
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />
        <Box
          num={3}
          title="Под силу всё"
          p={
            <>
              Воронки и чат-боты
              <br /> в Telegram, Instagram,
              <br /> Авито, WhatsApp, ВК
              <br /> любой сложности
            </>
          }
          style={{ backgroundColor: '#C5C5C533' }}
        />
      </ul>
    </main>
  )
}

const Box = ({ num, title, p, style }: { num: number; title: string; p: React.JSX.Element; style?: CSSProperties }) => {
  return (
    <li className={styles.box + ' h-auto lg:h-[225px] w-full pl-16 lg:pl-20 xl:pl-[120px]'} style={style}>
      <h2 className={styles.titleNumber + ' top-[-119px] left-[-10px] text-[100px] lg:top-[-59px] lg:left-[-46px] xl:left-[-56px] lg:text-[200px] xl:text-[260px]'}>{num}</h2>
      <h1 className={styles.h2 + ' pt-[20px] lg:pt-[80px] text-lg xl:text-xl'}>{title}</h1>
      <p className={styles.p + ' text-xs lg:text-sm xl:text-base  leading-none lg:leading-tight'}>{p}</p>
    </li>
  )
}
