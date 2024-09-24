import dynamic from 'next/dynamic'

import { patchArticleClient } from '@/api/admin/blog/Routes'
import { getArticleFile, getArticleInfo } from '@/api/blog/Articles'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = async ({ params }: { params: { slug: string } }) => {
  const articleInfo = await getArticleInfo({ slug: params.slug })
  const articleFile = (await getArticleFile({ slug: params.slug })) || ''

  if (!articleInfo) return <>Ошибка загрузки информации о статье</>

  const patchArticle = (content: any) => {
    "use server"
    return patchArticleClient(params.slug, content)
  }

  return <MarkdownEditor loadContent={{ postInfo: articleInfo, postFile: articleFile }} isUpdatePost={true} postClient={(patchArticle)} />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
