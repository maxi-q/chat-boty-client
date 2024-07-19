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
      className={`section flex flex-col bg-[url("/main_abstract_figure.webp")] p-5 laptop:pl-[40px] laptop:pt-[70px] bg-no-repeat bg-center desktop:h-[1055px] laptop:h-[1011px] laptop:bg-right-bottom bg-contain ${styles.screen}`}
    >
      <section className='flex-1'>
        <h1 className={`${styles.title} bold text-2xl laptop:text-7xl `}>
          Техническое
          <br /> сопровождение
          <br /> Онлайн-школы
          <br /> под ключ
        </h1>
        <CallToActionButton>Обсудить проект</CallToActionButton>
      </section>
      <ul className={styles.adv + ' laptop:max-w-[1300px] flex flex-col laptop:flex-row'}>
        <Box
          num={1}
          title="Оперативность"
          p={
            <>
              Находимся каждый день <br />
              на связи и в <br />
              готовности помогать <br />
              по разным вопросам
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
    <li className={`${styles.box} h-auto laptop:h-[305px] w-full pl-16  laptop:pl-[120px]`} style={style}>
      <h2
        className={`${styles.titleNumber} top-[-119px] left-[-10px] text-[100px] laptop:top-[-59px] laptop:left-[-56px] text-middle laptop:text-[260px]`}
      >
        {num}
      </h2>
      <h1 className={styles.h2 + ' pt-[20px] laptop:pt-[120px] text-lg laptop:text-xl'}>{title}</h1>
      <p className={`${styles.p} text-xs laptop:text-lg leading-none laptop:leading-tight`}>{p}</p>
    </li>
  )
}
