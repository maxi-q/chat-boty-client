import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import style from './style.module.css'

import { getArticleFile } from '@/api/blog/Articles'

import { getCaseFile } from '@/api/cases/Cases'
import { settings } from './helpers'

interface IPostPage {
  params: { slug: string }
}

export const FilePostMDX = async ({ params }: IPostPage) => {
  const result = (await getArticleFile({ slug: params.slug })) || ''
  const content = JSON.parse(result)

  if (!content) {
    return notFound()
  }

  return <ContentMDX content={content} />
}

export const FileCaseMDX = async ({ params }: IPostPage) => {
  const result = (await getCaseFile({ slug: params.slug })) || ''
  const content = JSON.parse(result)

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
      components: settings.components,
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
