import { SOURCE } from '@/constants/static'

const API_URL = SOURCE.client_url

export interface IImage {
  created_at: string
  description: string
  id: string
  mime_type: string
  size: number
  slug: string
  title: string
  updated_at: string
}
export interface IImages {
  data: IImage[]
  page: number
  size: number
  total_items: number
  total_pages: number
}

export interface IGetImages {
  page: number
  size: number
  has_file?: boolean
}
export async function getImagesCLIENT(content: IGetImages): Promise<IImages | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)

    const response = await fetch(`/client_api/static?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300'
      },
      next: { tags: ['images'] },
    })
    console.log(response.ok)
    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data.images
  } catch (error) {
    console.log(error, 'Error: ImagesClient')
    return
  }
}
