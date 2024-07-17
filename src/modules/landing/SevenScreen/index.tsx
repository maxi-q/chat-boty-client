import Chart from '@/constants/svg/Chart'
import Diplomat from '@/constants/svg/Diplomat'
import { Tablet } from './AnimatedTablet'
import { CallBackForm } from './CallBackForm'
import styles from './style.module.css'

export const SevenScreen = () => {
  return (
    <main className={'section p-1 pt-2 laptop:p-5 laptop:pl-[50px] laptop:pt-[70px] flex gap-16 desktop:gap-10  ' + styles.screen}>
      <div className="laptop:block flex flex-col items-center" style={{ flex: 1 }}>
        <h1 className={`${styles.title} text-xl xs:text-2xl md:text-3xl laptop:text-4xl desktop:text-[56px] desktop:leading-[67px] uppercase xs:w-max mt-24`}>
          <span className={styles.titleSpan}>остались вопросы? </span> <br />
          Не зHаете нужен ли вам <br className="hidden xs:flex" />
          чат-бот/автоворонка?
        </h1>
        <h3 className="font-bold text-xs desktop:text-base laptop:text-lg uppercase pt-6 pb-10 tracking-wider xs:w-max">
          Оставьте заявку на бесплатную консультацию, 
          расскажите про свой проект и за 30 минут 
          определимся нужно ли вам это или нет
        </h3>
        <div className={`rounded-xl p-6 desktop:p-14 w-max ${styles.feedback}`}>
          {/* <h4 className="uppercase text-lg mb-6 font-bold tracking-wider">Где с вами связаться?</h4> */}
          <CallBackForm />
        </div>
      </div>
      <aside className={'hidden laptop:ml-12 laptop:flex flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ' + styles.aside}>
        <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
        <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
        <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={40} last />
      </aside>
    </main>
  )
}
