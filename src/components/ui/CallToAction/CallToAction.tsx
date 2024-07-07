import Arrow from '@/constants/svg/Arrow'
import styles from './styles.module.css'

export const CallToActionButton = ({
	children,
	className,
	textClassName,
	actionClassName,
	arrowClassName
}: Readonly<{
	children: React.ReactNode,
	className?: string,
	textClassName?: string
	actionClassName?: string
	arrowClassName?: string
}>) => {
	return (
		<button className={styles.button + ' text-[20px] max-w-[320px] md:max-w-[350px] ' + className}>
      <p className={styles.text + ' left-[33px] md:left-[53px] top-[23px] ' + textClassName}>{children}</p>
			<div className={styles.action + ' ' + actionClassName}>
				<div>
					<Arrow className={styles.arrowCircle + ' ' + arrowClassName}/>
				</div>
			</div>
		</button>
	)
}
