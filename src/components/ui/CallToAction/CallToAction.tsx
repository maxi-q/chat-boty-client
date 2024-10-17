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
  color = 'green',
}: Readonly<{
  children: React.ReactNode
  className?: string
  textClassName?: string
  actionClassName?: string
  arrowClassName?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button'
  color?: 'green' | 'yellow' | 'blue' | 'white'
}>) => {
  const { openPopup } = useCallBackStore()

  let buttonColor = styles.green
  if (color == 'green') {
    buttonColor = styles.green
  }
  else if (color == 'yellow') {
    buttonColor = styles.yellow
  }
  else if (color == 'blue') {
    buttonColor = styles.blue
  }
  else if (color == 'white') {
    buttonColor = styles.white
  }

  return (
    <button
      type={type}
      onClick={onClick ? onClick : openPopup}
      className={`${className} ${styles.button} ${buttonColor} h-[84px] phone:h-[100px] max-w-[400px] text-8 pe-[110px] w-full `}
    >
      <div style={{ pointerEvents: 'none' }} className={`${actionClassName} ${styles.action} ${actionClassName} h-[84px] phone:h-[100px] w-[84px] phone:w-[100px] `}>
        <div>
          <Arrow
            className={`${arrowClassName} ${styles.arrowCircle} ${buttonColor} h-[36px] w-[36px] top-[24px] right-[24px] phone:h-[38px] phone:w-[38px] phone:top-[31px] phone:right-[31px]`}
          />
        </div>
      </div>
      <p style={{ pointerEvents: 'none' }} className={`${textClassName} ${styles.text} pl-[28px] phone:left-[35px] text-xl phone:text-2xl text-start text-wrap`}>
        {children}
      </p>
    </button>
  )
}
