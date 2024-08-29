import { CallToActionButton } from '@/components/ui/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import { TelephoneLink, TGLink, VKLink, WhatsAppLink } from '../../constants/static'
import { Telegram, Vk, WhatsApp } from '../../constants/svg/'
import styles from './style.module.css'

const liClass = 'opacity-80 laptop:text-lg desktop:text-xl font-medium laptop:leading-loose desktop:leading-loose'
const titleClass = 'laptop:text-xl pt-3 pb-6 uppercase tracking-widest'

export const Footer = () => {
  return (
    <footer
      className={`${styles.footer} justify-between w-100 flex py-16 desktop:pl-14 px-4 laptop:pt-8 laptop:pb-8 laptop:px-12 desktop:py-16 desktop:pe-[148px]  gap-[36px] h-max flex-col tracking-wide laptop:flex-row`}
    >
      <div className={`${styles.logoDiv} overflow-visible phone:w-[409px] laptop:my-8`}>
        <Link href={'/'}>
          <Image src="/logo.webp" alt="Chat Boty" width={336} height={228} className={'w-[168px] h-[114px]'} />
        </Link>
        <CallToActionButton className={`mt-8 ${styles.cta} w-full`}>Обсудить проект</CallToActionButton>
      </div>
      <div className="flex flex-1 flex-col tablet:flex-row laptop:justify-around gap-[36px]">
        <div>
          <h3 className={`${styles.navTitle} ${titleClass}`}>Услуги</h3>
          <ul className={liClass}>
            <LiComponent active={false}>Автоматизация CRM</LiComponent>
            <LiComponent active={false}>Создание чат-ботов и автоворонок</LiComponent>
            <LiComponent active={false}>Настройка и оформление геткурс</LiComponent>
            <LiComponent active={false}>Настройка вебинарных комнат</LiComponent>
            <LiComponent active={false}>Рассылки</LiComponent>
            <LiComponent active={false}>Email воронки</LiComponent>
          </ul>
        </div>
        <div>
          <h3 className={`${styles.navTitle} ${titleClass}`}>разделы</h3>
          <ul className={liClass}>
            <LiComponent href='/' active={false}>Главная</LiComponent>
            <LiComponent href='/service' active={false}>Услуги</LiComponent>
            <LiComponent href='/cases' active={false}>Кейсы</LiComponent>
            <LiComponent href='/blog' active={false}>Блог</LiComponent>
            <LiComponent href='/reviews' active={false}>Отзывы</LiComponent>
            <LiComponent href='/sitemap.xml' active={false}>Карта сайта</LiComponent>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-left">
        <h3 className={`${styles.navTitle} ${titleClass}`}>связаться</h3>
        <a href={TelephoneLink} className={liClass}>
          +7 904 424-05-10
        </a>
        <a href="mailto:nipi.bz@gmail.com?body=Привет, хочу уточнить по поводу бота&subject=Заказать чат бота" className={liClass}>
          nipi.bz@gmail.com
        </a>
        <ul className="flex desktop:flex-1 items-center py-8 desktop:py-0" style={{ marginLeft: '-10px' }}>
          <a target="_blank" href={WhatsAppLink}>
            <WhatsApp className={`cursor-pointer ${styles.contactLink}`} alt="whatsapp" height={40} />
          </a>
          <a target="_blank" href={TGLink}>
            <Telegram className={`cursor-pointer ${styles.contactLink}`} alt="whatsapp" height={40} />
          </a>
          <a target="_blank" href={VKLink}>
            <Vk className={`cursor-pointer ${styles.contactLink}`} alt="whatsapp" height={45} />
          </a>
        </ul>
        <Link href={'/privacy'} className="flex items-end underline text-lg">Политика конфиденциальности</Link>
      </div>
    </footer>
  )
}

const LiComponent = ({
  children,
  active,
  href,
}: Readonly<{
  children: React.ReactNode
  active: boolean
  href?: string
}>) => {
  return (
    <Link href={href || ''} className={styles.link + ' flex h-full items-center'}>
      <p className={'flex items-center'}>{children}</p>
      <div className={styles.linkBar} />
    </Link>
  )
}
