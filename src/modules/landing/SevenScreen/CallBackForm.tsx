'use client'

import { callBackContent, contactType, useCallBackStore } from '@/components/ui/CallBackPopUp'
import PhoneInput from '@/components/ui/InputMask'
import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { useState } from 'react'
import styles from './style.module.css'

const inputClass = `block w-full rounded-full phone:text-lg phone:px-6 phone:py-4 tablet:text-lg tablet:px-12 tablet:py-6 laptop:text-lg laptop:px-12 laptop:py-6 my-6 ${styles.feedbackInput}`

export const CallBackForm = () => {
  const { content, edit } = useCallBackStore()
  const [show, setShow] = useState(false)

  const closePopup = () => setShow(false)
  const openPopup = () => setShow(true)

  return (
    <>
      <div className="flex flex-row gap-6">
        <Link type={contactType.Phone} edit={edit} content={content}>
          <Telephone /> Позвонить
        </Link>
        <Link type={contactType.Telegram} edit={edit} content={content}>
          <TelegramFeedback /> Telegram
        </Link>
      </div>
      {content.contactType === contactType.Telegram && (
        <input
          className={`${inputClass}`}
          placeholder="ОСТАВЬТЕ КОНТАКТ"
          onChange={(e) => {
            edit({ contact: e.target.value })
          }}
        />
      )}
      {content.contactType === contactType.Phone && (
        <PhoneInput
          className={`${inputClass}`}
          onChange={(value) => {
            edit({ contact: value })
          }}
        />
      )}
      <button className={`uppercase phone:px-6 phone:py-4 phone:w-full tablet:w-auto phone:text-lg tablet:px-12 tablet:py-6 tablet:text-lg laptop:px-12 laptop:py-6 laptop:text-lg font-medium rounded-full ${styles.cta}`} onClick={openPopup}>
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
        `rounded-full phone:px-6 phone:py-4 tablet:py-6 tablet:px-12 laptop:px-12 laptop:py-6 laptop:px-12 flex items-center phone:text-lg tablet:text-lg laptop:text-lg uppercase font-medium tablet:gap-3 laptop:gap-3 tracking-wide ` +
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
