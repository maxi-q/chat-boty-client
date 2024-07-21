import Clock from '@/constants/svg/Clock'
import styles from './style.module.css'

export const SixScreen = () => {
  return (
    <main className={'section bp-5 px-4 py-5 laptop:px-[40px] tablet:pt-10 laptop:pt-8 pb-8  ' + styles.screen}>
      <h1 className={'phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-8 select-none uppercase tracking-wide ' + styles.title}>блог&ensp;|&ensp;статьи</h1>
      <div className={'flex flex-wrap gap-4 justify-center'}>
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
      </div>
    </main>
  )
}

const Card = ({ date, title, text, describe }: { date: string; title: string; text: string; describe: string }) => {
  return (
    <div className={`rounded-xl p-6 laptop:p-8 h-max w-full laptop:w-[300px] laptop:h-[340px] desktop:w-[408px] desktop:h-[500px] flex flex-col ${styles.card}`}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={`mb-4 text-md desktop:text-2xl leading-snug uppercase font-medium ${styles.textTitle}`}>{title}</h3>
      <h4 className={`text-sm desktop:text-lg ${styles.text}`}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <Clock />
        <h4 className="text-xs ml-2 desktop:text-base select-none">{describe}</h4>
      </div>
    </div>
  )
}

const Splitter = () => <div className={`${styles.splitter} my-5 spltr`} />
