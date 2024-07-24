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
      className={`h-[84px] phone:h-[100px] max-w-[400px] text-8 pe-[110px] w-full ${styles.button} ${className}`}
    >
      <div style={{ pointerEvents: 'none' }} className={`${styles.action} h-[84px] phone:h-[100px] w-[84px] phone:w-[100px] ${actionClassName}`}>
        <div>
          <Arrow
            className={`${styles.arrowCircle} h-[36px] w-[36px] top-[24px] right-[24px] phone:h-[38px] phone:w-[38px] phone:top-[31px] phone:right-[31px] ${arrowClassName}`}
          />
        </div>
      </div>
      <p
        style={{ pointerEvents: 'none' }}
        className={`${styles.text} pl-[28px] phone:left-[35px] text-xl phone:text-2xl text-start text-wrap ${textClassName}`}
      >
        {children}
      </p>
    </button>
  )
}
