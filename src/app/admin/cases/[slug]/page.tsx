import dynamic from 'next/dynamic'
import React from 'react'

import MarkdownEditor from './ClientContent'
import { getCaseInfo, getCaseFile } from '@/api/cases/Cases'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })
  const caseFile = await getCaseFile({ slug: params.slug }) || ''

  if (!caseInfo) return <>Ошибка загрузки информации о статье</>

  return <React.Fragment><MarkdownEditor loadContent={{articleInfo: caseInfo, articleFile: caseFile}} params={params}/></React.Fragment>
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})