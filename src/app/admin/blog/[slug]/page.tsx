import dynamic from 'next/dynamic'

import { patchArticleClient } from '@/api/admin/blog/Routes'
import { getArticleFile, getArticleInfo } from '@/api/blog/Articles'
import MarkdownEditor from '../../modules/ClientContent'
import { getArticleFileAdmin, patchArticle } from '@/api/admin/blog/Articles'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const articleInfo = await getArticleInfo({ slug: params.slug })
  const articleFile = (await getArticleFileAdmin({ slug: params.slug })) || ''

  if (!articleInfo) return <>Ошибка загрузки информации о статье</>

  const fromPost = async (content: any) => {
    "use server"
    return patchArticle(params.slug, content)
  }

  return <MarkdownEditor loadContent={{ postInfo: articleInfo, postFile: articleFile }} isUpdatePost={true} postClient={fromPost} />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
