'use client'

import VectorLeft from '@/constants/svg/VectorLeft'
import VectorRight from '@/constants/svg/VectorRight'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { VideoModal } from './VideoModal'

const data = [
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/G0fHsOQWG5g',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/tILvQMkBqbw',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/G0fHsOQWG5g',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/tILvQMkBqbw',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/G0fHsOQWG5g',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    avatar: '/otzev_1.png',
    src: 'https://www.youtube.com/embed/tILvQMkBqbw',
  },
]

export const VideoCarousel = () => {
  const carousel = useRef<HTMLDivElement>(null)

  const scrolling = (right: boolean) => {
    carousel.current?.scrollBy({ left: (carousel.current.offsetWidth / 2) * (right ? 1 : -1), behavior: 'smooth' })
  }
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const recalculate = () => {
    setPage(Math.round(Math.max(1, (carousel.current?.scrollLeft || 0) / 340 + 1)))
  }

  const [video, setVideo] = useState({
    show: false,
    src: 'https://www.youtube.com/embed/G0fHsOQWG5g',
  })

  const closeVideo = () => {
    setVideo((p) => ({ ...p, show: false }))
  }
  const showVideo = () => {
    setVideo((p) => ({ ...p, show: true }))
  }
  const setVideoLink = (src: string) => {
    setVideo((p) => ({ ...p, src: src }))
  }

  const ClickVideo = (src: string) => {
    setVideoLink(src)
    showVideo()
    console.log('123')
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
          {data.map((el, i) => (
            <VideoCard key={i} src={el.src} onClick={ClickVideo} />
          ))}
        </div>
      </div>

      <VideoModal show={video.show} src={video.src} closePopup={closeVideo} />
    </>
  )
}

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
        <div className={`gap-5 ${styles.gallery}`}>
          {data.map((el, i) => (
            <TextCard key={i} text={el.text} title={el.title} company={el.company} name={el.name} avatar={el.avatar} />
          ))}
        </div>
      </div>
    </>
  )
}

const VideoCard = ({
  onClick,
  src,
}: {
  onClick: (src: string) => void
  src: string
}) => {
  return (
    <Card onClick={() => onClick(src)}>
      <h3 className={`text-xl leading-6 font-semibold uppercase mb-10 tracking-wide flex justify-center ${styles.cardTitle}`}>Video</h3>
    </Card>
  )
}

const TextCard = ({ title, text, company, name, avatar = '123' }: { title: string; text: string; company: string; name: string; avatar: string }) => {
  return (
    <Card>
      <h3 className={`text-2xl font-bold uppercase mb-10 tracking-wide ${styles.cardTitle}`}>{title}</h3>
      <p className={`text-lg leading-6 font-medium ${styles.cardText}`} style={{ whiteSpace: 'pre-wrap', letterSpacing: '4%' }}>
        {text}
      </p>
      <Splitter />
      <div className="flex gap-[28px] items-center">
        <div className={`${styles.avatar} rounded-full overflow-hidden`}>
          <Image src={avatar} width={50} height={50} alt={company} />
        </div>
        <div className="">
          <h5 className="uppercase">{company}</h5>
          <h6 className={'text-sm ' + styles.cardName}>{name}</h6>
        </div>
      </div>
    </Card>
  )
}

const Card = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <div onClick={onClick} className={`${styles.card} laptop:w-[409px] laptop:h-[574px] desktop:w-[409px] desktop:h-[574px] p-8 sm:p-12 pt-14 pb-8 rounded-3xl`}>
      {children}
    </div>
  )
}

const Splitter = () => <div className={styles.splitter + ' mt-5 mb-10'} />