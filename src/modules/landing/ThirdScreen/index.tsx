import CheckMark from '../../../constants/svg/CheckMark'
import ChillRock from '../../../constants/svg/ChillRock'
import GreenFilter from '../../../constants/svg/GreenFilter'
import GreenSettings from '../../../constants/svg/GreenSettings'
import XCross from '../../../constants/svg/XCross'
import styles from './style.module.css'

const ThirdScreen = () => {
  return (
    <main
      className={`section before:bg-[url("/aside_abstract.webp")] px-4 py-5 laptop:px-[40px] laptop:pt-[70px] pb-24 before:bg-no-repeat  before:bg-contain before:content-[''] before:absolute before:h-[100%] before:max-h-[30%] before:w-[100%] laptop:before:max-h-[100%] laptop:before:h-[60%] laptop:before:w-[50%] before:right-[0] before:bottom-[12%] sm:before:bottom-[7%] before:bg-right-bottom laptop:before:bg-bottom laptop:before:right-[0] laptop:before:bottom-[0] ${styles['rotating-background']} ${styles.screen}`}
    >
      <h1 className={`relative text-3xl phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-16 uppercase tracking-wide ${styles.title}`}>
        С Hами <br /> вы забудете о:
      </h1>
      <ul
        className="flex relative flex-col laptop:flex-row items-center laptop:items-start content-around w-full gap-[46px] laptop:gap-6"
        style={{ justifyContent: 'space-around' }}
      >
        <CardPain pain={'А давайте ещё больше рекламы?'} solution={'Давайте попробуем поработать с вашей базой, это в разы дешевле и им проще продать'} />
        <CardPain pain={'А куда делся {%Имя вашего тех.спеца%}?'} solution={'Мы каждый день на связи, вносим все правки оперативно'} />
        <CardPain
          pain={'Там баг и у нас {%МНОГО%} лидов не получило сообщение'}
          solution={'Мы тестируем воронки и все возможные сценарии. Если есть ошибки, исправляем за несколько минут'}
        />
      </ul>

      <h1 className={`relative text-3xl phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-8 pt-32 uppercase tracking-wide ${styles.subtitle}`}>и получите:</h1>
      <ul className={`flex relative gap-3 max-w-full mx-auto flex-col laptop:flex-row laptop:justify-around h-max items-stretch ${styles.getBox}`}>
        <CardGet icon={<GreenFilter />} title={'Воронку / бота'} text={'Которая приносит оплаты / заявки\nс минимальными затратами\nвашего времени'} />
        <CardGet icon={<ChillRock />} title={'Спокойствие'} text={'Заключаем договор и каждый день оповещаем\nо продвижениях\nв вашем проекте'} />
        <CardGet icon={<GreenSettings />} title={'Большой функционал'} text={'Напишем свой скрипт, скопируем ЛЮБУЮ воронку, которая вам\nнравится и сделаем любые интеграции'} />
      </ul>

      <h1 className={`relative text-3xl phone:text-4xl tablet:text-6xl laptop:text-6xl pb-8 pt-32 tracking-wide uppercase ${styles.subtitle}`}>итог:</h1>
      <div className="flex relative">
        <aside className={styles.markerResult} />
        <div className={`text-lg phone:text-lg tablet:text-2xl laptop:text-2xl laptop:w-[630px] ${styles.result}`}>
          Спокойный сон и уверенность, что конкурентов можно легко обойти, ведь подрядчики всё сделали оперативно, без ошибок и с множеством фишек
        </div>
      </div>
    </main>
  )
}

const CardPain = ({ pain, solution }: { pain: string; solution: string }) => {
  return (
    <li className="relative max-w-xl laptop:max-w-full w-full">
      <Tablet icon={<XCross />} text={pain} className={styles.pain} classCircle={styles.painCircle} />
      <Tablet icon={<CheckMark />} text={solution} className={styles.solution} classCircle={styles.solutionCircle} />
    </li>
  )
}

const Tablet = ({ icon, text, className, classCircle }: { icon: React.ReactNode; text: string; className: string; classCircle: string }) => {
  return (
    <div className={`${className} min-h-[138px] rounded-xl tablet:rounded-full py-4 px-3 phone:py-4 phone:px-3 laptop:p-4 gap-3 desktop:gap-10 bg-gray-900 w-full flex flex-col tablet:flex-row items-start tablet:items-center`} style={{ marginTop: '-3%' }}>
      <div className={`${classCircle} rounded-full phone:p-[10px] tablet:p-[38px] `}>{icon}</div>
      <p className="phone:text-base tablet:text-[16px] laptop:text-[16px] desktop:text-[18px] font-medium laptop:leading-[22px] tracking-wide">{text}</p>
    </div>
  )
}

const CardGet = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => {
  return (
    <li
      className={`${styles.getCard} flex flex-col tablet:flex-row py-4 phone:py-4 tablet:py-3 laptop:py-6 px-5 phone:px-5 tablet:px-4 laptop:px-6 laptop:w-max w-full laptop:justify-center gap-3`}
      style={{ flex: 1 }}
    >
      <div className="flex items-center w-8 laptop:w-20 laptop:mr-7 tablet:mr-7 tablet:ms-4 phone:mt-3 tablet:mt-0">{icon}</div>
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-lg phone:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl uppercase nowrap">{title}</h3>
        <p className="text-white text-sm phone:text-sm tablet:text-lg laptop:text-lg desktop:text-xl font-hairline laptop:leading-relaxed tracking-wider mt-1 laptop:mt-[20px] tablet:whitespace-pre-wrap laptop:whitespace-normal">
          {text}
        </p>
      </div>
    </li>
  )
}


export default ThirdScreen