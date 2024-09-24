import dynamic from 'next/dynamic'
import React from 'react'

import MarkdownEditor from './ClientContent'
import { getArticleInfo, getArticleFile } from '@/api/blog/Articles'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const articleInfo = await getArticleInfo({ slug: params.slug })
  const articleFile = await getArticleFile({ slug: params.slug }) || ''

  if (!articleInfo) return <>Ошибка загрузки информации о статье</>

  return <React.Fragment><MarkdownEditor loadContent={{articleInfo: articleInfo, articleFile: articleFile}} params={params}/></React.Fragment>
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})