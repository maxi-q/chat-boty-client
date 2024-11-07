import dynamic from 'next/dynamic'

import { getCaseFileAdmin, getCaseInfoAdmin, patchCase } from '@/api/admin/cases/Cases'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const caseInfo = await getCaseInfoAdmin({ slug: params.slug })
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

export const fetchCache = 'force-no-store'
