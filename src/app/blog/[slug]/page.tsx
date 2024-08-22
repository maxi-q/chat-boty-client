import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { Suspense } from 'react'

import { getArticleFile, getArticleInfo } from '@/api/blog/Articles'
import { SOURCE } from '@/constants/static'
import BlogClock from '@/constants/svg/BlogClock'

import ArticleImage from './components/ArticleImage'
import Carousel from './components/Carousel'

import { fetchAllBlogSlugs } from '@/api/blog/utils'
import style from './style.module.css'

interface IPostPage {
  params: { slug: string }
}

const MDXPage = async ({ params }: IPostPage) => {
  const content = await getArticleFile({ slug: params.slug })

  if (!content) {
    return null
  }

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
  const articleInfo = await getArticleInfo({ slug: params.slug })
  
  if (!articleInfo) {
    return null
  }

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

const Page = ({ params }: IPostPage) => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <ArticleHeader params={params} />
      <MDXPage params={params} />
    </Suspense>
  )
}
export default Page

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs()

  return slugs.map((slug) => ({
    slug: slug, 
  }))
}

export const dynamicParams = false

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
