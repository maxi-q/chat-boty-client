export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Загружаем только метаданные изображения
    img.src = url;
    img.onload = () => {
      resolve({
        width: img.naturalWidth, // Используем naturalWidth для получения размеров без полной загрузки
        height: img.naturalHeight,
      });
    };

    // В случае ошибки загрузки изображения
    img.onerror = (error) => {
      reject(error);
    };
  });
};
