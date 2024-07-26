import { RemoveScroll } from 'react-remove-scroll'
import styles from './style.module.css'

export const PopUp = ({ show, children, className }: { show: boolean; children: React.ReactNode; className?: string }) => {
  return (
    <section className={`fixed h-full w-full ${show && styles.active} ${styles.section}`}>
      <RemoveScroll enabled={show}>
        <span className={styles.overlay} />
        <div className={`fixed py-9 px-[5%] tablet:px-24 tablet:rounded-3xl w-full laptop:w-auto tablet:w-max ${styles.modal} ${show && styles.active} ${className}`}>
          {children}
        </div>
      </RemoveScroll>
    </section>
  )
}
