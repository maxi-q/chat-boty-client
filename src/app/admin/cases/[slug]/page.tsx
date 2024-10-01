import dynamic from 'next/dynamic'

import { getCaseFileAdmin, patchCase } from '@/api/admin/cases/Cases'
import { getCaseInfo } from '@/api/cases/Cases'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })
  const caseFile = (await getCaseFileAdmin({ slug: params.slug })) || ''

  if (!caseInfo) return <>Ошибка загрузки информации о статье</>

  const formFunction = async (content: any) => {
    'use server'
    return patchCase(params.slug, content)
  }

  return <MarkdownEditor loadContent={{ postInfo: caseInfo, postFile: caseFile }} isUpdatePost={true} postClient={formFunction} />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
