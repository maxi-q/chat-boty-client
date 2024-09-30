import ClockBlack from '@/constants/svg/ClockBlack'
import { Close } from './close'
import styles from './style.module.css'

export default function NotFound() {
  return (
    <main className={`${styles.main} min-h-[100vh] mt-[-116px] tablet:pt-[116px] pt-[156px] flex flex-col items-center justify-center`}>
      <h1 className={`${styles.h1} text-4xl tablet:text-6xl laptop:text-7xl laptop:h-[80px] inline-flex laptop:leading-[307.2px] items-center font-bold uppercase`}>спасибо!</h1>
      <h3 className="text-md mt-2 font-medium tracking-widest uppercase text-center">В скором времени мы ответим на ваш запрос!</h3>

      <section className="mt-16">
        <h2 className={`${styles.title} text-lg tablet:text-3xl laptop:text-4xl uppercase text-center`}>
          hа hашем сайте еще много <br /> полезной информации
        </h2>
        <aside className="flex gap-5 mt-2 tablet:flex-row flex-col ">
          <Card
            date={'04.05.2024'}
            title={'заголовок статьи\nв несколько строчек'}
            text={'Краткое описание о чем статья, кому может быть полезна и так далее'}
            describe={'Время прочтения: 5 минут'}
          />
          <Card
            date={'04.05.2024'}
            title={'заголовок статьи\nв несколько строчек'}
            text={'Краткое описание о чем статья, кому может быть полезна и так далее'}
            describe={'Время прочтения: 5 минут'}
          />
          <Card
            date={'04.05.2024'}
            title={'заголовок статьи\nв несколько строчек'}
            text={'Краткое описание о чем статья, кому может быть полезна и так далее'}
            describe={'Время прочтения: 5 минут'}
          />
        </aside>
      </section>
      <Close />
    </main>
  )
}

const Card = ({ date, title, text, describe }: { date: string; title: string; text: string; describe: string }) => {
  return (
    <div className={`rounded-xl p-6 laptop:p-8 h-max w-full laptop:w-[300px] laptop:h-[300px] desktop:w-[408px] desktop:h-[380px] flex flex-col ${styles.card}`}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={`mb-4 text-md desktop:text-2xl leading-snug uppercase font-bold ${styles.textTitle}`}>{title}</h3>
      <h4 className={`text-xs desktop:text-lg ${styles.text}`}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <ClockBlack />
        <h4 className="text-xs ml-2 desktop:text-base select-none">{describe}</h4>
      </div>
    </div>
  )
}

const Splitter = () => <div className={`${styles.splitter} mb-5 mt-2`} />
