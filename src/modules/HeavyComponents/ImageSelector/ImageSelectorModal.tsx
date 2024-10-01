import React, { useEffect, useState } from 'react'

import { deleteFileInfoClient } from '@/api/static/Routes'
import { IImage, IImages } from '@/api/static/types'

import { formatHumanReadableDateTime, ServerError } from '@/constants/helpers'
import { SOURCE } from '@/constants/static'

import openImageLoader from '@/modules/HeavyComponents/ImageLoader/ImageLoader'
import Modal from '@/modules/main/Modal' // Модальное окно

import { getPagesNumbs } from '@/constants/helpers'
import PostsNext from '@/constants/svg/PostsNext'
import PostsPrev from '@/constants/svg/PostsPrev'
import { getImageDimensions } from './helper'
import ImageComponent from './Image'

import { getData } from './serverHelper'
import styles from './style.module.css'

interface ImageSelectorProps {
  onConfirm: (selectedImage: IImage | null) => void
  isOpen: boolean
  onClose: () => void
}

const ImageSelectorModal: React.FC<ImageSelectorProps> = ({ isOpen, onClose, onConfirm }) => {
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null)
  const [images, setImages] = useState<IImages>()
  const [page, setPage] = useState(1)

  const updateImages = async () => {
    setImages(undefined)
    const data = await getData(page)
    if (data instanceof ServerError) {
      return
    }
    setImages(data)
  }

  useEffect(() => {
    updateImages()
  }, [page])

  const handleImageSelect = (image: IImage) => {
    setSelectedImage({ ...image })
    if (!image) return

    getImageDimensions(`${SOURCE.static_url}${image.slug}?field=slug`).then((size) => {
      setSelectedImage((p) => {
        if (!p) return null

        return { ...p, width: size.width, height: size.height }
      })
    })
  }

  const handleConfirm = () => {
    onConfirm(selectedImage)
    onClose()
  }

  const loadFile = async () => {
    await openImageLoader()
  }

  const pageNumbs = getPagesNumbs(page, images?.total_pages || 1)

  const deleteImage = async (id: string) => {
    const i = confirm('Вы действительно хотите удалить этот файл?')
    if (!i) return
    const b = confirm('Это действие безвозвратно')
    if (!b) return

    const response = await deleteFileInfoClient({ id })

    if (response.status == 404) {
      alert(await response.text())
      return
    }

    if (response.status == 200) {
      updateImages()
      setSelectedImage(null)
      alert('Успех')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full h-full">
        <div className="w-4/5">
          <div className="mb-3 flex gap-3">
            <button onClick={loadFile} className="bg-blue-500 text-white px-4 py-2 rounded">
              Загрузить фото
            </button>
            {images && (
              <div className="flex">
                <DefaultButton onClick={() => setPage((p) => p - 1)} direction="left" />
                {!pageNumbs.includes(1) && <NumberButton number={1} onClick={() => setPage(1)} />}
                {!pageNumbs.includes(1) && !pageNumbs.includes(2) && <span className="text-lg pt-2">...</span>}

                {pageNumbs.map((el, i) => (
                  <NumberButton
                    onClick={() => {
                      setPage(el)
                    }}
                    key={i}
                    number={el}
                    disable={el == page}
                  />
                ))}

                {!pageNumbs.includes(images?.total_pages || 1) && !pageNumbs.includes(images?.total_pages || 1 - 1) && <span className="text-lg pt-2">...</span>}
                {!pageNumbs.includes(images?.total_pages || 1) && <NumberButton onClick={() => setPage(images?.total_pages || 1)} number={images?.total_pages || 1} />}
                <DefaultButton onClick={() => setPage((p) => p + 1)} direction="right" />
              </div>
            )}
          </div>
          <Images images={images} handleImageSelect={handleImageSelect} deleteImage={deleteImage} />
        </div>
        <div className="w-1/5 pl-4">
          {selectedImage ? <SelectedImageInfo selectedImage={selectedImage} handleConfirm={handleConfirm} /> : <p>Выберите изображение для отображения информации.</p>}
        </div>
      </div>
    </Modal>
  )
}

const Images = ({
  images,
  handleImageSelect,
  deleteImage,
}: {
  images: IImages | undefined
  handleImageSelect: (image: IImage) => void
  deleteImage: (id: string) => Promise<void>
}) => (
  <div className="grid grid-cols-5 gap-4 overflow-y-auto" style={{ maxHeight: '400px', gridTemplateColumns: 'repeat(auto-fill, 200px)' }}>
    {images ? (
      images?.data?.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer relative flex items-center justify-center border border-gray-300 mb-3"
          style={{ width: '200px', height: '150px' }}
          onClick={() => handleImageSelect(image)}
        >
          <ImageComponent image={image} />

          <p className="absolute bottom-0 line-clamp-1 translate-y-5">{image.title} -</p>

          <button
            className="absolute top-0 right-0 mt-1 mr-1 text-gray-500 hover:text-gray-800"
            onClick={(e) => {
              e.preventDefault()
              deleteImage(image.id)
            }}
          >
            &times;
          </button>
        </div>
      ))
    ) : (
      <h3>Секунду...</h3>
    )}
  </div>
)

const SelectedImageInfo = ({ selectedImage, handleConfirm }: { selectedImage: IImage; handleConfirm: () => void }) => (
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
    <p>
      <strong>Дата создания:</strong> {formatHumanReadableDateTime(selectedImage?.created_at) || '...'} px
    </p>
    <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
      Выбрать
    </button>
  </div>
)

const NumberButton = ({ number, disable, onClick }: { number: number; disable?: boolean; onClick: () => void }) => (
  <button className={`flex text-lg font-medium items-center justify-center cursor-pointer no-underline w-[40px] h-[40px] ${disable && styles.selectPage}`} onClick={onClick}>
    {number}
  </button>
)
const DefaultButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
  <button className={`p-2 cursor-pointer ${direction === 'left' ? 'ml-2' : 'mr-2'}`} onClick={onClick}>
    {direction === 'left' ? <PostsPrev /> : <PostsNext />}
  </button>
)

export default ImageSelectorModal
