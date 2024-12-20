import type { Metadata, ResolvingMetadata } from 'next'

import { fetchAllBlogSlugs } from '@/api/blog/utils'

import { getArticleInfo } from '@/api/blog/Articles'
import { SOURCE } from '@/constants/static'
import { FilePostMDX } from '@/modules/HeavyComponents/MDXPage'
import { notFound } from 'next/navigation'
import { PostHeader } from '@/modules/Posts/PostHeader'

interface IPostPage {
  params: { slug: string }
}

/* <Suspense fallback={<h1>Загрузка...</h1>}> */
// Ждем, пока пофиксят notFound в Suspense при SSG

const Page = async ({ params }: IPostPage) => {
  const articleInfo = await getArticleInfo({ slug: params.slug })

  if (!articleInfo) {
    return notFound()
  }

  return (
    <div className="max-w-[852px] mx-auto break-words">
      <div>
        <PostHeader postInfo={articleInfo} />
        <FilePostMDX params={params} />
      </div>
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

export const dynamicParams = true

export async function generateMetadata({ params }: IPostPage, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug

  const articleInfo = await getArticleInfo({ slug })

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: articleInfo?.web_title || articleInfo?.title,
    description: articleInfo?.web_description || articleInfo?.short_description,
    keywords: articleInfo?.keywords,
    openGraph: {
      url: `https://chat-boty.com/blog/${slug}`,
      type: 'article',
      title: articleInfo?.og_title,
      description: articleInfo?.og_description,
      images: [`${SOURCE.static_url}${articleInfo?.preview_og_file_id}?field=id`],
      // images: [`${SOURCE.static_url}${articleInfo?.slug}-og?field=slug`, ...previousImages],
    },
  }
}
