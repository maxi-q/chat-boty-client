import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'

import { fetchAllBlogSlugs } from '@/api/blog/utils'

import { getArticleInfo } from '@/api/blog/Articles'
import { SOURCE } from '@/constants/static'
import { ArticleHeader } from './modules/ArticleHeader'
import { MDXPage } from './modules/MDXPage'

interface IPostPage {
  params: { slug: string }
}

const Page = ({ params }: IPostPage) => {
  return (
    <div className="max-w-[852px] mx-auto">
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <ArticleHeader params={params} />
        <MDXPage params={params} />
      </Suspense>
    </div>
  )
}

export default Page

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs()

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: IPostPage, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug

  const articleInfo = await getArticleInfo({ slug })

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${articleInfo?.title}`,
    description: articleInfo?.short_description,
    openGraph: {
      url: `https://chat-boty.com/blog/${slug}`,
      type: 'article',
      title: articleInfo?.title,
      description: articleInfo?.short_description,
      // images: [`https://static.tildacdn.com/tild3262-3165-4130-a530-396337393065/photo.png`],
      images: [`${SOURCE.static_url}${articleInfo?.slug}-og?field=slug`, ...previousImages],
    },
  }
}

export const dynamicParams = false
