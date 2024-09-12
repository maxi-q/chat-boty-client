import { IImage, IImages } from '@/api/static/Images'
import { SOURCE } from '@/constants/static'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Modal from './Modal' // Модальное окно

interface ImageSelectorProps {
  images?: IImages // Массив изображений
  isOpen: boolean
  onClose: () => void
}

const ImageSelectorModal: React.FC<ImageSelectorProps> = ({ images, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null)

  // Функция для выбора изображения
  const handleImageSelect = (image: IImage) => {
    setSelectedImage(image)
  }

  useEffect(() => {
    console.log(images)
  }, [images])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full h-full" >
        <div className="grid grid-cols-5 gap-4 w-4/5 overflow-y-auto" style={{ maxHeight: '400px', gridTemplateColumns: 'repeat(auto-fill, 200px)' }}>
          {images?.data?.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer flex items-center justify-center border border-gray-300"
              style={{ width: '200px', height: '150px' }} // Размеры миниатюр
              onClick={() => handleImageSelect(image)}
            >
              <Image
                width={500}
                height={500}
                loading="lazy"
                src={`${SOURCE.static_url}${image.slug}?field=slug`}
                alt={`Фото ${image.title}`}
                className={`my-0 select-none relative object-contain block w-full h-full`}
                style={{ backgroundColor: 'var(--color-additional-2)' }}
              />
            </div>
          ))}
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
                <strong>Width:</strong> {selectedImage.size}px
              </p>
              <p>
                <strong>Height:</strong> {selectedImage.size}px
              </p>
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
