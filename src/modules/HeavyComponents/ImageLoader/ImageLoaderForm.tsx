import { createFileClient, uploadFileClient } from '@/api/static/Routes'
import { FormEvent, useState } from 'react'
import { createFileData } from './clientHelper'

const ImageLoaderForm = ({ loadFile }: { loadFile: () => void }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [slug, setSlug] = useState('')

  const [file, setFile] = useState<File | null>(null)

  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    } else {
      setFile(null)
    }
  }

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (uploading) return

    setUploading(true)
    const status = await loadImage()
    setUploading(false)

    if (status) {
      alert('успех')
      loadFile()
    }
  }

  const loadImage = async () => {
    const response = await createFileData({title, description, slug})

    if (response instanceof Response) {
      if (response.status == 422) {
        alert('файл с таким slug уже существует')
      } else {
        alert('Что-то пошло не так')
      }
      return
    }

    if (!file) return

    const responseFile = await uploadFileClient({ file: file, id: response.id })

    if (responseFile.status > 400) {
      alert('Что-то пошло не так')
      return
    }
    return true
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
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
            }}
            className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
            placeholder="Slug"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Загрузить изображения</label>
        <input type="file" required accept=".jpg,.jpeg,.png,.webp" onChange={handleFileChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
        <p className="text-sm text-gray-500">Лучше выбирать .webp (.jpg, .jpeg, .png)</p>
      </div>

      <div className="mt-6">
        <button type="submit" className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`} disabled={uploading}>
          {uploading ? 'Загрузка...' : 'Сохранить'}
        </button>
      </div>
    </form>
  )
}

export default ImageLoaderForm
