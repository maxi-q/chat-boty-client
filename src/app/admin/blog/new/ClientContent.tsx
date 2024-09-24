'use client'

import EasyMDE from 'easymde'

import 'easymde/dist/easymde.min.css'

import { PostPostInfo } from '@/api/admin/blog/ArticlesTypes'
import { postArticleClient } from '@/api/admin/blog/Routes'
import { useEffect, useRef, useState } from 'react'
import { AdminMDXPage } from './modules/AdminMDXPage'
import ArticleForm from '../../modules/ArticleForm/InfoMenu'
import { settings } from '../../helpers/helpers'

const MarkdownEditor = () => {
  const [content, setContent] = useState<string>('')

  const easyMDERef = useRef<EasyMDE | null>(null)

  useEffect(() => {
    const easyMDE = new EasyMDE({
      element: document.getElementById('markdown-editor') as HTMLTextAreaElement,
      initialValue: content,
      ...settings,
    })

    easyMDERef.current = easyMDE

    setContent(easyMDE.value())

    easyMDE.codemirror.on('change', () => {
      setContent(easyMDE.value())
    })

    return () => {
      easyMDE.toTextArea()
      easyMDERef.current = null
    }
  }, [])

  const PostData = (contentInfo: PostPostInfo) => {
    postArticleClient({
      ...contentInfo,
      content,
    })
  }
  return (
    <div className="prose section p-2">
      <ArticleForm onSubmit={PostData} />
      <div className="flex w-screen">
        <div className="w-1/2 p-4">
          <textarea id="markdown-editor" className="w-full h-full border border-gray-300 rounded p-2" />
        </div>

        <div className="w-1/2 p-4 border-l border-gray-300 pt-16">
          <AdminMDXPage content={content} />
        </div>
      </div>
    </div>
  )
}

export default MarkdownEditor
