import { callBackContent, contactType } from '@/components/ui/CallBackPopUp'
import styles from './style.module.css'

export const MessengerSelect = ({
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
        `rounded-full px-6 py-4 phone:px-6 phone:py-4 tablet:py-6 tablet:px-12 laptop:px-12 laptop:py-6 laptop:px-12 flex items-center text-lg phone:text-lg tablet:text-lg laptop:text-lg uppercase font-medium tablet:gap-3 laptop:gap-3 tracking-wide select-none ` +
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
