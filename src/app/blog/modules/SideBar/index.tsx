import { CallToActionButton } from '@/components/ui/CallToAction'
import Link from 'next/link'
import styles from './style.module.css'

export const SideBar = () => {
  return (
    <aside className="desktop:w-[554px] laptop:w-[425px] ml-[35px]">
      <h1 className={`relative text-3xl phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-16 uppercase tracking-wide ${styles.title}`}>Наши Кейсы</h1>
      <div className="flex flex-col gap-5">
        <Case title={'Новая школа'} text={'Автоматизируем CRM систему BlueSales для ЕГЭ школы'} link={''} />
        <Case
          title={'Chukcha — Бренд одежды'}
          text={'Рассылки: ВК, ТГ, email. СМС. Постоянная работа с базой, проведения геймификаций а также автоматизация amoCRM и работа с репутацией бренда: ORM'}
          link={''}
        />
        <Case
          title={'Клуб по подписке для эксперта по WildBerries'}
          text={'3 тарифа: на 1/3/6 месяцев. Настроен приём платежей и уведомление администратора, а также автоматическое одобрение в каналы и удаление в случае отсутствия оплаты'}
          link={''}
        />
        <CTA title={'в этом месте может оказаться твой проект'} text={'тут предложение на 2-3 строчки'} link={''} />
      </div>
    </aside>
  )
}

const Case = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <Link href={link} className={`p-5 flex group rounded-2xl ${styles.case}`}>
      <h3 className={`pb-3 text-lg font-bold uppercase ${styles.subtitle}`}>{title}</h3>
      <p className={`text-base font-medium ${styles.text}`} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
    </Link>
  )
}

const CTA = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={`p-5 flex rounded-2xl ${styles.case} ${styles.CTA}`}>
      <h3 className={'pb-3 text-lg font-bold uppercase'}>{title}</h3>
      <p className={`leading-4 text-base font-medium ${styles.text}`} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
      <CallToActionButton
        className={`mt-16 laptop:mt-3  !bg-[var(--color-main)] ${styles.CTAButton}`}
        actionClassName={'!bg-[var(--color-accent)]'}
        arrowClassName={'!fill-[var(--color-main)]'}
        textClassName='laptop:left-[20px] desktop:left-[35px]'
      >
        <span className="phone:text-xl tablet:text-2xl">Обсудить проект</span>
      </CallToActionButton>
    </div>
  )
}
