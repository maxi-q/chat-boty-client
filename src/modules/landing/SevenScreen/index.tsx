import Chart from '@/constants/svg/Chart'
import Diplomat from '@/constants/svg/Diplomat'
import WorkerMan from './../../../constants/svg/WorkerMan'
import { Tablet } from './AnimatedTablet'
import { CallBackForm } from './CallBackForm'
import styles from './style.module.css'

export const SevenScreen = () => {
  return (
    <main className={` section p-5  pt-2 laptop:p-5 laptop:pl-[50px] laptop:pt-[70px] bg-transparent ${styles.screen}`}>
      <div className="flex gap-16 desktop:gap-10">
        <div className="flex laptop:items-start laptop:justify-center flex-col " style={{ flex: 1 }}>
          <h1
            className={`${styles.title} text-4xl tablet:text-[56px] phone:tracking-wider tablet:tracking-normal tablet:leading-[67px] laptop:text-[56px] laptop:leading-[67px] uppercase mt-5 laptop:mt-24`}
          >
            <span className={styles.titleSpan}>остались вопросы? </span> <br className="tablet:hidden laptop:flex" />
            Не зHаете нужен ли вам <br className="hidden xs:flex" />
            чат-бот/автоворонка?
          </h1>
          <h3 className="font-bold text-sm tablet:text-lg laptop:text-lg desktop:text-base uppercase pt-6 pb-10 tracking-wider xs:w-max">
            Оставьте заявку на бесплатную консультацию, расскажите про свой проект и за 30 минут определимся нужно ли вам это или нет
          </h3>

          <CallBackForm className={`hidden laptop:block rounded-xl p-6 desktop:p-14 w-max ${styles.feedback}`} />
        </div>

        <aside
          className={`hidden laptop:ml-12 laptop:flex desktop:mb-5 desktop:pb-16 flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 laptop:h-[980px] laptop:max-w-[777px] ${styles.aside}`}
        >
          <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
          <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
          <Tablet text={'Спикер конференции:\nСуровый Питерский SMM,\nсотрудничал с Senler'} icon={<WorkerMan />} margin={40} last />
        </aside>
      </div>

      <CallBackForm className={`laptop:hidden rounded-xl mx-auto p-6 desktop:p-14 my-5 w-full max-w-[728px] ${styles.feedback}`} />

      <aside className={`flex laptop:hidden flex-1 h-[625px] w-full bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ${styles.aside}`} />
    </main>
  )
}
