import { Plugin } from 'unified'

import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import style from './style.module.css'

import { getArticleFile } from '@/api/blog/Articles'

import ArticleImage from './components/ArticleImage'
import Carousel from './components/Carousel'
import { settings } from './helpers'

interface IPostPage {
  params: { slug: string }
}

export const FileMDX = async ({ params }: IPostPage) => {
  const content = await getArticleFile({ slug: params.slug })

  if (!content) {
    return notFound()
  }

  return <ContentMDX content={content} />
}

export const ContentMDX = async ({ content }: { content: string }) => {

  try {
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: settings.options,
      components: settings.components
    })

    return <MDXBox compiledContent={compiledContent} />
  } catch (error) {
    console.log(error)
    return <>Error</>
  }
}

export const MDXBox = ({
  compiledContent,
}: Readonly<{
  compiledContent: React.ReactNode
}>) => {
  return <div className={style.MDXdocument}>{compiledContent}</div>
}