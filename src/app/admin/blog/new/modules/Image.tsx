import { IImage } from '@/api/static/types'
import { SOURCE } from '@/constants/static'
import Image from 'next/image' // Предположим, что ты используешь next/image для оптимизации изображений
import React, { useState } from 'react'

interface ImageComponentProps {
  image: IImage
}

const ImageComponent: React.FC<ImageComponentProps> = ({ image }) => {
  const [hasError, setHasError] = useState(false)

  // Обработчик ошибки загрузки изображения
  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <>
      {!hasError ? (
        <Image
          width={500}
          height={500}
          loading="lazy"
          src={`${SOURCE.static_url}${image.slug}?field=slug`}
          alt={`Фото ${image.title}`}
          className={`my-0 select-none relative object-contain block w-full h-full`}
          style={{ backgroundColor: 'var(--color-additional-2)' }}
          onError={handleImageError} // Обработчик ошибки
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full" style={{ backgroundColor: 'var(--color-additional-2)' }}>
          {/* Это будет отображаться при ошибке */}
          <p className="text-gray-500">Не удалось загрузить изображение</p>
        </div>
      )}
    </>
  )
}

export default ImageComponent
