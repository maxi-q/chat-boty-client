'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { create } from 'zustand'

import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { useState } from 'react'
import { CallToActionButton } from '../CallToAction'
import PhoneInput from './InputMask'
import styles from './style.module.css'
enum contactType {
  Phone,
  Telegram,
}

type popupContent = {
  name?: string
  contact?: string
  contactType?: contactType
}

type PopupState = {
  isOpen: boolean
  openPopup: () => void
  closePopup: () => void
  content: popupContent
  edit: (value: popupContent) => void
}

export const usePopupStore = create<PopupState>((set) => ({
  isOpen: true,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
  content: {
    name: '',
    contact: '',
    contactType: contactType.Telegram,
  },
  edit: (value: popupContent) => set((prev) => ({ content: { ...prev.content, ...value } })),
}))

export const PopUp = () => {
  const { isOpen, closePopup, content, edit } = usePopupStore()
  const [send, setSend] = useState(false)

  const [showFirst, setShowFirst] = useState(true)

  const handleToggle = () => {
    setShowFirst(!showFirst)
  }

  const variants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  }

  return (
    <section className={'fixed h-full w-full ' + styles.section + ' ' + (isOpen ? styles.active : '')}>
      <span className={styles.overlay} />

      <div className={'fixed py-9 px-[5%] sm:px-24 sm:rounded-3xl w-full sm:w-auto ' + styles.modal + ' ' + (isOpen ? styles.active : '')}>
        <AnimatePresence initial={false}>
          {showFirst ? (
            <motion.div
              key="first"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden' }}
              className={' flex flex-col items-center sm:w-[360px] mx-auto ' + styles.sending}
            >
              <CloseMainPopUp className={'fixed'} style={{ right: '10px', top: '20px' }} onClick={closePopup} />
              <h1 className={'text-3xl sm:text-5xl uppercase leading-13 pb-4 text-center sm:text-left ' + styles.title}>заполните форму ниже</h1>
              <h2 className={'text-sm sm:text-xl bold uppercase text-center sm:text-left sm:w-full ' + styles.subtitle}>
                И мы с вами свяжемся в <br />
                течение нескольких часов
              </h2>
              <input
                onChange={(e) => {
                  edit({ name: e.target.value })
                }}
                className={'block w-full rounded-full text-base xl:text-lg py-3 px-4 sm:px-12 sm:py-6 my-6 ' + styles.feedbackInput}
                placeholder="Введи своё имя"
              />
              <div className={'rounded-3xl sm:rounded-full w-full p-2 flex flex-col sm:flex-row gap-4 ' + styles.massagers}>
                <a
                  className={
                    'rounded-3xl sm:rounded-full flex items-center font-medium py-4 px-7 tracking-wide ' +
                    (content.contactType === contactType.Phone ? styles.active : '') +
                    ' ' +
                    styles.massagerLink
                  }
                  onClick={() => {
                    edit({ contactType: contactType.Phone })
                  }}
                >
                  <Telephone /> Телефон
                </a>
                <a
                  className={
                    'rounded-3xl sm:rounded-full flex items-center font-medium py-4 px-7 tracking-wide ' +
                    (content.contactType === contactType.Telegram ? styles.active : '') +
                    ' ' +
                    styles.massagerLink
                  }
                  onClick={() => {
                    edit({ contactType: contactType.Telegram })
                  }}
                >
                  <TelegramFeedback /> Telegram
                </a>
              </div>
              {content.contactType === contactType.Phone ? (
                <PhoneInput
                  onChange={(value) => {
                    edit({ contact: value })
                  }}
                  className={'block w-full rounded-full text-base xl:text-lg py-3 px-4 sm:px-12 sm:py-6 my-6 ' + styles.feedbackInput}
                />
              ) : (
                <input
                  onChange={(e) => {
                    edit({ contact: e.target.value })
                  }}
                  placeholder='Контакт для связи'
                  className={'block w-full rounded-full text-base xl:text-lg py-3 px-4 sm:px-12 sm:py-6 my-6 ' + styles.feedbackInput}
                />
              )}

              <CallToActionButton
                onClick={() => {
                  console.log(content)
                  setSend(true)
                  handleToggle()
                }}
              >
                оставить заявку
              </CallToActionButton>
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden' }}
              className={(send ? '' : 'hidden') + ' flex flex-col items-center w-[360px]'}
            >
              <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
              <h1 className={'text-4xl uppercase pb-3 ' + styles.gratitudeTitle}>спасибо!</h1>
              <h3 className={'font-bold tracking-widest leading-5 uppercase text-base text-center ' + styles.gratitudeSubtitle}>
                мы с вами свяжемся <br /> в течение 2 часов
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
