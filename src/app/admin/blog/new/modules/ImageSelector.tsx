import { IImage } from '@/api/static/types'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ImageSelectorModal from './ImageSelectorModal'

let modalContainer: HTMLElement | null = null
let root: ReactDOM.Root | null = null

if (typeof window !== 'undefined') {
  modalContainer = document.getElementById('modal-root') || document.createElement('div')
  modalContainer.id = 'modal-root'
  if (!document.getElementById('modal-root')) {
    document.body.appendChild(modalContainer)
  }

  if (!root && modalContainer) {
    root = ReactDOM.createRoot(modalContainer)
  }
}

const openImageSelector = (): Promise<IImage | null> => {
  return new Promise((resolve) => {
    const ImageSelectorComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true)

      const handleConfirm = (selectedImage: IImage | null) => {
        resolve(selectedImage)
        setIsModalOpen(false)
      }

      const handleClose = () => {
        resolve(null)
        setIsModalOpen(false)
      }

      return <ImageSelectorModal isOpen={isModalOpen} onConfirm={handleConfirm} onClose={handleClose} />
    }

    if (root) {
      root.render(<ImageSelectorComponent />)
    }
  })
}

export default openImageSelector
