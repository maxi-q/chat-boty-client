import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import style from './style.module.css'

import { settings } from './helpers'

export interface IArticlePage {
  rawContent: string
}

export const FileArticleMDX = async ({ rawContent }: IArticlePage) => {
  if (!rawContent) {
    return notFound()
  }

  const content = JSON.parse(rawContent)

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
