import { MDXRemote } from 'next-mdx-remote/rsc'

import { getArticleFile } from '@/api/blog/Articles'

import ArticleImage from '../components/ArticleImage'
import Carousel from '../components/Carousel'

interface IPostPage {
  params: { slug: string }
}

export const MDXPage = async ({ params }: IPostPage) => {
  const content = await getArticleFile({ slug: params.slug })

  if (!content) {
    return null
  }

  const overrideComponents = {
    Carousel: Carousel,
    Image: ArticleImage,
  }

  try {
    return <MDXRemote source={content || ''} components={overrideComponents} />
  } catch (e) {
    console.log(e)
    return <>Error</>
  }
}
