import { SOURCE } from '@/constants/static'
import { GetPostInfo, PostPostInfo } from './ArticlesTypes'
import { cookies } from 'next/headers'

const API_URL = SOURCE.url

export async function postArticle(content: PostPostInfo): Promise<GetPostInfo | undefined> {
  try {
    const token = cookies().get('token')?.value.toString()


    const response = await fetch(`${API_URL}posts/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || ''
      },
      body: JSON.stringify(content),
    })

    const data = await response.json()

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }
    
    return data
  } catch (error) {
    console.log(error, 'Error: getArticles')
    return
  }
}

export const dynamic = 'force-dynamic'