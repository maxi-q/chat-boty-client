import { Case } from './components/Case'
import { CTA } from './components/CTA'

import styles from './style.module.css'

export const SideBar = () => {
  return (
    <aside className="desktop:w-[554px] laptop:w-[425px] ml-[35px] flex justify-end flex-col">
      <div className="sticky h-min bottom-0 pb-3">
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
            text={
              '3 тарифа: на 1/3/6 месяцев. Настроен приём платежей и уведомление администратора, а также автоматическое одобрение в каналы и удаление в случае отсутствия оплаты'
            }
            link={''}
          />
          <CTA title={'В этом вместе может оказаться ваш проект'} text={'Тут текст, который привлек ваше внимание, а теперь нажмите на кнопку ниже и оставьте заявку'} link={''} />
        </div>
      </div>
    </aside>
  )
}
