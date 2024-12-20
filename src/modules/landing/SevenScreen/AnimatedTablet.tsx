'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

const Tablet = ({ text, icon, margin, last, color = 'green' }: { text: string; icon: React.ReactNode; margin: number; last?: boolean; color?: 'green' | 'blue' }) => {
  const tabletRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)

  const onEntry = () => {
    setIsVisible(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEntry()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0 }
    )

    if (tabletRef.current) {
      observer.observe(tabletRef.current)
    }
  }, [])

  let elementColor = styles.green
  if (color == 'blue') {
    elementColor = styles.blue
  }

  return (
    <>
      <div
        className={`block tablet:hidden laptop:block relative w-full left-[500px] ${styles.tabletBox} ${isVisible && styles.active}`}
        style={{ marginLeft: `${margin}px`, marginBottom: last ? '-20px' : '0' }}
      >
        <div ref={tabletRef} className="absolute left-[-400px] laptop:left-[-50%]" />
        <div className={`${styles.tablet} bg-gray-900 text-12 w-max flex items-center`}>
          <div className={`${styles.tabletCircle} ${elementColor} rounded-full`}>{icon}</div>
          <p className="leading-4 tracking-wider text-sm font-light" style={{ whiteSpace: 'pre-wrap' }}>
            {text}
          </p>
        </div>
      </div>
    </>
  )
}

export { Tablet }
