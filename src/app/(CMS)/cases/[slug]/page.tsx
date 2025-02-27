import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCaseFile, getCaseInfo } from '@/api/cases/Cases'
import { fetchAllCasesSlugs } from '@/api/cases/utils'

import { generateCMSArticleMetadata } from '../../modules/CMSArticle/helpers'
import { CMSArticle } from '../../modules/CMSArticle'

interface ICasePage {
  params: { slug: string }
}

const Page = async ({ params }: ICasePage) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })

  if (!caseInfo) {
    return notFound()
  }

  const result = (await getCaseFile({ slug: params.slug })) || ''

  return <CMSArticle articleInfo={caseInfo} rawContent={result}/>
}

export default Page

export async function generateStaticParams() {
  const slugs = await fetchAllCasesSlugs()

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: ICasePage): Promise<Metadata> {
  const slug = params.slug

  const articleInfo = await getCaseInfo({ slug })

  return generateCMSArticleMetadata({articleInfo: articleInfo, 'slug': slug, 'type': 'cases'})
}
