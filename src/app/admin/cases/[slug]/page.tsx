import dynamic from 'next/dynamic'

import { getCaseFileAdmin } from '@/api/admin/cases/Cases'
import { getCaseInfo } from '@/api/cases/Cases'
import MarkdownEditor from './ClientContent'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })
  const caseFile = (await getCaseFileAdmin({ slug: params.slug })) || ''

  if (!caseInfo) return <>Ошибка загрузки информации о статье</>

  return <MarkdownEditor loadContent={{ articleInfo: caseInfo, articleFile: caseFile }} params={params} />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
