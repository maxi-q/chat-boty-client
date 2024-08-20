import { TelephoneLink, TGLink, VKLink, WhatsAppLink } from '@/constants/static'
import { Telegram, Vk, WhatsApp } from '@/constants/svg'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { RemoveScroll } from 'react-remove-scroll'
import styles from './dropStyle.module.css'

export const DropMenu = ({ show }: { show: boolean }) => {
  const variants = {
    initial: { y: -645, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -645, opacity: 0 },
  }
  const variantsSection = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          key="header"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variantsSection}
          transition={{ duration: 0 }}
          style={{ overflow: 'hidden' }}
          className={`fixed h-full w-full ${show && styles.active} ${styles.section}`}
        >
          <RemoveScroll enabled={show}>
            <span className={styles.overlay} />
            <motion.div
              key="header"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
              className="absolute top-[0px] left-[0px] w-full h-[645px]"
            >
              <header className={`${styles.dropHead} flex flex-col items-center absolute w-full h-[645px] pt-[185px]`}>
                <nav className="flex flex-col gap-[16px] items-center">
                  <LiComponent active={false}>Услуги</LiComponent>
                  <LiComponent active={false}>Кейсы</LiComponent>
                  <LiComponent link='blog' active={false}>Блог</LiComponent>
                  <LiComponent active={false}>Контакты</LiComponent>
                </nav>
                <aside className={`${styles.contacts} flex flex-col flex-1 overflow-visible  items-center mt-[104px]`} style={{ minWidth: '390px' }}>
                  <div className="flex justify-center gap-[12px]">
                    <a target="_blank" href={WhatsAppLink}>
                      <WhatsApp className={styles.contactLink} alt="whatsapp" height={50} />
                    </a>
                    <a target="_blank" href={TGLink}>
                      <Telegram className={styles.contactLink} alt="whatsapp" height={50} />
                    </a>
                    <a target="_blank" href={VKLink}>
                      <Vk className={styles.contactLink} alt="whatsapp" height={55} />
                    </a>
                  </div>
                  <a href={TelephoneLink} className={`${styles.telephone} text-2xl tracking-widest text-white mt-[16px]`}>
                    8 904 424 05 10
                  </a>
                </aside>
              </header>
            </motion.div>
          </RemoveScroll>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

const LiComponent = ({
  children,
  active,
  link
}: Readonly<{
  children: React.ReactNode
  active: boolean
  link?: string
}>) => {
  return (
    <Link href={link || ''} className={`${styles.link} flex h-full items-center text-white`}>
      <p className={'flex items-center text-3xl tracking-widest uppercase '}>{children}</p>
    </Link>
  )
}
