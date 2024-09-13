'use client'

import { getImagesCLIENT } from '@/api/static/Routes'
import { IImages } from '@/api/static/types'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

import { useEffect, useRef, useState } from 'react'
import { MDXPage } from './components/MDXPage'
import { settings } from './helpers'
import openImageSelector from './modules/ImageSelector'

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

  const [images, setImages] = useState<IImages>()

  useEffect(() => {
    const f = async () => {
      const i = await getImagesCLIENT({ page: 1, size: 12 })
      setImages(i)
    }
    f()
  }, [])

  const handleSelectImage = async () => {
    if (!images) {
      alert('произошла ошибка, попробуйте еще раз')
      return null
    }

    const selectedImage = await openImageSelector(images)

    if (selectedImage) {
      console.log('Выбранное изображение:', selectedImage)
    } else {
      console.log('Изображение не выбрано')
    }
  }

  return (
    <div className="prose">
      <div className="flex w-screen">
        <div className="w-1/2 p-4">
          <textarea id="markdown-editor" className="w-full h-full border border-gray-300 rounded p-2" />
        </div>

        <div className="w-1/2 p-4 border-l border-gray-300 pt-16">
          <MDXPage content={content} />
        </div>
      </div>

      {/* Кнопка сохранения */}
      <button onClick={handleSave} className=" px-4 py-2 bg-blue-500 text-white rounded">
        Сохранить
      </button>
      <button onClick={handleSelectImage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Выбрать изображение
      </button>
    </div>
  )
}

export default MarkdownEditor
