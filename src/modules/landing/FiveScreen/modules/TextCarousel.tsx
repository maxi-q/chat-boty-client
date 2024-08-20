'use client'

import { useEffect, useRef, useState } from 'react'

import { textReviews } from '@/constants/static'
import VectorLeft from '@/constants/svg/VectorLeft'
import VectorRight from '@/constants/svg/VectorRight'

import { TextCard } from './components/TextCard'

import styles from './style.module.css'

export const TextCarousel = () => {
  const carousel = useRef<HTMLDivElement>(null)

  const scrolling = (right: boolean) => {
    carousel.current?.scrollBy({ left: (carousel.current.offsetWidth / 2) * (right ? 1 : -1), behavior: 'smooth' })
  }
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const recalculate = () => {
    setPage(Math.round(Math.max(1, (carousel.current?.scrollLeft || 0) / 340 + 1)))
  }

  useEffect(() => {
    setMaxPage(Math.round(((carousel.current?.scrollWidth || 0) - window.innerWidth) / 340) + 1)
  }, [])

  return (
    <>
      <div className="pt-16 pb-4 ms-auto flex justify-end items-center">
        <div
          onClick={() => {
            scrolling(false)
          }}
        >
          <VectorLeft className={styles.vector} />
        </div>
        <div className="mx-3">
          {page}/{maxPage}
        </div>
        <div
          onClick={() => {
            scrolling(true)
          }}
        >
          <VectorRight className={styles.vector} />
        </div>
      </div>
      <div ref={carousel} onScroll={recalculate} className={styles.carousel + ' mx-auto'}>
        <div className={`gap-5 flex items-stretch ${styles.gallery}`}>
          {textReviews.map((el, i) => (
            <TextCard key={i} text={el.text} title={el.title} company={el.company} authorLink={el.authorLink} name={el.name} avatar={el.avatar} />
          ))}
        </div>
      </div>
    </>
  )
}
