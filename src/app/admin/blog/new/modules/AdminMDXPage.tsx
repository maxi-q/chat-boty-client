'use client'

import { compileMDX } from 'next-mdx-remote/rsc'

import { MDXBox } from '@/modules/HeavyComponents/MDXPage'
import { settings } from '@/modules/HeavyComponents/MDXPage/helpers'
import { useEffect, useState } from 'react'

export const AdminMDXPage = ({ content }: { content: string }) => {
  const [compileContent, setCompileContent] = useState(<>Загрузка...</>)

  const getCompileContent = async () => {
    try {
      const { content: compiledContent } = await compileMDX({
        source: content,
        options: settings.options,
        components: settings.components,
      })
      setCompileContent(compiledContent)
    } catch {
      setCompileContent(<h1>Ошибка</h1>)
    }
  }

  useEffect(() => {
    getCompileContent()
  }, [content])

  return <MDXBox compiledContent={compileContent} />
}
