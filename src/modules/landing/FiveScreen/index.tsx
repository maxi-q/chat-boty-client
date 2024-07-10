'use client'

import VectorLeft from '@/constants/svg/VectorLeft'
import VectorRight from '@/constants/svg/VectorRight'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

const nunitoFont = Manrope({
  // weight: '700',
  subsets: ['latin'],
  // variable: '--font-poppins',
})

export const FiveScreen = () => {
  const carousel1 = useRef<HTMLDivElement>(null)

  return (
    <main className={'section bp-5 px-4 py-5 lg:px-[40px] lg:pt-[70px] pb-32 ' + styles.screen}>
      <h1 className={'text-4xl lg:text-5xl xl:text-6xl ' + styles.title}>отзывы:</h1>
      {/* <iframe src="https://vk.com/video_ext.php?oid=-165380047&id=456239071&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe> */}
      <Carousel />
      <Carousel />
    </main>
  )
}

const TextCard = ({ title, text, company, name, avatar = '123' }: { title: string; text: string; company: string; name: string; avatar: string }) => {
  return (
    <div className={styles.card + ' max-w-[340px] w-max p-8 sm:p-12 pt-14 pb-8 rounded-3xl'}>
      <h3 className={'text-xl leading-6 font-semibold uppercase mb-10 tracking-wide ' + styles.cardTitle}>{title}</h3>
      <p className={'lg:leading-[18.6px] text-sm lg:text-[15px] ' + styles.cardText} style={{ whiteSpace: 'pre-wrap', letterSpacing: '4%' }}>
        {text}
      </p>
      <Splitter />
      <div className="flex gap-[28px] items-center">
        <div className={styles.avatar + ` rounded-full overflow-hidden`}>
          <Image src={avatar} width={50} height={50} alt={company} />
        </div>
        <div className="">
          <h5 className="uppercase">{company}</h5>
          <h6 className={'text-sm ' + styles.cardName}>{name}</h6>
        </div>
      </div>
    </div>
  )
}

const Carousel = () => {
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
        <div className={' gap-5 ' + styles.gallery}>
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
        </div>
        <div className={' gap-5 ' + styles.gallery}>
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
          <TextCard
            text={
              'Неоднократно обращалась\nк Никите по технической части\nВк: сенлер, автопилот,\nигрофикация. Всегда очень\nдовольна результатом. Очень\nтерпеливо отвечает на кучу\nвопросов. Объясняет быстро,\nчётко и доходчиво. Когда\nнужно выполняет сам,\nтак же быстро и с учётом всех\nмоих пожеланий. Всегда\nна связи.'
            }
            title={'быстро, четко,\n доходчиво'}
            company={'додо пицца'}
            name={'Елена Попова'}
            avatar={'/otzev_1.png'}
          />
        </div>
      </div>
    </>
  )
}

const Splitter = () => <div className={styles.splitter + ' mt-5 mb-10'} />
