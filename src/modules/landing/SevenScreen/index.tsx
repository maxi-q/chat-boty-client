import Chart from '@/constants/svg/Chart'
import Diplomat from '@/constants/svg/Diplomat'
import { Tablet } from './AnimatedTablet'
import { CallBackForm } from './CallBackForm'
import styles from './style.module.css'

export const SevenScreen = () => {
  return (
    <main className={`section p-1 pt-2 laptop:p-5 laptop:pl-[50px] laptop:pt-[70px] ${styles.screen}`}>
      <div className="flex gap-16 desktop:gap-10">
        <div className="flex laptop:justify-center desktop:items-start desktop:justify-center flex-col laptop:items-center " style={{ flex: 1 }}>
          <h1 className={`${styles.title} tablet:text-[56px] tablet:leading-[67px] laptop:text-[56px] laptop:leading-[67px] uppercase mt-24`}>
            <span className={styles.titleSpan}>остались вопросы? </span> <br className="hidden laptop:flex" />
            Не зHаете нужен ли вам <br className="hidden xs:flex" />
            чат-бот/автоворонка?
          </h1>
          <h3 className="font-bold text-xs desktop:text-base laptop:text-lg tablet:text-lg uppercase pt-6 pb-10 tracking-wider xs:w-max">
            Оставьте заявку на бесплатную консультацию, расскажите про свой проект и за 30 минут определимся нужно ли вам это или нет
          </h3>
          <div className={`hidden desktop:block rounded-xl p-6 desktop:p-14 w-max ${styles.feedback}`}>
            <CallBackForm />
          </div>
        </div>
        <aside
          className={`hidden laptop:ml-12 laptop:flex desktop:mb-5 desktop:pb-16 flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 laptop:h-[625px] laptop:max-w-[496px] desktop:h-[980px] desktop:max-w-[777px] ${styles.aside}`}
        >
          <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
          <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
          <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={40} last />
        </aside>
      </div>
      <aside className={`flex laptop:hidden flex-1 h-[625px] w-full bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ${styles.aside}`} />
      <div className={`desktop:hidden rounded-xl p-6 desktop:p-14 desktop:w-max ${styles.feedback}`}>
        <CallBackForm />
      </div>
    </main>
  )
}
