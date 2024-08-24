import Link from 'next/link'
import styles from './style.module.css'

export const Case = ({ title, text, link }: { title: string; text: string; link: string }) => {
  return (
    <Link href={link} className={`p-5 flex group rounded-2xl ${styles.case}`}>
      <h3 className={`pb-3 text-lg font-bold uppercase ${styles.subtitle}`}>{title}</h3>
      <p className={`text-base font-medium ${styles.text}`} style={{ whiteSpace: 'pre-wrap', flex: 1 }}>
        {text}
      </p>
    </Link>
  )
}
