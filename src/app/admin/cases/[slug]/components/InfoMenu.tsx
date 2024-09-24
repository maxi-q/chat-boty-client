import { FormEvent, useEffect, useState } from 'react'

// Предполагаем, что эта функция открывает модальное окно для выбора изображения
import { PostCaseInfo } from '@/api/admin/cases/CasesTypes'
import openImageSelector from '@/modules/HeavyComponents/ImageSelector/ImageSelector'

interface ImageData {
  id: string
  slug: string
  title: string
}

const CaseForm = ({ onSubmit, data }: { onSubmit: (content: PostCaseInfo) => void; data?: PostCaseInfo }) => {
  const [title, setTitle] = useState(data?.title || '')
  const [description, setDescription] = useState(data?.short_description || '')
  const [readingTime, setReadingTime] = useState<number | ''>(data?.reading_time || '')

  useEffect(() => {
    setTitle(data?.title || '')
    setDescription(data?.short_description || '')
    setReadingTime(data?.reading_time || '')
  }, [data])

  const [image1, setImage1] = useState<ImageData | null>(null)
  const [image2, setImage2] = useState<ImageData | null>(null)

  const handleSelectImage1 = async () => {
    const selectedImage = await openImageSelector()
    if (selectedImage) {
      setImage1(selectedImage)
    }
  }

  const handleSelectImage2 = async () => {
    const selectedImage = await openImageSelector()
    if (selectedImage) {
      setImage2(selectedImage)
    }
  }

  const handleSave = () => {
    onSubmit({
      title: title,
      short_description: description,
      reading_time: readingTime || 0,
      preview_file_id: image1?.id,
      preview_og_file_id: image2?.id,
    })
  }

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSave()
  }

  return (
    <form onSubmit={onFormSubmit} className="p-6 bg-white rounded shadow-lg max-w-full mx-auto">
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
              setReadingTime(value >= 0 ? value : '')
            }}
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
          {image1 && <p className="mt-2 text-sm text-gray-600">Выбранное изображение: {image1.title}</p>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Второе изображение</label>
          <button onClick={handleSelectImage2} type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-1">
            Загрузить OpenGraph превью
          </button>
          {image2 && <p className="mt-2 text-sm text-gray-600">Выбранное изображение: {image2.title}</p>}
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

export default CaseForm
