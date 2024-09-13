import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ImageSelectorModal from './ImageSelectorModal';
import { IImage, IImages } from '@/api/static/types';

// Создаём один контейнер для модального окна и храним корневой элемент
let modalContainer: HTMLElement | null = null;
let root: ReactDOM.Root | null = null;

if (typeof window !== 'undefined') {
  // Проверяем, есть ли контейнер в DOM, если нет — создаём его
  modalContainer = document.getElementById('modal-root') || document.createElement('div');
  modalContainer.id = 'modal-root';
  if (!document.getElementById('modal-root')) {
    document.body.appendChild(modalContainer);
  }

  // Инициализируем root только один раз
  if (!root && modalContainer) {
    root = ReactDOM.createRoot(modalContainer);
  }
}

// Функция для открытия модального окна и возврата Promise с результатом
const openImageSelector = (): Promise<IImage | null> => {
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
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      );
    };

    // Используем root.render для рендеринга компонента
    if (root) {
      root.render(<ImageSelectorComponent />);
    }
  });
};

export default openImageSelector;
