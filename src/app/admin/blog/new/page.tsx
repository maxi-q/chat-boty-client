'use client'

import { getImagesCLIENT } from '@/api/static/Routes'
import { IImages } from '@/api/static/types'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

import { useEffect, useRef, useState } from 'react'
import { settings } from './helpers'
import { AdminMDXPage } from './modules/AdminMDXPage'

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

    easyMDE.codemirror.on('change', () => {
      setContent(easyMDE.value())
    })

    return () => {
      easyMDE.toTextArea()
      easyMDERef.current = null
    }
  }, [])


  const handleSave = () => {
    console.log('Содержимое редактора:', content)
  }

  return (
    <div className="prose">
      <div className="flex w-screen">
        <div className="w-1/2 p-4">
          <textarea id="markdown-editor" className="w-full h-full border border-gray-300 rounded p-2" />
        </div>

        <div className="w-1/2 p-4 border-l border-gray-300 pt-16">
          <AdminMDXPage content={content} />
        </div>
      </div>

      {/* Кнопка сохранения */}
      <button onClick={handleSave} className=" px-4 py-2 bg-blue-500 text-white rounded">
        Сохранить
      </button>
    </div>
  )
}

export default MarkdownEditor
