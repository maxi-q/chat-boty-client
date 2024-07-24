import styles from './dropStyle.module.css'

export const DropMenu = ({ show }: { show: boolean }) => {
  return (
    <section className={`fixed h-full w-full ${show && styles.active} ${styles.section}`}>
      <span className={styles.overlay} />
    </section>
  )
}
