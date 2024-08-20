'use client'

import VectorLeft from '@/constants/svg/VectorLeft'
import VectorRight from '@/constants/svg/VectorRight'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { VideoModal } from './VideoModal'

const data = [
  {
    text: 'Начали сотрудничать с Никитой в январе 2020 года. За время своей работы Никита внедрил множество инструментов геймификации, настроил реферальную систему, которой нету ни у кого среди конкурентов, внедрял постоянно чат-ботов, о новых трендах в ВК мы узнавали первыми.\n\nСделал файл со 100 полезными сервисами, и рассказал не очевидные функции сенлера и других сервисов.\n\nНикита показал себя, как опытный и исполнительный партнер. Все всегда делалось вовремя и в темпе.',
    title: 'о новых трендах в ВК мы узнавали первыми.',
    company: 'Дайбобру',
    name: 'Ярослав Миньков',
    authorLink: 'https://vk.com/yr_minkov',
    avatar: '/yarik.webp',
  },
  {
    text: 'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда нужно выполняет сам, так же быстро\nи с учётом всех моих пожеланий.\nВсегда на связи.',
    title: 'быстро, четко,\n доходчиво',
    company: 'додо пицца',
    name: 'Елена Попова',
    authorLink: 'https://vk.com/id56103386',
    avatar: '/otzev_1.webp',
  },
  {
    text: 'Никита помог с задачами по интеграции Геткурса с автопилотом. Хороший парень, всегда на связи, делает хорошо, быстро, и с пониманием дела. Рекомендую 😎',
    title: 'всегда на связи, делает быстро и с пониманием дела',
    company: 'Алхимия Дизайна',
    name: 'Иван Завалко',
    authorLink: 'https://vk.com/vzavalko',
    avatar: '/zavalko.webp',
  },
  {
    text: 'Консалтился у Никиты по онлайн школам в мае\n\nНикита Круто очень рассказал про автопилот, чат боты, новый подход к Запускам, воронкам\n\nТо что творит с автопилотом, хитрыми фишками ВК и тд это жара👍👍🔥\n\nЭто маркетинг нового поколения🚀\n\nПодход огненный)\nРекомендую',
    title: 'Это маркетинг нового поколения',
    company: 'Продюсер',
    name: 'Евгений Ренуа',
    authorLink: 'https://vk.com/evgeny.renua',
    avatar: '/reuna.webp',
  },
  {
    text: 'Сегодня в чате поддержки АП я задал вопрос про VK donut и реализацию уведомлений по ним и Никита  пришёл ко мне на помощь\n\nБолее того, я веду сообщество в вк донат с первого дня создания подписной стены и я всегда мечтал (именно мечтал, по-другому не скажешь) настроить связь vk donut с АП и Никита все сделал очень быстро.\n\nНикита все сделал очень быстро! Спасибо огромное, Никита! Буду обращаться ещё!',
    title: 'Мечтал настроить связь vk donut с Автопилотом, Никита всё сделал быстро ',
    company: 'Преподаватель английского',
    name: 'Фаил Файзуллин',
    authorLink: 'https://vk.com/frfayzullin',
    avatar: '/frfayzullin.webp',
  },
  {
    text: 'Обратился к Никите в 2022 году для создания клуба по подписке, сначала всё было сделано в ВК, чуть позже Никита всё перенёс на WB.\n\nВсё работает до сих пор с минимумом моего участия. По некоторым техническим вопросам я пишу Никите и он всё оперативно реализует. ',
    title: 'Клуб по подписке работает как часы уже 2 года',
    company: 'Seller на WB',
    name: 'Егор Опарин',
    authorLink: 'https://t.me/egor_oparin',
    avatar: '/oparin.webp',
  },
]

const videoData = [
  {
    href: 'https://www.youtube.com/embed/G0fHsOQWG5g',
    vertical: '/video/afoninV.webp',
    horizontal: '/video/afoninH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/sW521Rh11Wo',
    vertical: '/video/milovV.webp',
    horizontal: '/video/milovH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/KKhLx4ETy0M',
    vertical: '/video/ivanovV.webp',
    horizontal: '/video/ivanovH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/h74TsLk3xHA',
    vertical: '/video/zhamkevichV.webp',
    horizontal: '/video/zhamkevichH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/tILvQMkBqbw',
    vertical: '/video/emilV.webp',
    horizontal: '/video/emilH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/LHmSlMMLcB8',
    vertical: '/video/yanbukhtinV.webp',
    horizontal: '/video/yanbukhtinH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/uUHp-eNZnkM',
    vertical: '/video/nasirovV.webp',
    horizontal: '/video/nasirovH.webp',
  },
  {
    href: 'https://www.youtube.com/embed/tUkagWy8nIQ',
    vertical: '/video/blackV.webp',
    horizontal: '/video/blackH.webp',
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
    image: ''
  })

  const closeVideo = () => {
    setVideo((p) => ({ ...p, show: false }))
  }
  const showVideo = () => {
    setVideo((p) => ({ ...p, show: true }))
  }
  const setVideoLink = (src: string, image: string) => {
    setVideo((p) => ({ ...p, src: src, image: image }))
  }

  const ClickVideo = (src: string, image: string) => {
    setVideoLink(src, image)
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
          {videoData.map((el, i) => (
            <VideoCard key={i} href={el.href} onClick={ClickVideo} vertical={el.vertical} horizontal={el.horizontal} />
          ))}
        </div>
      </div>

      <VideoModal show={video.show} src={video.src} image={video.image} closePopup={closeVideo} />
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
        <div className={`gap-5 flex items-stretch ${styles.gallery}`}>
          {data.map((el, i) => (
            <TextCard key={i} text={el.text} title={el.title} company={el.company} authorLink={el.authorLink} name={el.name} avatar={el.avatar} />
          ))}
        </div>
      </div>
    </>
  )
}

const VideoCard = ({ onClick, vertical, href, horizontal }: { onClick: (src: string, horizontal: string) => void; href: string; vertical: string; horizontal: string }) => {
  return (
    <Card onClick={() => onClick(href, horizontal)} className="!p-0 h-auto !w-auto">
      <Image src={`${vertical}`} alt={'видео отзыв'} height={640} width={360} />
    </Card>
  )
}

const TextCard = ({ title, text, company, name, avatar = '123', authorLink }: { title: string; text: string; company: string; name: string; avatar: string; authorLink: string }) => {
  return (
    <Card className="h-[301px] flex flex-col phone:h-[356px] tablet:h-auto laptop:h-auto">
      <h3 className={`phone:text-lg tablet:text-2xl font-bold uppercase phone:mb-4 tablet:mb-10 tracking-wide ${styles.cardTitle}`}>{title}</h3>
      <p
        className={` text-base tablet:text-lg leading-6 font-medium whitespace-normal laptop:whitespace-pre-wrap line-clamp-5 tablet:line-clamp-none ${styles.cardText}`}
        style={{ letterSpacing: '4%' }}
      >
        {text}
      </p>
      <div className="mt-5 flex-1 flex flex-col justify-end">
        <Splitter />
        <div className="flex gap-[28px] items-center">
          <div className={`${styles.avatar} rounded-full overflow-hidden`}>
            <Image src={avatar} width={50} height={50} alt={company}  />
          </div>
          <div className="">
            <h5 className="uppercase">{company}</h5>
            <a href={authorLink} className={`text-sm underline ${styles.cardName}`}>{name}</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

const Card = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.card} w-[320px] h-[574px] phone:w-[440px] tablet:w-[728px] laptop:w-[409px] desktop:w-[409px] p-4 tablet:p-8 sm:p-12 phone:pt-14 pb-8 rounded-3xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

const Splitter = () => <div className={`${styles.splitter} mb-10`} />
