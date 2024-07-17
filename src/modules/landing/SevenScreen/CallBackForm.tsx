'use client'

import { callBackContent, contactType, useCallBackStore } from '@/components/ui/CallBackPopUp'
import PhoneInput from '@/components/ui/InputMask'
import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { useState } from 'react'
import styles from './style.module.css'

export const CallBackForm = () => {
  const { content, edit } = useCallBackStore()
  const [show, setShow] = useState(false)

  const closePopup = () => setShow(false)
  const openPopup = () => setShow(true)

  return (
    <>
      <div className="flex flex-col desktop:flex-row gap-6">
        <Link type={contactType.Phone} edit={edit} content={content}>
          <Telephone /> Позвонить
        </Link>
        <Link type={contactType.Telegram} edit={edit} content={content}>
          <TelegramFeedback /> Telegram
        </Link>
      </div>
      {content.contactType === contactType.Telegram && (
        <input
          className={`block w-full rounded-full text-base desktop:text-lg py-3 px-4 desktop:px-12 desktop:py-6 my-6 ${styles.feedbackInput}`}
          placeholder="ОСТАВЬТЕ КОНТАКТ"
          onChange={(e) => {
            edit({ contact: e.target.value })
          }}
        />
      )}
      {content.contactType === contactType.Phone && (
        <PhoneInput
          className={`block w-full rounded-full text-base desktop:text-lg py-3 px-4 desktop:px-12 desktop:py-6 my-6 ${styles.feedbackInput}`}
          onChange={(value) => {
            edit({ contact: value })
          }}
        />
      )}
      <button className={`uppercase px-8 py-4 desktop:px-12 desktop:py-6 text-base desktop:text-lg font-medium rounded-full ${styles.cta}`} onClick={openPopup}>
        получить консультацию
      </button>
      <Modal isOpen={show} closePopup={closePopup} />
    </>
  )
}

const Link = ({ type, edit, children, content }: { type: contactType; edit: (value: callBackContent) => void; children: React.ReactNode; content: callBackContent }) => {
  return (
    <a
      className={
        `rounded-full py-2 px-4 desktop:px-12 desktop:py-6 desktop:px-12 flex items-center text-base desktop:text-lg uppercase font-medium laptop:gap-3 tracking-wide ` +
        `${styles.massagerLink} ${content.contactType === type ? styles.active : ''}`
      }
      onClick={() => {
        edit({ contactType: type })
      }}
    >
      {children}
    </a>
  )
}

const Modal = ({ isOpen, closePopup }: { isOpen: boolean; closePopup: () => void }) => {
  return (
    <PopUp show={isOpen}>
      <div className={'flex flex-col items-center w-[360px]'}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        <h1 className={'text-4xl uppercase pb-3 ' + styles.gratitudeTitle}>спасибо!</h1>
        <h3 className={'font-bold tracking-widest leading-5 uppercase text-base text-center ' + styles.gratitudeSubtitle}>
          мы с вами свяжемся <br /> в течение 2 часов
        </h3>
      </div>
    </PopUp>
  )
}
