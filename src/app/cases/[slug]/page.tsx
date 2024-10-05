import type { Metadata, ResolvingMetadata } from 'next'

import { getCaseInfo } from '@/api/cases/Cases'
import { fetchAllCasesSlugs } from '@/api/cases/utils'
import { SOURCE } from '@/constants/static'
import { FileCaseMDX } from '@/modules/HeavyComponents/MDXPage'

import { PostHeader } from '@/modules/Posts/PostHeader'

import { notFound } from 'next/navigation'

interface ICasePage {
  params: { slug: string }
}

/* <Suspense fallback={<h1>Загрузка...</h1>}> */
// Ждем, пока пофиксят notFound в Suspense при SSG

const Page = async ({ params }: ICasePage) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })

  if (!caseInfo) {
    return notFound()
  }

  return (
    <div className="max-w-[852px] mx-auto">
      <div>
        <PostHeader postInfo={caseInfo} />
        <FileCaseMDX params={params} />
      </div>
    </div>
  )
}

export default Page

export async function generateStaticParams() {
  const slugs = await fetchAllCasesSlugs()

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: ICasePage, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug

  const articleInfo = await getCaseInfo({ slug })

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${articleInfo?.title}`,
    description: articleInfo?.short_description,
    openGraph: {
      url: `https://chat-boty.com/cases/${slug}`,
      type: 'article',
      title: articleInfo?.title,
      description: articleInfo?.short_description,
      images: [`${SOURCE.static_url}${articleInfo?.preview_og_file_id}?field=id`],
      // images: [`${SOURCE.static_url}${articleInfo?.slug}-og?field=slug`, ...previousImages],
    },
  }
}
