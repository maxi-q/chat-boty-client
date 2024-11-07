import { FormEvent, useEffect, useState } from 'react'

// Предполагаем, что эта функция открывает модальное окно для выбора изображения
import { PostInfo } from '@/api/admin/blog/ArticlesTypes'
import openImageSelector from '@/modules/HeavyComponents/ImageSelector/ImageSelector'

interface ImageData {
  id: string
  slug: string
  title: string
}

const ArticleForm = ({ onSubmit, data }: { onSubmit: (content: PostInfo) => void; data?: PostInfo }) => {
  const [title, setTitle] = useState(data?.title || '')
  const [description, setDescription] = useState(data?.short_description || '')
  const [readingTime, setReadingTime] = useState<number>(data?.reading_time || 1)
  const [isPublished, setIsPublished] = useState(data?.is_published || false)

  const [webDescription, setWebDescription] = useState(data?.web_description || '')
  const [ogDescription, setOgDescription] = useState(data?.og_description || '')
  const [webTitle, setWebTitle] = useState(data?.web_title || '')
  const [ogTitle, setOgTitle] = useState(data?.og_title || '')
  const [keywords, setKeywords] = useState(data?.keywords || '')
  const [viewsCount, setViewsCount] = useState<number>(data?.views_count || 0)

  useEffect(() => {
    setTitle(data?.title || '')
    setDescription(data?.short_description || '')
    setReadingTime(data?.reading_time || 1)
    setWebDescription(data?.web_description || '')
    setOgDescription(data?.og_description || '')
    setWebTitle(data?.web_title || '')
    setOgTitle(data?.og_title || '')
    setKeywords(data?.keywords || '')
    setViewsCount(data?.views_count || 0)
  }, [data])

  const [preview, setPreview] = useState<ImageData | null>(null)
  const [ogPreview, setOgPreview] = useState<ImageData | null>(null)

  const handleSelectImage1 = async () => {
    const selectedImage = await openImageSelector()
    if (selectedImage) {
      setPreview(selectedImage)
    }
  }

  const handleSelectImage2 = async () => {
    const selectedImage = await openImageSelector()
    if (selectedImage) {
      setOgPreview(selectedImage)
    }
  }

  const handleSave = () => {
    if (isPublished) {
      if(title || description) {
        alert('Заполните основные данные')
        return
      }
      if (!(preview?.id || data?.preview_file_id) || !(ogPreview?.id || data?.preview_og_file_id)) {
        alert('Выберете превью')
        return
      }
      if(webDescription || ogDescription || webTitle || ogTitle || keywords ) {
        alert('Заполните метаданные')
        return
      }
    }

    onSubmit({
      title: title,
      short_description: description,
      reading_time: readingTime || 1,
      preview_file_id: preview?.id || data?.preview_file_id,
      preview_og_file_id: ogPreview?.id || data?.preview_og_file_id,
      is_published: isPublished,
      web_description: webDescription,
      og_description: ogDescription,
      web_title: webTitle,
      og_title: ogTitle,
      keywords: keywords,
      views_count: viewsCount || 0,
    })
  }

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSave()
  }

  return (
    <form onSubmit={onFormSubmit} className="p-6 bg-white rounded shadow-lg max-w-full mx-auto">
      {/* Existing fields section */}
      <div className="border-b pb-4 mb-4">
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Заголовок"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Описание"
            />
          </div>

          <div className="w-32">
            <input
              type="number"
              id="readingTime"
              value={readingTime}
              onChange={(e) => {
                const value = parseInt(e.target.value)
                setReadingTime(value > 0 ? value : 1)
              }}
              required
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Минуты"
              min="0"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Первое изображение</label>
            <button onClick={handleSelectImage1} type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-1">
              Загрузить новое превью
            </button>
            {preview ? <p className="mt-2 text-sm text-gray-600">Выбранное изображение: {preview.title}</p> : data?.preview_file_id ? <ImageLink id={data.preview_file_id} /> : ''}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Второе изображение</label>
            <button onClick={handleSelectImage2} type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-1">
              Загрузить OpenGraph превью
            </button>
            {ogPreview ? (
              <p className="mt-2 text-sm text-gray-600">Выбранное изображение: {ogPreview.title}</p>
            ) : data?.preview_og_file_id ? (
              <ImageLink id={data.preview_og_file_id} />
            ) : (
              ''
            )}
          </div>
        </div>

        <div>
          <label className="flex items-center">
            <input type="checkbox" id="isPublished" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} className="mr-2" />
            <span className="text-sm font-medium text-gray-700">Опубликовать</span>
          </label>
        </div>
      </div>

      {/* New fields section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Дополнительные метаданные</h3>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              id="webTitle"
              value={webTitle}
              onChange={(e) => setWebTitle(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Web Title"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              id="ogTitle"
              value={ogTitle}
              onChange={(e) => setOgTitle(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="OG Title"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              id="webDescription"
              value={webDescription}
              onChange={(e) => setWebDescription(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Web Description"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              id="ogDescription"
              value={ogDescription}
              onChange={(e) => setOgDescription(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="OG Description"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Keywords"
            />
          </div>

          <div className="w-32">
            <input
              type="number"
              id="viewsCount"
              value={viewsCount}
              onChange={(e) => {
                const value = parseInt(e.target.value)
                setViewsCount(value >= 0 ? value : 0)
              }}
              className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              placeholder="Количество просмотров"
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Сохранить
        </button>
      </div>
    </form>
  )
}

const ImageLink = ({ id }: { id: string }) => {
  return (
    <a href={`https://static.chat-boty.com/${id}?field=id`} target="_blank" rel="noopener noreferrer">
      Загружено
    </a>
  )
}

export default ArticleForm
