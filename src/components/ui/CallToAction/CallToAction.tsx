"use client"
import Arrow from '@/constants/svg/Arrow'
import styles from './styles.module.css'
import { usePopupStore } from '../PopUp'
import { MouseEventHandler } from 'react'

export const CallToActionButton = ({
	children,
	className,
	textClassName,
	actionClassName,
	arrowClassName,
	onClick
}: Readonly<{
	children: React.ReactNode,
	className?: string,
	textClassName?: string
	actionClassName?: string
	arrowClassName?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}>) => {
  const { openPopup } = usePopupStore()

	return (
		<button onClick={onClick ? onClick : openPopup} className={styles.button + ' h-16 lg:h-[80px] text-8 lg:text-[20px] max-w-[320px] md:max-w-[350px] ' + className}>
			<div className={styles.action + ' h-16 w-16 lg:h-[80px] lg:w-[80px] ' + actionClassName}>
				<div>
					<Arrow className={styles.arrowCircle + ' h-8 w-8 top-[17px] right-[15px] lg:h-[30px] lg:w-[30px] lg:top-[25px] lg:right-[25px] ' + arrowClassName}/>
				</div>
			</div>
      <p className={styles.text + ' left-[25px] md:left-[49px] top-[21px] lg:top-[23px] ' + textClassName}>{children}</p>
		</button>
	)
}
