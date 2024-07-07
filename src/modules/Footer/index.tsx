import { CallToActionButton } from '@/components/ui/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import { Telegram, Vk, WhatsApp } from '../../constants/svg/'
import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer + ' justify-between w-100 flex p-16 h-max'}>
      <div className={styles.logoDiv + ' overflow-visible w-auto'}>
        <Link href={'/'} >
          <Image src="/logo.webp" alt="chat-boty" width={336} height={228} className={styles.logo}/>
        </Link>
        <CallToActionButton className={'mt-8 ' + styles.cta}>Обсудить проект</CallToActionButton>
      </div>
      <div>
        <h3 className="text-lg pb-3 uppercase tracking-widest">Услуги</h3>
        <ul className="text-sm opacity-75 leading-9">
          <LiComponent active={false}>Автоматизация CRM</LiComponent>
          <LiComponent active={false}>Создание чат-ботов и автоворонок</LiComponent>
          <LiComponent active={false}>Настройки и оформление геткурс</LiComponent>
          <LiComponent active={false}>Настройка вебинарных комнат</LiComponent>
          <LiComponent active={false}>Рассылки crm</LiComponent>
          <LiComponent active={false}>Email воронки</LiComponent>
        </ul>
      </div>
      <div>
        <h3 className="text-lg pb-3 uppercase tracking-widest">разделы</h3>
        <ul className={'text-sm opacity-75 leading-9 ' + styles.catalog}>
          <LiComponent active={false}>Главная</LiComponent>
          <LiComponent active={false}>Услуги</LiComponent>
          <LiComponent active={false}>Кейсы</LiComponent>
          <LiComponent active={false}>Блог</LiComponent>
          <LiComponent active={false}>Отзывы</LiComponent>
          <LiComponent active={false}>Карта сайта</LiComponent>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg pb-3 uppercase tracking-widest">связаться</h3>
        <a href={`tel:+79149439334`} className="text-sm opacity-75 leading-9">
          8 914 943 93 34
        </a>
        <a href="mailto:ivanivanov@gmail.com?body=Привет, хочу уточнить по поводу бота&subject=Заказать чат бота" className="text-sm opacity-75 leading-9">
          ivanivanov@gmail.com
        </a>
        <ul className="flex pt-1" style={{ marginLeft: '-10px' }}>
          <WhatsApp className={'cursor-pointer ' + styles.contactLink} alt="whatsapp" height={40} />
          <Telegram className={'cursor-pointer ' + styles.contactLink} alt="whatsapp" height={40} />
          <Vk className={'cursor-pointer ' + styles.contactLink} alt="whatsapp" height={45} />
        </ul>
        <h5 className="flex flex-1 items-end underline">Политика конфиденциальности</h5>
      </div>
    </footer>
  )
}

const LiComponent = ({
  children,
  active,
}: Readonly<{
  children: React.ReactNode
  active: boolean
}>) => {
  return (
    <Link href={''} className={styles.link + ' flex h-full items-center'}>
      <p className={'flex items-center'}>{children}</p>
      <div className={styles.linkBar} />
    </Link>
  )
}
