'use client'

import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'
import { useEffect, useRef, useState } from 'react'
import { MDXPage } from './components/MDXPage'
import collection from './components/ui/collection'

const customCarouselAction = (editor: EasyMDE) => {

  const url = prompt('Введите URL изображения');

  if (url) {
    const cm = editor.codemirror;
    const output = `<Carousel images={["${url}"]} width={400} height={400} />`;
    
    cm.replaceSelection(output);
  }
}

const MarkdownEditor = () => {
  // Используем useState для хранения содержимого редактора
  const [content, setContent] = useState<string>('')

  // Используем useRef для хранения экземпляра EasyMDE
  const easyMDERef = useRef<EasyMDE | null>(null)

  useEffect(() => {
    // Инициализация EasyMDE
    const easyMDE = new EasyMDE({
      element: document.getElementById('markdown-editor') as HTMLTextAreaElement,
      initialValue: content, // Устанавливаем начальное значение из состояния
      spellChecker: false,
      toolbar: [
        'heading-bigger',
        'heading',
        '|',
        'bold',
        'italic',
        // 'strikethrough',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'link',
        {
          name: 'custom-image',
          action: function customImageAction(editor) {

            const url = prompt('Введите URL изображения');

            if (url) {
              const cm = editor.codemirror;
              const output = `<Image image="${url}" width={400} height={400} />`;
              cm.replaceSelection(output);
            }
          },
          className: 'fa fa-image', // Используем стандартную иконку Font Awesome для изображений
          title: 'Вставить изображение',
        },
        'horizontal-rule',
        '|',
        'guide',
        'undo',
        'redo',
        {
          name: 'carousel',
          action: customCarouselAction, // Используем кастомное действие для выделения жирным
          className: 'fa',
          title: 'Галерея изображений',
          icon: collection,
        },
      ],
      // Вызываем функцию при каждом изменении содержимого
      autosave: {
        enabled: true, // Автосохранение
        uniqueId: 'markdown-editor',
      },
      shortcuts: {
        'custom-image': 'Ctrl-I', 
        'carousel': 'Ctrl-C'
      },
    })

    // Сохраняем экземпляр редактора в рефе
    easyMDERef.current = easyMDE

    // Подписываемся на изменение содержимого редактора
    easyMDE.codemirror.on('change', () => {
      setContent(easyMDE.value()) // Обновляем состояние при изменении
    })

    // Очистка при размонтировании
    return () => {
      easyMDE.toTextArea()
      easyMDERef.current = null
    }
  }, [])

  // Обработка сохранения (например, отправка на сервер)
  const handleSave = () => {
    console.log('Содержимое редактора:', content)
    // Здесь можно отправить content на сервер или сохранить в локальном хранилище
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
    </div>
  )
}

export default MarkdownEditor
