import { RemoveScroll } from 'react-remove-scroll'
import styles from './style.module.css'

export const PopUp = ({ show, children, className }: { show: boolean; children: React.ReactNode; className?: string }) => {
  return (
    <section className={`fixed h-full w-full z-40 ${show && styles.active} ${styles.section}`}>
      <RemoveScroll enabled={show}>
        <span className={styles.overlay} />
        <div
          className={`fixed py-9 px-[5%] tablet:px-24 tablet:rounded-3xl w-full laptop:w-auto tablet:w-max z-50 ${styles.modal} ${styles.defaultModal} ${
            show && styles.active
          } ${className}`}
        >
          {children}
        </div>
      </RemoveScroll>
    </section>
  )
}

export const WhitePopUp = ({ show, children, className, onClickOverlay }: { show: boolean; children: React.ReactNode; className?: string; onClickOverlay?: () => void }) => {
  return (
    <section className={`fixed h-full w-full z-50 ${show && styles.active} ${styles.section}`} >
      <RemoveScroll enabled={show}>
        <span className={`${styles.overlay} ${show && styles.active}`} onClick={onClickOverlay ? onClickOverlay : () => {}}/>
        <div
          className={`fixed py-9 px-[5%] tablet:px-24 tablet:rounded-3xl w-full laptop:w-auto tablet:w-max ${styles.modal} ${styles.whiteModal} ${
            show && styles.active
          } ${className}`}
        >
          {children}
        </div>
      </RemoveScroll>
    </section>
  )
}
