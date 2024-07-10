import Image from 'next/image'
import Link from 'next/link'
import { TelephoneLink, TGLink, VKLink, WhatsAppLink } from '../../constants/static'
import { Telegram, Vk, WhatsApp } from '../../constants/svg/'
import styles from './style.module.css'

export const Header = () => {
  return (
    <header className={styles.header + ' w-100 flex flex-wrap justify-between items-center px-16 h-20'}>
      <Link href={'/'} className={styles.logoDiv + ' flex-1 overflow-visible w-auto'}>
        <Image src="/logo.webp" alt="chat-boty" width={336} height={228} className={styles.logo} />
      </Link>
      <nav className={styles.navigation + ' gap-14 h-full items-center hidden md:flex'}>
        <LiComponent active={false}>Услуги</LiComponent>
        <LiComponent active={false}>Кейсы</LiComponent>
        <LiComponent active={false}>Блог</LiComponent>
        <LiComponent active={false}>Контакты</LiComponent>
      </nav>
      <aside className={styles.contacts + ' flex-1 overflow-visible hidden justify-end items-center w-full lg:flex lg:w-auto lg:order-1'} style={{ minWidth: '370px' }}>
        <a href={TelephoneLink} className={styles.telephone + ' text-sm tracking-widest'}>
          8 904 424 05 10
        </a>
        <a target="_blank" href={WhatsAppLink}>
          <WhatsApp className={styles.contactLink} alt="whatsapp" height={40} />
        </a>
        <a target="_blank" href={TGLink}>
          <Telegram className={styles.contactLink} alt="whatsapp" height={40} />
        </a>
        <a target="_blank" href={VKLink}>
          <Vk className={styles.contactLink} alt="whatsapp" height={45} />
        </a>
      </aside>
    </header>
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
      <p className={'flex items-center text-xs uppercase tracking-widest'}>{children}</p>
      <div className={styles.linkBar} />
    </Link>
  )
}
