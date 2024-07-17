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
      className={`h-16 laptop:h-[80px] desktop:h-[100px] max-w-[320px] desktop:max-w-[400px] text-8 laptop:text-[20px] ${styles.button} ${className}`}
    >
      <div style={{ pointerEvents: 'none' }} className={`${styles.action} h-16 w-16 laptop:h-[80px] desktop:h-[100px] desktop:w-[100px] laptop:w-[80px] ${actionClassName}`}>
        <div>
          <Arrow
            className={`${styles.arrowCircle} h-8 w-8 top-[17px] right-[15px] laptop:h-[30px] desktop:h-[38px] laptop:w-[30px] desktop:w-[38px] laptop:top-[25px] desktop:top-[31px] laptop:right-[25px] desktop:right-[31px] ${arrowClassName}`}
          />
        </div>
      </div>
      <p
        style={{ pointerEvents: 'none' }}
        className={`${styles.text} left-[25px] laptop:left-[49px] top-[21px] laptop:top-[23px] desktop:top-[32px] desktop:text-2xl ${textClassName}`}
      >
        {children}
      </p>
    </button>
  )
}
