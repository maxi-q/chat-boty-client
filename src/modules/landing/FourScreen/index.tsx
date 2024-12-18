import { CallToActionButton } from '@/components/ui/CallToAction'
import Link from 'next/link'
import LinkIcon from '../../../constants/svg/LinkIcon'
import styles from './style.module.css'

const FourScreen = () => {
  return (
    <main className={`px-4 py-5 laptop:px-[40px] laptop:pt-[70px] pb-32 mt-[-70px] ${styles.screen}`}>
      <h1 className={`text-3xl phone:text-4xl tablet:text-6xl laptop:text-5xl desktop:text-6xl pb-16 uppercase tracking-wide ${styles.title}`}>кейсы:</h1>

      <div className="flex flex-wrap gap-7">
        <Case title={'Новая школа'} text={'Автоматизируем CRM систему BlueSales для ЕГЭ школы'} link={'/cases/nastroyka-bluesales-dlya-novoy-shkoly'} />
        <Case
          title={'Chukcha — Бренд одежды'}
          text={'Рассылки: ВК, ТГ, email. СМС. Постоянная работа с базой,\nпроведения геймификаций а также автоматизация amoCRM\nи работа с репутацией бренда: ORM'}
          link={'/cases/sotrudnichestvo-s-brendom-odezhdy-chukcha'}
        />
        <br className={styles.separator} />
        <Case
          title={'Автоматизация ЕГЭ школы «Дайбобру»'}
          text={'Проведение геймификаций, постоянная работа\nс базой, исследование аудитории, создание\nреферальной системы и не только'}
          link={'/cases/avtomatizatsiya-ege-shkoly-daybobru'}
        />
        <Case
          title={'Клуб по подписке для эксперта по WildBerries'}
          text={
            'Сделана подписка с 3-мя тарифами: на 1/3/6 месяцев.\nНастроен приём платежей и уведомление администратора,\nа также автоматическое одобрение в каналы и удаление в случае отсутствия оплаты'
          }
          link={'/cases/klub-po-podpiske-dlya-eksperta-po-wildberries'}
        />
        <br className={styles.separator} />
        <Case
          title={'Запуск блогера с обучением по «Я. Дзен»'}
          text={'Техническая + маркетинговая часть Нашли блогера,\nдоговорились, что с него обучение, а с нас\nвсё остальное и сделали запуск на 500к+'}
          link={'/cases/sprodyusirovali-blogera-po-yandeks-dzen'}
        />
        <Case
          title={'Запуск сертификации с сервисом Senler'}
          text={'В момент блокировки популярной соц. сети предложил\nоснователю сделать курс, в итоге результат \n сделали лучше в 2 раза, чем они сам годом ранее'}
          link={'/cases/zapusk-sertifikatsii-s-servicom-senler'}
        />
        <br className={`hidden laptop:block ${styles.separator}`} />
        <Case
          title={'Автоматизация для ЕГЭ школы «СОТКА»'}
          text={'Автоматический сбор отзывов и перенос их в гугл-таблицу\nдля проведения конкурса, а также чат-бот для беседы ВК'}
          link={'/cases/avtomatizatsiya-vkontakte-dlya-ege-shkoly-sotka'}
        />
        <br className={`block laptop:hidden ${styles.separator}`} />
        <CTA title={'В этом вместе может оказаться ваш проект'} text={'Тут текст, который привлек ваше внимание, а теперь нажмите на кнопку ниже и оставьте заявку'} link={''} />
      </div>
    </main>
  )
}

const Case = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={`p-5 tablet:p-10 flex group rounded-2xl desktop:h-[350px] ${styles.case}`}>
      <h3 className={'pb-3 text-xl tablet:text-2xl font-bold uppercase'}>{title}</h3>
      <p className={`text-lg tablet:text-xl font-medium laptop:whitespace-pre-wrap ${styles.text}`} style={{ flex: 1 }}>
        {text}
      </p>
      <Link
        className={`link uppercase opacity-100 flex rounded-full text-lg phone:w-max w-full phone:text-2xl py-5 ps-16 pe-9 phone:py-8 phone:ps-16 phone:pe-9 mt-16 tablet:mt-9 laptop:mt-3 gap-5 ${styles.link}`}
        href={link}
      >
        <p>Читать кейс</p> <LinkIcon />
      </Link>
    </div>
  )
}

const CTA = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={`p-5 tablet:p-10 flex rounded-2xl ${styles.case} ${styles.CTA}`}>
      <h3 className={'pb-3 text-2xl font-bold uppercase'}>{title}</h3>
      <p className={`text-lg tablet:text-xl font-medium ${styles.text}`} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
      <CallToActionButton className={`mt-16 laptop:mt-3 ${styles.CTAButton}`} color='white' actionClassName={styles.CTAAction} arrowClassName={styles.CTAArrow}>
        <span className='phone:text-xl tablet:text-2xl'>Обсудить проект</span>
      </CallToActionButton>
    </div>
  )
}

export default FourScreen