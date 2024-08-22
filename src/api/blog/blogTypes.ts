export interface IGetArticles {
  page: number
  size: number
  has_file?: boolean
}
export type ArticleType = {
  id: string
  created_at: string
  updated_at: string
  title: string
  short_description: string
  reading_time: number
  slug: string
}
export type getArticlesType = {
  data: Array<ArticleType>
  page: number
  size: number
  total_items: number
  total_pages: number
}

export interface IGetArticleFile {
  slug: string
}
export type GetArticleFileType = string

export interface IGetArticleInfo {
  slug: string
}
