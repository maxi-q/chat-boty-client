'use client'

import EasyMDE from 'easymde'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import 'easymde/dist/easymde.min.css'

import { PostInfoResponse } from '@/api/admin/blog/ArticlesTypes'
import { PostCaseInfo } from '@/api/admin/cases/CasesTypes'

import { redirectToSlug, settings } from '../../helpers/helpers'
import ArticleForm from '../../modules/ArticleForm/InfoMenu'
import { AdminMDXPage } from '../AdminMDXPage'

const MarkdownEditor = ({
  loadContent,
  postClient,
  isUpdatePost,
}: {
  loadContent?: { postFile: string; postInfo: PostCaseInfo }
  postClient: (content: any) => Promise<any | undefined>
  isUpdatePost: boolean
}) => {
  const postFile = loadContent?.postFile
  const [content, setContent] = useState<string>(JSON.parse(postFile == 'null' ? '""' : loadContent?.postFile || '""'))
  const currentPath = usePathname()
  const easyMDERef = useRef<EasyMDE | null>(null)

  useEffect(() => {
    const easyMDE = new EasyMDE({
      element: document.getElementById('markdown-editor') as HTMLTextAreaElement,
      initialValue: content,
      ...settings,
    })

    easyMDERef.current = easyMDE

    if (isUpdatePost) {
      easyMDE.value(content)
    } else {
      setContent(easyMDE.value())
    }

    easyMDE.codemirror.on('change', () => {
      setContent(easyMDE.value())
    })

    return () => {
      easyMDE.toTextArea()
      easyMDERef.current = null
    }
  }, [])

  const router = useRouter()

  const PostData = async (contentInfo: PostInfoResponse) => {
    const response = await postClient({
      ...contentInfo,
      content,
    })
    if (!response) alert(`Произошла ошибка: ${response}`)
    if (response.slug) {
      alert(`Успех! сейчас перенесем вас на изменение ${response.slug}`)
      const redirectPath = redirectToSlug(currentPath, response.slug)
      router.push(redirectPath)
    }
  }

  return (
    <div className="prose section p-2">
      <ArticleForm onSubmit={PostData} data={loadContent?.postInfo} />
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
