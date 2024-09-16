export interface IGetArticles {
  page: number
  size: number
  has_file?: boolean
}

export type SimpleArticleType = {
  id: string
  slug: string
  title: string
  short_description: string
  reading_time: number
  preview_file_id?: string
  preview_og_file_id?: string
  created_at: string
  updated_at: string
}

export interface ArticleType extends SimpleArticleType {
  preview_file_id: string
  preview_og_file_id: string
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
