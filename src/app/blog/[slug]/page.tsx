import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { Suspense } from 'react'

import { getArticleFile, getArticleInfo } from '@/api/blog/Articles'
import { SOURCE } from '@/constants/static'
import BlogClock from '@/constants/svg/BlogClock'

import ArticleImage from './components/ArticleImage'
import Carousel from './components/Carousel'

import style from './style.module.css'

const getPost = async (slug: string) => {
  return getArticleFile({ slug })
}

const getPostInfo = async (slug: string) => {
  return getArticleInfo({ slug })
}

interface IPostPage {
  params: { slug: string }
}

const MDXPage = async ({ params }: IPostPage) => {
  const content = await getPost(params.slug)

  const overrideComponents = {
    Carousel: Carousel,
    Image: ArticleImage,
  }

  try {
    return <MDXRemote source={content || ''} components={overrideComponents} />
  } catch (e) {
    console.log(e)
    return <>Error</>
  }
}

const ArticleHeader = async ({ params }: IPostPage) => {
  const articleInfo = await getPostInfo(params.slug)
  const date = new Date(articleInfo?.created_at || '').toLocaleDateString()

  return (
    <>
      {/* Image placeholder="blur" */}
      <Image className="rounded-xl m-0 mb-3" width={1600} height={900} src={`${SOURCE.url}posts/${articleInfo?.slug}/files/preview`} alt={'изображение'} />
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

export default function Page({ params }: IPostPage) {
  return (
    // <h1>123</h1>
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <ArticleHeader params={params} />
      <MDXPage params={params} />
    </Suspense>
  )
}
