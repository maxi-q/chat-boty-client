'use client'

import { schemas } from '@/api/communication/communicationHelper'
import { telegramRequest } from '@/api/communication/telegram'
import { contactType, useCallBackStore } from '@/components/ui/CallBackPopUp'
import PhoneInput from '@/components/ui/InputMask/PhoneInput'
import TelegramInput from '@/components/ui/InputMask/TelegramInput'
import TelegramFeedback from '@/constants/svg/TelegramFeedback'
import Telephone from '@/constants/svg/Telephone'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { MessengerSelect } from './components/MessengerSelect'
import { Modal } from './components/Modal'
import styles from './style.module.css'

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
    <form className={`${className}`} onSubmit={handleSubmit(communicationRequests)}>
      <div className="flex flex-col phone:flex-row gap-6">
        <MessengerSelect type={contactType.Phone} edit={edit} content={content} setValue={setValue}>
          <Telephone /> Позвонить
        </MessengerSelect>
        <MessengerSelect type={contactType.Telegram} edit={edit} content={content} setValue={setValue}>
          <TelegramFeedback /> Telegram
        </MessengerSelect>
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
        className={`uppercase select-none px-6 py-4 w-full text-lg phone:px-6 phone:py-4 phone:w-full tablet:w-auto phone:text-lg tablet:px-12 tablet:py-6 tablet:text-lg laptop:px-12 laptop:py-6 laptop:text-lg font-medium rounded-full ${styles.cta}`}
        type="submit"
      >
        получить консультацию
      </button>
      <Modal key={className} isOpen={show} closePopup={closePopup} />
      {/* {createPortal(<Modal key={className} isOpen={show} closePopup={closePopup} />, document.body)} */}
    </form>
  )
}
