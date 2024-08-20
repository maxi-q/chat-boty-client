import styles from './style.module.css'

export const Card = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.card} w-[320px] h-[574px] phone:w-[440px] tablet:w-[728px] laptop:w-[409px] desktop:w-[409px] p-4 tablet:p-8 sm:p-12 phone:pt-14 pb-8 rounded-3xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}