'use client'

import { useEffect, useRef, useState } from 'react'

import { videoReviews } from '@/constants/static'
import VectorLeft from '@/constants/svg/VectorLeft'
import VectorRight from '@/constants/svg/VectorRight'

import { VideoCard } from './components/VideoCard'
import { VideoModal } from './VideoModal'

import styles from './style.module.css'

export const VideoCarousel = () => {
  const carousel = useRef<HTMLDivElement>(null)

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [video, setVideo] = useState({
    show: false,
    oid: '',
    id: '',
    image: '',
  })

  const scrolling = (right: boolean) => {
    carousel.current?.scrollBy({ left: (carousel.current.offsetWidth / 2) * (right ? 1 : -1), behavior: 'smooth' })
  }

  const recalculate = () => {
    setPage(Math.round(Math.max(1, (carousel.current?.scrollLeft || 0) / 340 + 1)))
  }

  const closeVideo = () => {
    setVideo((p) => ({ ...p, show: false, oid: '', id: '' }))
  }
  const showVideo = () => {
    setVideo((p) => ({ ...p, show: true }))
  }
  const setVideoLink = (id: string, oid: string, image: string) => {
    setVideo((p) => ({ ...p, id: id, oid: oid, image: image }))
  }

  const ClickVideo = (id: string, oid: string, image: string) => {
    setVideoLink(id, oid, image)
    showVideo()
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
      <div ref={carousel} onScroll={recalculate} className={`${styles.carousel} mx-auto`}>
        <div className={`gap-5 ${styles.gallery}`}>
          {videoReviews.map((el, i) => (
            <VideoCard key={i} onClick={ClickVideo} vertical={el.vertical} horizontal={el.horizontal} oid={el.oid} id={el.id} />
          ))}
        </div>
      </div>

      <VideoModal show={video.show} image={video.image} closePopup={closeVideo} oid={video.oid} id={video.id} />
    </>
  )
}
