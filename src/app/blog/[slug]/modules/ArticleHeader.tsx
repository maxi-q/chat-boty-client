import Image from 'next/image'


import { getArticleInfo } from '@/api/blog/Articles'
import { SOURCE } from '@/constants/static'
import BlogClock from '@/constants/svg/BlogClock'

import style from './style.module.css'

interface IPostPage {
  params: { slug: string }
}

export const ArticleHeader = async ({ params }: IPostPage) => {
  const articleInfo = await getArticleInfo({ slug: params.slug })

  if (!articleInfo) {
    return null
  }

  const date = new Date(articleInfo?.created_at || '').toLocaleDateString()

  return (
    <>
      {/* Image placeholder="blur" */}
      <Image className="rounded-xl m-0 mb-3" width={1600} height={900} src={`${SOURCE.url}posts/${articleInfo?.slug}/files/preview?field=slug`} alt={'изображение'} />
      <div className="flex my-4 text-[16px] font-medium items-center text-center">
        {date}
        <span className={`${style.slash} mx-1`} />
        <span className="me-1">
          <BlogClock />
        </span>
        {articleInfo?.reading_time} минут
      </div>
    </>
  )
}
