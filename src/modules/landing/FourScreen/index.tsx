import { CallToActionButton } from '@/components/ui/CallToAction'
import Link from 'next/link'
import LinkIcon from '../../../constants/svg/LinkIcon'
import styles from './style.module.css'

export const FourScreen = () => {
  return (
    <main className={'section px-4 py-5 lg:px-[40px] lg:pt-[70px] pb-32 ' + styles.screen}>
      <h1 className={'text-4xl lg:text-5xl xl:text-6xl pb-16 uppercase ' + styles.title}>кейсы:</h1>

      <div className="flex flex-wrap  gap-7">
        <Case title={'Новая школа'} text={'Автоматизируем CRM систему BlueSales для ЕГЭ школы'} link={''} />
        <Case
          title={'Chukcha — Бренд одежды'}
          text={'Рассылки: ВК, ТГ, email. СМС. Постоянная работа с базой,\nпроведения геймификаций а также автоматизация amoCRM\nи работа с репутацией бренда: ORM'}
          link={''}
        />
        <br className={styles.separator} />
        <Case
          title={'Автоматизация ЕГЭ школы «Дайбобру»'}
          text={'Проведение геймификаций, постоянная работа\nс базой, исследование аудитории, создание\nреферальной системы и не только'}
          link={''}
        />
        <Case
          title={'Клуб по подписке для эксперта по WildBerries'}
          text={
            '3 тарифа: на 1/3/6 месяцев. Настроен приём платежей\nи уведомление администратора, а также автоматическое\nодобрение в каналы и удаление в случае отсутствия оплаты'
          }
          link={''}
        />
        <br className={styles.separator} />
        <Case
          title={'Запуск блогера с обучением по «Я. Дзен»'}
          text={'Техническая + маркетинговая часть Нашли блогера,\nдоговорились, что с него обучение, а с нас\nвсё остальное и сделали запуск на 500к+'}
          link={''}
        />
        <Case
          title={'Запуск сертификации с сервисом Senler'}
          text={'В момент блокировки популярной соц. сети предложил\nоснователю сделать курс, в итоге сделали лучше в 2 раза\nрезультат, чем они сам годом ранее'}
          link={''}
        />
        <br className={'hidden lg:block ' + styles.separator} />
        <Case
          title={'Автоматизация для ЕГЭ школы «СОТКА»'}
          text={'Автоматический сбор отзывов и перенос их в гугл-таблицу\nдля проведения конкурса, а также чат-бот для беседы ВК'}
          link={''}
        />
        <br className={'block lg:hidden ' + styles.separator} />
        <CTA title={'в этом месте может оказаться твой проект'} text={'тут предложение на 2-3 строчки'} link={''} />
      </div>
    </main>
  )
}

const Case = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={'p-4 xs:p-10 flex rounded-3xl ' + styles.case}>
      <h3 className={'pb-3 text-lg font-bold uppercase'}>{title}</h3>
      <p className={'leading-4 font-thin text-sm ' + styles.text} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
      <Link className={'block uppercase rounded-full text-xl py-6 mt-3 ps-11 pe-6 flex gap-3 ' + styles.link} href={link}>
        <p>Читать кейс</p> <LinkIcon />
      </Link>
    </div>
  )
}

const CTA = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={'p-10 flex rounded-3xl ' + styles.case + ' ' + styles.CTA}>
      <h3 className={'pb-3 text-lg font-bold uppercase'}>{title}</h3>
      <p className={'leading-4 font-thin text-sm ' + styles.text} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
      <CallToActionButton className={'mt-3 '+styles.CTAButton} actionClassName={styles.CTAAction} arrowClassName={styles.CTAArrow}>
        Обсудить проект
      </CallToActionButton>
    </div>
  )
}
