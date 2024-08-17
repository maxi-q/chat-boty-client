import { SOURCE } from '@/constants/static'
import BlogClock from '@/constants/svg/BlogClock'
import Link from 'next/link'
import style from './style.module.css'
import Image from 'next/image'

interface ICard {
  created_at: string
  duration: number
  title: string
  image: string
  link: string
}

export const Card = ({ created_at, duration, title, image, link }: ICard) => {
  const date = new Date(created_at).toLocaleDateString()
  return (
    <Link href={`/blog/${link}`} className="w-1/2 p-2 no-underline">
      <div className="w-full rounded-[12px]">
        <Image className="rounded-xl m-0 mb-3" width={900} height={450} src={`${SOURCE.url}posts/${link}/files/preview`} alt={'изображение'} />
        <div className="flex text-[16px] font-medium items-center text-center">
          {date}
          <span className={`${style.slash} mx-1`} />
          <span className="me-1">
            <BlogClock />
          </span>
          {duration}
        </div>
        <h1>{title}</h1>
      </div>
    </Link>
  )
}
