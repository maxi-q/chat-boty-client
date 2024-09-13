import { SOURCE } from '@/constants/static'
import { cookies } from 'next/headers'
import { IGetImages, IImages } from './types'

const API_URL = SOURCE.static_url

export async function getImages(content: IGetImages): Promise<IImages | undefined> {
  try {
    const params = new URLSearchParams()

    const token = cookies().get('token')?.value.toString()
    const response = await fetch(`${API_URL}?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
        Authorization: token || '',
      },
      next: { tags: ['images'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: getArticles')
    return
  }
}
