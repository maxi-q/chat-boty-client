import dynamic from 'next/dynamic'
import { Kanban } from './modules/kanban'

const NoSsr = async ({ params }: { params: { slug: string } }) => {

  // const fromPost = async (content: any) => {
  //   'use server'

  //   console.log(content)
  //   // return patchArticle(params.slug, content)
  // }

  return <Kanban />
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})

export const fetchCache = 'force-no-store'
