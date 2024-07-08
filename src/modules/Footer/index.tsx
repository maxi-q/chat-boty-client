import { CallToActionButton } from '@/components/ui/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import { Telegram, Vk, WhatsApp } from '../../constants/svg/'
import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer + ' justify-between w-100 flex p-10 lg:p-16 h-max flex-col lg:flex-row'}>
      <div className={styles.logoDiv + ' overflow-visible w-auto'}>
        <Link href={'/'}>
          <Image src="/logo.webp" alt="chat-boty" width={336} height={228} className={'w-32 lg:w-1/2'} />
        </Link>
        <CallToActionButton className={'mt-8 ' + styles.cta}>Обсудить проект</CallToActionButton>
      </div>
      <div>
        <h3 className="text-base xl:text-lg pt-3 pb-1 uppercase tracking-widest">Услуги</h3>
        <ul className="text-xs opacity-75 leading-5 lg:leading-7 xl:leading-9 xl:text-sm">
          <LiComponent active={false}>Автоматизация CRM</LiComponent>
          <LiComponent active={false}>Создание чат-ботов и автоворонок</LiComponent>
          <LiComponent active={false}>Настройки и оформление геткурс</LiComponent>
          <LiComponent active={false}>Настройка вебинарных комнат</LiComponent>
          <LiComponent active={false}>Рассылки crm</LiComponent>
          <LiComponent active={false}>Email воронки</LiComponent>
        </ul>
      </div>
      <div>
        <h3 className="text-base xl:text-lg pt-3 pb-1 uppercase tracking-widest">разделы</h3>
        <ul className={'text-xs opacity-75 leading-5 lg:leading-7 xl:leading-9 xl:text-sm ' + styles.catalog}>
          <LiComponent active={false}>Главная</LiComponent>
          <LiComponent active={false}>Услуги</LiComponent>
          <LiComponent active={false}>Кейсы</LiComponent>
          <LiComponent active={false}>Блог</LiComponent>
          <LiComponent active={false}>Отзывы</LiComponent>
          <LiComponent active={false}>Карта сайта</LiComponent>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3 className="text-base xl:text-lg pt-3 pb-1 uppercase tracking-widest">связаться</h3>
        <a href={`tel:+79044240510`} className="text-xs opacity-75 leading-5 lg:leading-7 xl:leading-9 xl:text-sm">
          8 904 424 05 10
        </a>
        <a href="mailto:nipi.bz@gmail.com?body=Привет, хочу уточнить по поводу бота&subject=Заказать чат бота" className="text-xs opacity-75 leading-5 lg:leading-7 xl:leading-9 xl:text-sm">
        nipi.bz@gmail.com
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
