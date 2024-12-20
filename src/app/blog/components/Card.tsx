import { SOURCE } from '@/constants/static'
import Eye from '@/constants/svg/Eye'
import PostClock from '@/constants/svg/PostClock'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

interface ICard {
  created_at: string
  duration: number
  title: string
  image: string
  link: string
  views_count: number
}

export const Card = ({ created_at, duration, title, image, link, views_count }: ICard) => {
  const date = new Date(created_at).toLocaleDateString()

  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) + keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) + keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) + keyStr.charAt(e3 & 63)

  const rgbDataURL = (r: number, g: number, b: number) => `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  return (
    <Link href={`/blog/${link}`} className="laptop:w-1/2 p-2 no-underline overflow-hidden">
      <div className="max-w-[410px] w-full rounded-[12px]">
        <Image
          className="rounded-xl m-0 mb-3 select-none"
          placeholder="blur"
          blurDataURL={rgbDataURL(242, 242, 242)}
          width={410}
          height={205}
          src={`${SOURCE.static_url}${image}?field=id`}
          alt={'изображение'}
        />
        <div className="flex text-[16px] font-medium items-center text-center">
          {date}
          <span className={`${style.slash} mx-1`} />
          <span className="me-1">
            <PostClock />
          </span>
          {duration}
          <span className="ms-2 me-1">
            <Eye />
          </span>
          {views_count || 0}
        </div>
        <h1 className="text-2xl tablet:text-2xl laptop:text-3xl">{title}</h1>
      </div>
    </Link>
  )
}
