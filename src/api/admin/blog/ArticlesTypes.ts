export interface PostInfoResponse {
  title: string
  short_description: string
  reading_time: number
  content?: string
  preview_file_id?: string
  preview_og_file_id?: string
  is_published: boolean
}

export interface GetPostInfo {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  short_description: string
  reading_time: number
}

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
  is_published: boolean
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
