'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { create } from 'zustand'

import { telegramRequest } from '@/api/communication/telegram'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { useState } from 'react'
import { CallToActionButton } from '../CallToAction'
import PhoneInput from '../InputMask/PhoneInput'
import TelegramInput from '../InputMask/TelegramInput'
import { PopUp } from '../PopUp'
import { schemas } from '../../../api/communication/communicationHelper'
import styles from './style.module.css'

export enum contactType {
  Phone = 'phone' as any,
  Telegram = 'telegram' as any,
}

export type callBackContent = {
  name?: string
  contact?: string
  contactType?: contactType
}

type callBackState = {
  isOpen: boolean
  openPopup: () => void
  closePopup: () => void
  content: callBackContent
  edit: (value: callBackContent) => void
}

export const useCallBackStore = create<callBackState>()((set) => ({
  isOpen: false,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
  content: {
    name: '',
    contact: '',
    contactType: contactType.Phone,
  },
  edit: (value: callBackContent) => set((prev) => ({ content: { ...prev.content, ...value } })),
}))

const inputClass = `block w-full rounded-full text-base desktop:text-lg py-3 px-4 sm:px-12 sm:py-6 ${styles.feedbackInput}`

export const CallBackPopUp = () => {
  const { isOpen, closePopup, content, edit } = useCallBackStore()
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

  const communicationRequests = async () => {
    const status = await telegramRequest(content)
    if (!status) return

    setSend(true)
    handleToggle()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schemas.custom),
  })

  return (
    <PopUp show={isOpen}>
      <AnimatePresence initial={false}>
        {showFirst ? (
          <motion.div key="first" initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: 0.4 }} style={{ overflow: 'hidden' }}>
            <form className={`flex flex-col items-center sm:w-[360px] mx-auto ${styles.sending}`} onSubmit={handleSubmit(communicationRequests)}>
              <CloseMainPopUp className={'fixed'} style={{ right: '10px', top: '20px' }} onClick={closePopup} />
              <h1 className={'text-3xl sm:text-5xl uppercase leading-13 pb-4 text-center sm:text-left ' + styles.title}>заполните форму ниже</h1>
              <h2 className={'text-sm sm:text-xl bold uppercase text-center sm:text-left sm:w-full ' + styles.subtitle}>
                И мы с вами свяжемся в <br />
                течение нескольких часов
              </h2>

              <div className="w-full my-6 ">
                <input
                  className={`${inputClass}`}
                  placeholder="Введи своё имя"
                  {...register('name', {
                    onChange: (e) => {
                      edit({ name: e.target.value })
                    },
                  })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              <div className={`rounded-3xl sm:rounded-full w-full p-2 flex flex-col sm:flex-row gap-4 ${styles.massagers}`}>
                <a
                  className={
                    'rounded-3xl sm:rounded-full flex items-center font-medium py-4 px-7 tracking-wide ' +
                    (content.contactType === contactType.Phone ? styles.active : '') +
                    ' ' +
                    styles.massagerLink
                  }
                  onClick={() => {
                    edit({ contactType: contactType.Phone })
                    setValue('contactType', 'Phone')
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
                    setValue('contactType', 'Telegram')
                  }}
                >
                  <TelegramFeedback /> Telegram
                </a>
              </div>

              <select className="hidden" {...register('contactType')} value={content.contactType === contactType.Phone ? 'Phone' : 'Telegram'}>
                <option value="Telegram">Telegram</option>
                <option value="Phone">Телефон</option>
              </select>

              {content.contactType === contactType.Telegram && (
                <div className="my-6 w-full">
                  <TelegramInput
                    className={`${inputClass}`}
                    name="contactTelegram"
                    initialValue={''}
                    setState={(value) => {
                      edit({ contact: value })
                    }}
                    register={register}
                  />
                  {errors.contactTelegram && <p className="text-red-500">{errors.contactTelegram.message}</p>}
                </div>
              )}

              {content.contactType === contactType.Phone && (
                <div className="my-6 w-full">
                  <PhoneInput
                    className={`${inputClass}`}
                    name="contactPhone"
                    initialValue={''}
                    setState={(value) => {
                      edit({ contact: value })
                    }}
                    register={register}
                  />
                  {errors.contactPhone && <p className="text-red-500">{errors.contactPhone.message}</p>}
                </div>
              )}

              <CallToActionButton type="submit" className="max-w-[9999px]">
                оставить заявку
              </CallToActionButton>
            </form>
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
            className={`${!send && 'hidden'} flex flex-col items-center tablet:w-[360px]`}
          >
            <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
            <h1 className={'text-4xl uppercase pb-3 ' + styles.gratitudeTitle}>спасибо!</h1>
            <h3 className={'font-bold tracking-widest leading-5 uppercase text-base text-center ' + styles.gratitudeSubtitle}>
              мы с вами свяжемся <br /> в течение 2 часов
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </PopUp>
  )
}
