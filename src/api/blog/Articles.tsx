import { SOURCE } from '@/constants/static'
import { ArticleType, GetArticleFileType, getArticlesType, IGetArticleFile, IGetArticleInfo, IGetArticles } from './blogHelper'

const API_URL = SOURCE.url

export async function getArticles(content: IGetArticles): Promise<getArticlesType | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)
    params.append('hasFullContent', 'True')

    const response = await fetch(`${API_URL}posts?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
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

export async function getArticleFile(content: IGetArticleFile): Promise<GetArticleFileType | undefined> {
  try {
    const response = await fetch(`${API_URL}posts/${content.slug}/files/content`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
      },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.text()
    return data
  } catch (error) {
    console.log(error, 'Error: getArticleFile')
    return
  }
}

export async function getArticleInfo(content: IGetArticleInfo): Promise<ArticleType | undefined> {
  try {
    const response = await fetch(`${API_URL}posts/${content.slug}/?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: getArticleInfo')
    return
  }
}
