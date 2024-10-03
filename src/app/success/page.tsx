import ClockBlack from '@/constants/svg/ClockBlack'
import { Close } from './close'
import styles from './style.module.css'
import Link from 'next/link'

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
            date={'01.10.2024'}
            title={'Настройка BlueSales для Новой Школы'}
            text={'В феврале 2024 года мы встретили крупного клиента. Онлайн школу ЕГЭ «Новая Школа».'}
            describe={'Время прочтения: 4 минуты'}
            link={'/cases/nastroyka-bluesales-dlya-novoy-shkoly'}
          />
          <Card
            date={'04.09.2024'}
            title={'Запуск сертификации с сервиcом Senler'}
            text={'Когда инсту заблокировали пошёл большой приток людей в ВК и многим нужен был Senler'}
            describe={'Время прочтения: 11 минут'}
            link={'/cases/zapusk-sertifikatsii-s-servicom-senler'}
          />
          <Card
            date={'24.08.2024'}
            title={'Что могут чат-боты в инстаграм в 2024'}
            text={'Чат-боты в инсте желанная тема многих, возможность их делать в белую появилась летом 2021 года, инстаграм открыл API и понеслось.'}
            describe={'Время прочтения: 4 минуты'}
            link={'/blog/chto-mogut-chat-boty-v-instagram-v-2024-godu'}
          />
        </aside>
      </section>
      <Close />
    </main>
  )
}

const Card = ({ date, title, text, describe, link }: { date: string; title: string; text: string; describe: string; link: string }) => {
  return (
    <Link href={link} className={`rounded-xl p-6 laptop:p-8 h-max w-full laptop:w-[300px] laptop:h-[300px] desktop:w-[408px] desktop:h-[380px] flex flex-col ${styles.card}`}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={`mb-4 text-md desktop:text-2xl leading-snug uppercase font-bold ${styles.textTitle}`}>{title}</h3>
      <h4 className={`text-xs desktop:text-lg ${styles.text}`}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <ClockBlack />
        <h4 className="text-xs ml-2 desktop:text-base select-none">{describe}</h4>
      </div>
    </Link>
  )
}

const Splitter = () => <div className={`${styles.splitter} mb-5 mt-2`} />
