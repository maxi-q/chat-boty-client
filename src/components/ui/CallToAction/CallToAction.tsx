'use client'
import Arrow from '@/constants/svg/Arrow'
import { MouseEventHandler } from 'react'
import { useCallBackStore } from '../CallBackPopUp'
import styles from './styles.module.css'

export const CallToActionButton = ({
  children,
  className,
  textClassName,
  actionClassName,
  arrowClassName,
  onClick,
  type,
}: Readonly<{
  children: React.ReactNode
  className?: string
  textClassName?: string
  actionClassName?: string
  arrowClassName?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button'
}>) => {
  const { openPopup } = useCallBackStore()

  return (
    <button
      type={type}
      onClick={onClick ? onClick : openPopup}
      className={`h-16 tablet:h-[100px] max-w-[320px] tablet:max-w-[400px] text-8 ${styles.button} ${className}`}
    >
      <div style={{ pointerEvents: 'none' }} className={`${styles.action} h-16 w-16 tablet:h-[100px] tablet:w-[100px] ${actionClassName}`}>
        <div>
          <Arrow
            className={`${styles.arrowCircle} h-8 w-8 top-[17px] right-[15px] tablet:h-[38px] tablet:w-[38px] tablet:top-[31px] tablet:right-[31px] ${arrowClassName}`}
          />
        </div>
      </div>
      <p
        style={{ pointerEvents: 'none' }}
        className={`${styles.text} left-[35px] top-[21px] tablet:top-[32px] tablet:text-2xl ${textClassName}`}
      >
        {children}
      </p>
    </button>
  )
}
