import React, { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import ImageSelectorModal from './ImageSelectorModal';
import { IImage, IImages } from '@/api/static/types'


// Функция для открытия модального окна и возврата Promise с результатом
const openImageSelector = (images: IImages): Promise<IImage | null> => {
  return new Promise((resolve) => {
    const ImageSelectorComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      const handleConfirm = (selectedImage: IImage | null) => {
        resolve(selectedImage);
        setIsModalOpen(false);
      };

      const handleClose = () => {
        resolve(null);
        setIsModalOpen(false);
      };

      return (
        <ImageSelectorModal
          images={images}
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      );
    };

    // Рендерим компонент модального окна в контейнер modal-root
    createPortal(
      <ImageSelectorComponent />,
      document.body as HTMLElement // Рендерим в отдельный элемент DOM
    );
  });
};

export default openImageSelector;
