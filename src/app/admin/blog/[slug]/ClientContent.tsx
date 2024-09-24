'use client'

import EasyMDE from 'easymde'

import 'easymde/dist/easymde.min.css'

import { PostPostInfo } from '@/api/admin/blog/ArticlesTypes'
import { patchArticleClient } from '@/api/admin/blog/Routes'
import { useEffect, useRef, useState } from 'react'

import { AdminMDXPage } from './modules/AdminMDXPage'
import ArticleForm from '../../modules/ArticleForm/InfoMenu'
import { settings } from '../../helpers/helpers'

const MarkdownEditor = ({ params, loadContent }: { params: { slug: string }; loadContent: { articleFile: string; articleInfo: PostPostInfo } }) => {
  const [content, setContent] = useState<string>(JSON.parse(loadContent.articleFile))

  const easyMDERef = useRef<EasyMDE | null>(null)

  useEffect(() => {
    const easyMDE = new EasyMDE({
      element: document.getElementById('markdown-editor') as HTMLTextAreaElement,
      initialValue: content || `Статья была пустой`,
      ...settings,
    })

    easyMDERef.current = easyMDE

    easyMDE.value(content)

    easyMDE.codemirror.on('change', () => {
      setContent(easyMDE.value())
    })

    return () => {
      easyMDE.toTextArea()
      easyMDERef.current = null
    }
  }, [])

  const PostData = async (contentInfo: PostPostInfo) => {
    const result = await patchArticleClient(params.slug, {
      ...contentInfo,
      content,
    })
    alert(result)
  }

  return (
    <div className="prose section p-2">
      <ArticleForm onSubmit={PostData} data={loadContent.articleInfo} />
      <div className={`flex w-screen`}>
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
