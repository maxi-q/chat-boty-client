import styles from './style.module.css'

export const PopUp = ({ show, children, className }: { show: boolean; children: React.ReactNode; className?: string }) => {
  return (
    <section className={`fixed h-full w-full ${show && styles.active} ${styles.section}`}>
      <span className={styles.overlay} />
      <div className={`fixed py-9 px-[5%] tablet:px-24 tablet:rounded-3xl w-full tablet:w-auto ${styles.modal} ${show && styles.active} ${className}`}>{children}</div>
    </section>
  )
}
