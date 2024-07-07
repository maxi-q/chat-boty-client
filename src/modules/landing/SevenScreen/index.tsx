import Chart from '@/constants/svg/Chart'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import Diplomat from './../../../constants/svg/Diplomat'
import styles from './style.module.css'


export const SevenScreen = () => {
  return (
    <main className={'section p-5 lg:pl-[50px] lg:pt-[70px] flex gap-16 xl:gap-10  ' + styles.screen}>
      <div className="lg:block flex flex-col items-center" style={{ flex: 1 }}>
        <h1 className="text:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase w-max">
          <span className={styles.titleSpan}>остались вопросы? </span> <br />
          Не знаете нужен ли вам <br />
          чат-бот/автоворонка?
        </h1>
        <h3 className="font-bold text-sm md:text-base lg:text-lg uppercase pt-6 pb-10 tracking-wider w-max">
          Оставьте заявку на бесплатную консультацию, <br />
          расскажите про свой проект и за 30 минут <br />
          определимся нужно ли вам это или нет
        </h3>
        <div className={'rounded-xl p-6 xl:p-14 w-max ' + styles.feedback}>
          <h4 className="uppercase text-lg mb-6 font-bold tracking-wider">Где с вами связаться?</h4>
          <div className="flex flex-col sm:flex-row gap-6">
            <a className={'rounded-full py-2 px-4 sm:px-8 sm:py-6 xl:px-12 flex items-center text-base xl:text-lg uppercase font-medium  lg:gap-3 tracking-wide ' + styles.massagerLink}>
              <Telephone /> Позвонить
            </a>
            <a className={'rounded-full py-2 px-4 sm:px-8 sm:py-6 xl:px-12 flex items-center text-base xl:text-lg uppercase font-medium gap-2 lg:gap-3 tracking-wide ' + styles.massagerLink}>
              <TelegramFeedback /> Telegram
            </a>
          </div>
          <input className={'block w-full rounded-full text-base xl:text-lg py-3 px-4 sm:px-12 sm:py-6 my-6 ' + styles.feedbackInput} placeholder="ОСТАВЬТЕ КОНТАКТ" />
          <button className={'uppercase px-8 py-4 sm:px-12 sm:py-6 text-base xl:text-lg font-medium rounded-full ' + styles.cta}>получить консультацию</button>
        </div>
      </div>
      <aside className={'hidden lg:flex flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ' + styles.aside}>
        <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
        <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
        <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={40} last />
      </aside>
    </main>
  )
}

const Tablet = ({ text, icon, margin, last }: { text: string; icon: React.ReactNode; margin: number; last?: boolean }) => {
  return (
    <div className={'relative w-full '} style={{ marginLeft: `${margin}px`, marginBottom: last ? '-20px' : '0' }}>
      <div className={styles.tablet + ' w-48 bg-gray-900 text-12 w-max flex items-center'}>
        <div className={styles.tabletCircle + ' rounded-full'}>{icon}</div>
        <p className="leading-4 tracking-wider text-sm font-light" style={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </p>
      </div>
    </div>
  )
}
