import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { fetchAllBlogSlugs } from '@/api/blog/utils'
import { getBlogArticleFile, getBlogArticleInfo } from '@/api/blog/Articles'

import { generateCMSArticleMetadata } from '../../modules/CMSArticle/helpers'
import { CMSArticle } from '../../modules/CMSArticle'

interface IPostPage {
  params: { slug: string }
}

const Page = async ({ params }: IPostPage) => {
  const blogArticleInfo = await getBlogArticleInfo({ slug: params.slug })

  if (!blogArticleInfo) {
    return notFound()
  }

  const result = (await getBlogArticleFile({ slug: params.slug })) || ''

  return <CMSArticle articleInfo={blogArticleInfo} rawContent={result}/>
}

export default Page

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs()

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: IPostPage): Promise<Metadata> {
  const slug = params.slug

  const articleInfo = await getBlogArticleInfo({ slug })

  return generateCMSArticleMetadata({articleInfo: articleInfo, 'slug': slug, 'type': 'blog'})
}
