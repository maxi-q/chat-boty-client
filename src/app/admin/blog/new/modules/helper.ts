export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url

    // Когда изображение загружено, получаем его размеры
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }

    // В случае ошибки загрузки изображения
    img.onerror = (error) => {
      reject(error)
    }
  })
}