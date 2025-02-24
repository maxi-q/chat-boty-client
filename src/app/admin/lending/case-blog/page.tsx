import dynamic from 'next/dynamic'

const NoSsr = async ({ params }: { params: { slug: string } }) => {

  const fromPost = async (content: any) => {
    'use server'

    console.log(content)
    // return patchArticle(params.slug, content)
  }

  return <>блог\статьи</>
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})

export const fetchCache = 'force-no-store'
