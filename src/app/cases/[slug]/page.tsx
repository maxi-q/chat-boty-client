import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'

import { getCaseInfo } from '@/api/cases/Cases'
import { fetchAllCasesSlugs } from '@/api/cases/utils'
import { SOURCE } from '@/constants/static'
import { CaseHeader } from './modules/ArticleHeader'
import { MDXPage } from './modules/MDXPage'

interface ICasePage {
  params: { slug: string }
}

const Page = ({ params }: ICasePage) => {
  return (
    <div className="max-w-[852px] mx-auto">
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <CaseHeader params={params} />
        <MDXPage params={params} />
      </Suspense>
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

export const dynamicParams = false

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
      images: [`${SOURCE.static_url}${articleInfo?.slug}-og?field=slug`],
      // images: [`${SOURCE.static_url}${articleInfo?.slug}-og?field=slug`, ...previousImages],
    },
  }
}
