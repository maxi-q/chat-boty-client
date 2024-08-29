import { CallToActionButton } from '@/components/ui/CallToAction'
import styles from './style.module.css'


export const CTA = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <div className={`p-5 flex rounded-2xl ${styles.case} ${styles.CTA}`}>
      <h3 className={`pb-3 text-lg font-bold uppercase ${styles.subtitle}`}>{title}</h3>
      <p className={`leading-4 text-base font-medium ${styles.text}`} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
      <CallToActionButton
        className={`mt-16 laptop:mt-3 !bg-[var(--color-main)] ${styles.CTAButton} hover:text-white`}
        actionClassName={'!bg-[var(--color-accent)]'}
        arrowClassName={'!fill-[var(--color-main)]'}
        textClassName="laptop:left-[20px] desktop:left-[35px]"
      >
        <span className="phone:text-xl tablet:text-2xl">Обсудить проект</span>
      </CallToActionButton>
    </div>
  )
}
