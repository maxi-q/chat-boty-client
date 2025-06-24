import { SOURCE } from '@/constants/static'
import { BlogArticleType, GetBlogArticleFileType, getBlogArticlesType, IGetBlogArticleFile, IGetBlogArticleInfo, IGetBlogArticles } from '../admin/(CMS)/blog/ArticlesTypes'


const API_URL = SOURCE.url

export async function getArticles(content: IGetBlogArticles): Promise<getBlogArticlesType | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)
    params.append('hasFullContent', 'True')
    params.append('isPublished', 'True')

    const response = await fetch(`${API_URL}posts?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
      },
      next: { tags: ['articles'] }
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

export async function getBlogArticleFile(content: IGetBlogArticleFile): Promise<GetBlogArticleFileType | undefined> {
  try {
    const response = await fetch(`${API_URL}posts/${content.slug}/content?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
      },
      next: { tags: ['articles'] }
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

export async function getBlogArticleInfo(content: IGetBlogArticleInfo): Promise<BlogArticleType | undefined> {
  try {
    const response = await fetch(`${API_URL}posts/${content.slug}/?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      next: { tags: ['articles'] }
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
