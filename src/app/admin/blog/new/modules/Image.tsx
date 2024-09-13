import { IImage } from '@/api/static/types'
import { SOURCE } from '@/constants/static'
import React, { useState } from 'react'

interface ImageComponentProps {
  image: IImage
}

const ImageComponent: React.FC<ImageComponentProps> = ({ image }) => {
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <>
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${SOURCE.static_url}${image.slug}?field=slug`}
          alt={`Фото ${image.title}`}
          className="my-0 select-none relative object-contain block w-full h-full"
          style={{ backgroundColor: 'var(--color-additional-2)' }}
          onError={handleImageError}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full" style={{ backgroundColor: 'var(--color-additional-2)' }}>
          <p className="text-gray-500">Не удалось загрузить изображение</p>
        </div>
      )}
    </>
  )
}

export default ImageComponent
