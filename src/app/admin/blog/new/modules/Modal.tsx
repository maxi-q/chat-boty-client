import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Компонент модального окна с типами
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Закрытие окна при клике на затемнённый фон
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full relative">
        {/* Кнопка закрытия модального окна */}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Контент модального окна */}
        {children}
      </div>
    </div>,
    document.body as HTMLElement // Рендерим в отдельный элемент DOM
  );
};

export default Modal;
