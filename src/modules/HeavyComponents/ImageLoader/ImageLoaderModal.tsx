import { IImage } from '@/api/static/types'
import React from 'react'
import ImageLoaderForm from './ImageLoaderForm'
import Modal from '@/modules/main/Modal'

interface ImageLoaderProps {
  onConfirm: (selectedImage: IImage | null) => void
  isOpen: boolean
  onClose: () => void
}

const ImageLoaderModal: React.FC<ImageLoaderProps> = ({ isOpen, onClose, onConfirm }) => {
  const loadFile = () => {}

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <ImageLoaderForm loadFile={loadFile}/>
      </div>
    </Modal>
  )
}

export default ImageLoaderModal
