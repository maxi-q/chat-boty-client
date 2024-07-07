import Clock from '@/constants/svg/Clock'
import styles from './style.module.css'

export const SixScreen = () => {
  return (
    <main className={'section bp-5 px-4 py-5 lg:px-[40px] lg:pt-8 pb-8  ' + styles.screen}>
      <h1 className={'text-4xl lg:text-5xl xl:text-6xl pb-8 select-none uppercase ' + styles.title}>блог&ensp;|&ensp;статьи</h1>
      <div className={'flex flex-wrap gap-4 justify-center'}>
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <br className={'hidden 2xl:block ' + styles.separator} />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
        <Card
          date={'04.05.2024'}
          title={'заголовок статьи\nв несколько строчек'}
          text={'Краткое описание о чем\nстатья, кому может быть\nполезна и так далее'}
          describe={'Время прочтения: 5 минут'}
        />
      </div>
    </main>
  )
}

const Card = ({ date, title, text, describe }: { date: string; title: string; text: string; describe: string }) => {
  return (
    <div className={'rounded-xl p-8 flex ' + styles.card}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={'mb-4 text-md leading-snug uppercase ' + styles.textTitle}>{title}</h3>
      <h4 className={'text-sm ' + styles.text}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <Clock />
        <h4 className="text-xs select-none">{describe}</h4>
      </div>
    </div>
  )
}

const Splitter = () => <div className={styles.splitter + ' my-5 spltr'} />
