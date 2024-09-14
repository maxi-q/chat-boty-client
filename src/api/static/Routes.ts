import { IGetImages, IImages } from './types'

export async function getImagesClient(content: IGetImages): Promise<IImages | undefined> {
  try {
    const params = new URLSearchParams()

    const response = await fetch(`/client_api/static?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Cache-Control': 'max-age=300',
      },
      next: { tags: ['images'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const { images } = await response.json()
    return images
  } catch (error) {
    console.log(error, 'Error: ImagesClient')
    return
  }
}
