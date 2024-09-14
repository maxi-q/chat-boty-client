import { getImagesClient } from '@/api/static/Routes'
import { IImage, IImages } from '@/api/static/types'
import { SOURCE } from '@/constants/static'
import React, { useEffect, useState } from 'react'
import ImageComponent from './Image'
import Modal from './Modal' // Модальное окно
import { getImageDimensions } from './helper'

interface ImageSelectorProps {
  onConfirm: (selectedImage: IImage | null) => void
  isOpen: boolean
  onClose: () => void
}

const ImageSelectorModal: React.FC<ImageSelectorProps> = ({ isOpen, onClose, onConfirm }) => {
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null)
  const [images, setImages] = useState<IImages>()

  useEffect(() => {
    const f = async () => {
      const i = await getImagesClient({ page: 1, size: 20 })
      setImages(i)
    }
    f()
  }, [])

  const handleImageSelect = (image: IImage) => {
    setSelectedImage({ ...image })

    getImageDimensions(`${SOURCE.static_url}${image.slug}?field=slug`).then((size) => {
      setSelectedImage((p) => {
        if (!p) return null

        return { ...p, width: size.width, height: size.height }
      })
    })
    // тут добавлю
  }

  const handleConfirm = () => {
    onConfirm(selectedImage)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full h-full">
        <div className="grid grid-cols-5 gap-4 w-4/5 overflow-y-auto" style={{ maxHeight: '400px', gridTemplateColumns: 'repeat(auto-fill, 200px)' }}>
          {images ? (
            images?.data?.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-center border border-gray-300"
                style={{ width: '200px', height: '150px' }}
                onClick={() => handleImageSelect(image)}
              >
                <ImageComponent image={image} />
              </div>
            ))
          ) : (
            <h3>Секунду...</h3>
          )}
        </div>
        <div className="w-1/5 pl-4">
          {selectedImage ? (
            <div>
              <h2 className="text-xl font-bold mb-2">Информация о выбранном изображении</h2>
              <p>
                <strong>Slug:</strong> {selectedImage.slug}
              </p>
              <p>
                <strong>Title:</strong> {selectedImage.title}
              </p>
              <p>
                <strong>Width:</strong> {selectedImage?.width || '...'} px
              </p>
              <p>
                <strong>Height:</strong> {selectedImage?.height || '...'} px
              </p>
              <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
                Выбрать
              </button>
            </div>
          ) : (
            <p>Выберите изображение для отображения информации.</p>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default ImageSelectorModal
