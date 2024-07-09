import CheckMark from '../../../constants/svg/CheckMark'
import ChillRock from '../../../constants/svg/ChillRock'
import GreenFilter from '../../../constants/svg/GreenFilter'
import GreenSettings from '../../../constants/svg/GreenSettings'
import XCross from '../../../constants/svg/XCross'
import styles from './style.module.css'

export const ThirdScreen = () => {
  return (
    <main className={`section before:bg-[url("/aside_abstract.webp")] px-4 py-5 lg:px-[40px] lg:pt-[70px] pb-32 before:bg-no-repeat  before:bg-contain before:content-[''] before:absolute before:h-[100%] before:max-h-[20%] before:max-h-[20%] before:w-[100%] lg:before:max-h-[100%] lg:before:max-h-[50%] lg:before:w-[50%] before:right-[0] before:bottom-[20%] lg:before:bg-bottom lg:before:right-[0] lg:before:bottom-[0] ${styles['rotating-background']} ${styles.screen}`}>
      <h1 className={'text-3xl relative sm:text-4xl lg:text-5xl xl:text-6xl pb-16 uppercase ' + styles.title}>
        С нами <br /> вы забудете о:
      </h1>
      <ul className="flex relative flex-col lg:flex-row items-center content-around w-full gap-6" style={{ justifyContent: 'space-around' }}>
        <CardPain pain={'А давайте ещё\nбольше рекламы?'} solution={'Давайте попробуем поработать\nс вашей базой, это в разы\nдешевле и им проще продать'} />
        <CardPain pain={'А куда делся\n{%Имя вашего тех.спеца%}?'} solution={'Мы каждый день на связи,\nвносим все правки оперативно'} />
        <CardPain
          pain={'Там баг и у нас {%МНОГО%}\nлидов не получило сообщение'}
          solution={'Мы тестируем воронки\nи все возможные сценарии.\nЕсли есть ошибки, исправляем\nза несколько минут'}
        />
      </ul>

      <h1 className={'text-4xl relative lg:text-5xl xl:text-6xl pb-8 pt-32 uppercase ' + styles.subtitle}>и получите:</h1>

      <ul className={'flex relative gap-3 max-w-xl lg:max-w-full mx-auto flex-col lg:flex-row items-center lg:justify-around ' + styles.getBox}>
        <CardGet icon={<GreenFilter />} title={'Воронку / бота'} text={'Которая приносит оплаты / заявки \nс минимальными затратами \nвашего времени'} />
        <CardGet icon={<ChillRock />} title={'Спокойствие'} text={'Заключаем договор и каждый\nдень оповещаем о продвижениях \nв вашем проекте'} />
        <CardGet icon={<GreenSettings />} title={'Воронку / бота'} text={'Которая приносит оплаты / заявки \nс минимальными затратами \nвашего времени'} />
      </ul>

      <h1 className={'text-4xl relative lg:text-5xl xl:text-6xl pb-8 pt-32 ' + styles.subtitle}>итог:</h1>

      <div className="flex relative">
        <aside className={styles.markerResult} />
        <div className={'text-xs lg:text-sm xl:text-base ' + styles.result}>
          Спокойный сон и уверенность, что конкурентов можно <br />
          легко обойти, ведь подрядчики всё сделали оперативно, <br />
          без ошибок и сделали много технических фишек
        </div>
      </div>
    </main>
  )
}

const CardPain = ({ pain, solution }: { pain: string; solution: string }) => {
  return (
    <li className="relative max-w-xl lg:max-w-full w-full">
      <div className={styles.pain + ' py-2 sm:py-4 px-2 sm:px-4 gap-3 bg-gray-900 text-12 w-full flex items-center'}>
        <div className={styles.painCircle + ' rounded-full'}>
          <XCross />
        </div>
        <p className="sm:leading-5 text-[10px] sm:text-xs xl:text-sm " style={{ whiteSpace: 'pre' }}>
          {pain}
        </p>
      </div>

      <div className={styles.solution + ' py-2 sm:py-4 px-2 sm:px-4 gap-3 bg-gray-900 text-12 w-full flex items-center'} style={{ marginTop: '-3%' }}>
        <div className={styles.solutionCircle + ' rounded-full'}>
          <CheckMark />
        </div>
        <p className="sm:leading-5 text-[10px] sm:text-xs xl:text-sm " style={{ whiteSpace: 'pre' }}>
          {solution}
        </p>
      </div>
    </li>
  )
}

const CardGet = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => {
  return (
    <li className={styles.getCard + ' py-3 sm:py-8 px-4 sm:px-10 lg:px-4 w-max xl:px-6 flex justify-center gap-3 lg:max-w-[430px]'} style={{ flex: 1 }}>
      <div className="flex items-center w-8 xl:w-20">{icon}</div>
      <div>
        <h3 className="text-white text-base sm:text-xl nowrap">{title}</h3>
        <p className="text-white text-[10px] sm:text-sm font-hairline leading-4 xl:leading-5 mt-2 xl:mt-[20px]" style={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </p>
      </div>
    </li>
  )
}
