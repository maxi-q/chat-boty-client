import { Suspense } from 'react'

import { fetchAllBlogSlugs } from '@/api/blog/utils'

import { ArticleHeader } from './modules/ArticleHeader'
import { MDXPage } from './modules/MDXPage'

interface IPostPage {
  params: { slug: string }
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
