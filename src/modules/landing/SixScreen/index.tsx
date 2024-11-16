import Clock from '@/constants/svg/Clock'
import styles from './style.module.css'
import Link from 'next/link'

 const SixScreen = () => {
  return (
    <main className={'section bp-5 px-4 py-5 laptop:px-[40px] tablet:pt-10 laptop:pt-8 pb-8  ' + styles.screen}>
      <h1 className={'text-3xl phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-8 select-none uppercase tracking-wide ' + styles.title}>
        блог&ensp;|&ensp;статьи
      </h1>
      <div className={'flex flex-wrap gap-4 justify-center'}>
        <Card
          date={'01.10.2024'}
          title={'Настройка BlueSales для Новой Школы'}
          text={'В феврале 2024 года мы встретили крупного клиента. Онлайн школу ЕГЭ «Новая Школа».'}
          describe={'Время прочтения: 4 минуты'}
          link={'/cases/nastroyka-bluesales-dlya-novoy-shkoly'}
        />
        <Card
          date={'30.08.2024'}
          title={'Сотрудничество с брендом одежды CHUKCHA'}
          text={'C февраля 2023 работаем с данной компанией. Стоит отметить, что ребята давно на рынке: с 2009 года.'}
          describe={'Время прочтения: 4 минуты'}
          link={'/cases/sotrudnichestvo-s-brendom-odezhdy-chukcha'}
        />
        <Card
          date={'24.08.2024'}
          title={'Что могут чат-боты в инстаграм в 2024'}
          text={'Чат-боты в инсте желанная тема многих, возможность их делать в белую появилась летом 2021 года, инстаграм открыл API и понеслось.'}
          describe={'Время прочтения: 4 минуты'}
          link={'/blog/chto-mogut-chat-boty-v-instagram-v-2024-godu'}
        />
        <Card
          date={'04.09.2024'}
          title={'Спродюсировали блогера по Яндекс. Дзен'}
          text={'В ноябре 2020 года мы следили за одним сообществом ВК, автор был популярен в кругу людей, который занимались Яндекс. Дзеном'}
          describe={'Время прочтения: 6 минут'}
          link={'/cases/sprodyusirovali-blogera-po-yandeks-dzen'}
        />
        <Card
          date={'04.09.2024'}
          title={'Запуск сертификации с сервиcом Senler'}
          text={'Когда инсту заблокировали пошёл большой приток людей в ВК и многим нужен был Senler'}
          describe={'Время прочтения: 11 минут'}
          link={'/cases/zapusk-sertifikatsii-s-servicom-senler'}
        />
        <Card
          date={'04.09.2024'}
          title={'Клуб по подписке для эксперта по Wildberries'}
          text={'Клуб WB с ежемесячной подпиской, реализованный его в марте 2022 года, сначала работал в ВК...'}
          describe={'Время прочтения: 7 минут'}
          link={'/cases/klub-po-podpiske-dlya-eksperta-po-wildberries'}
        />
        <Card
          date={'02.10.2024'}
          title={'Всё про разметку текста в SaleBot'}
          text={'В этой статье вы узнаете как выделять текст: жирным, курсивом, подчёркивать и пр. в редакторе сейлбота.'}
          describe={'Время прочтения: 8 минут'}
          link={'/blog/vsyo-pro-razmetku-teksta-v-salebot'}
        />
        <Card
          date={'02.09.2024'}
          title={'Как сделать А/Б тест в Senler'}
          text={'Зачем вообще делить аудиторию? Из статьи вы узнаете как это делать на столько частей, сколько вам нужно.'}
          describe={'Время прочтения: 4 минуты'}
          link={'/blog/kak-sdelat-ab-test-v-senler'}
        />
      </div>
    </main>
  )
}

const Card = ({ date, title, text, describe, link }: { date: string; title: string; text: string; describe: string; link: string }) => {
  return (
    <Link href={link} className={`rounded-xl p-6 laptop:p-8 h-max w-full laptop:w-[300px] laptop:h-[350px] desktop:w-[408px] desktop:h-[500px] flex flex-col ${styles.card}`}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={`mb-4 text-md desktop:text-2xl leading-snug uppercase font-medium ${styles.textTitle}`}>{title}</h3>
      <h4 className={`text-sm desktop:text-lg ${styles.text}`}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <Clock />
        <h4 className="text-xs ml-2 desktop:text-base select-none">{describe}</h4>
      </div>
    </Link>
  )
}

const Splitter = () => <div className={`${styles.splitter} my-5 spltr`} />

export default SixScreen