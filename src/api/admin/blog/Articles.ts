import { SOURCE } from '@/constants/static'
import { cookies } from 'next/headers'
import { getArticlesType, GetPostInfo, IGetArticles, PostInfoResponse } from './ArticlesTypes'

const API_URL = SOURCE.url

export async function postArticle(content: PostInfoResponse): Promise<GetPostInfo | undefined> {
  try {
    const token = cookies().get('token')?.value.toString()

    const response = await fetch(`${API_URL}posts/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || '',
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
    console.log(error, 'Error: postArticle')
    return
  }
}

export async function patchArticle(slug: string, content: PostInfoResponse): Promise<GetPostInfo | undefined> {
  try {
    const token = cookies().get('token')?.value.toString()

    const response = await fetch(`${API_URL}posts/${slug}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || '',
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
    console.log(error, 'Error: patchArticle')
    return
  }
}

export async function getAllArticles(content: IGetArticles): Promise<getArticlesType | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)

    const response = await fetch(`${API_URL}posts?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
      },
      next: { tags: ['articles'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: getAllArticles')
    return
  }
}

export const dynamic = 'force-dynamic'
