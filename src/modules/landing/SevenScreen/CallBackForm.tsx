'use client'

import { schemas } from '@/api/communication/communicationHelper'
import { callBackContent, contactType, useCallBackStore } from '@/components/ui/CallBackPopUp'
import PhoneInput from '@/components/ui/InputMask/PhoneInput'
import TelegramInput from '@/components/ui/InputMask/TelegramInput'
import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './style.module.css'
import { telegramRequest } from '@/api/communication/telegram'

const inputClass = `block w-full rounded-full text-lg px-6 py-4 phone:text-lg phone:px-6 phone:py-4 tablet:text-lg tablet:px-12 tablet:py-6 laptop:text-lg laptop:px-12 laptop:py-6 my-6 max-w-[340px] ${styles.feedbackInput}`

export const CallBackForm = ({ className }: { className: string }) => {
  const { content, edit } = useCallBackStore()
  const [show, setShow] = useState(false)

  const closePopup = () => setShow(false)
  const openPopup = () => setShow(true)

  const communicationRequests = async () => {
    const status = await telegramRequest(content)
    if (!status) return
    openPopup()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schemas.main),
  })

  return (
    <form className={className} onSubmit={handleSubmit(communicationRequests)}>
      <div className="flex flex-col phone:flex-row gap-6">
        <Link type={contactType.Phone} edit={edit} content={content} setValue={setValue}>
          <Telephone /> Позвонить
        </Link>
        <Link type={contactType.Telegram} edit={edit} content={content} setValue={setValue}>
          <TelegramFeedback /> Telegram
        </Link>
        <select className="hidden" {...register('contactType')} value={content.contactType === contactType.Phone ? 'Phone' : 'Telegram'}>
          <option value="Telegram">Telegram</option>
          <option value="Phone">Телефон</option>
        </select>
      </div>
      {content.contactType === contactType.Telegram && (
        <div className="my-6 w-full">
          <TelegramInput
            className={`${inputClass}`}
            name="contactTelegram"
            setState={(value) => {
              edit({ contact: value })
              setValue('contactType', 'Telegram')
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
            setState={(value) => {
              edit({ contact: value })
              setValue('contactType', 'Phone')
            }}
            register={register}
          />
          {errors.contactPhone && <p className="text-red-500">{errors.contactPhone.message}</p>}
        </div>
      )}
      <button
        className={`uppercase px-6 py-4 w-full text-lg phone:px-6 phone:py-4 phone:w-full tablet:w-auto phone:text-lg tablet:px-12 tablet:py-6 tablet:text-lg laptop:px-12 laptop:py-6 laptop:text-lg font-medium rounded-full ${styles.cta}`}
        type="submit"
      >
        получить консультацию
      </button>
      <Modal isOpen={show} closePopup={closePopup} />
    </form>
  )
}

const Link = ({
  type,
  edit,
  children,
  content,
  setValue,
}: {
  type: contactType
  edit: (value: callBackContent) => void
  children: React.ReactNode
  content: callBackContent
  setValue: any
}) => {
  return (
    <a
      className={
        `rounded-full px-6 py-4 phone:px-6 phone:py-4 tablet:py-6 tablet:px-12 laptop:px-12 laptop:py-6 laptop:px-12 flex items-center text-lg phone:text-lg tablet:text-lg laptop:text-lg uppercase font-medium tablet:gap-3 laptop:gap-3 tracking-wide max-w-[340px] ` +
        `${styles.massagerLink} ${content.contactType === type ? styles.active : ''}`
      }
      onClick={() => {
        edit({ contactType: type })
        setValue('contactType', type)
        setValue('contactPhone', '')
        setValue('contactTelegram', '')
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
