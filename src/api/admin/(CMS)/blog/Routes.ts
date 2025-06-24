import { SOURCE } from '@/constants/static'
import { GetBlogArticleInfo, PostBlogArticleInfo } from './ArticlesTypes'
const API_URL = SOURCE.url

export async function postArticleClient(content: PostBlogArticleInfo): Promise<GetBlogArticleInfo | undefined> {
  try {
    const response = await fetch(`/admin_api/posts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: postArticleClient')
    return
  }
}

export async function patchArticleClient(slug: string, content: PostBlogArticleInfo): Promise<GetBlogArticleInfo | undefined> {
  try {
    const response = await fetch(`/admin_api/posts/${slug}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: patchArticleClient')
    return
  }
}
