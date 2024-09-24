import dynamic from 'next/dynamic'

import { getCaseFileAdmin } from '@/api/admin/cases/Cases'
import { patchCaseClient } from '@/api/admin/cases/Routes'
import { getCaseInfo } from '@/api/cases/Cases'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const caseInfo = await getCaseInfo({ slug: params.slug })
  const caseFile = (await getCaseFileAdmin({ slug: params.slug })) || ''

  if (!caseInfo) return <>Ошибка загрузки информации о статье</>

  const patchCase = async (content: any) => {
    "use server"
    return patchCaseClient(content, params.slug)
  }

  return <MarkdownEditor loadContent={{ postInfo: caseInfo, postFile: caseFile }} isUpdatePost={true} postClient={patchCase} />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
