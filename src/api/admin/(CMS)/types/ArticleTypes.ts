export interface PostInfo {
  title: string
  short_description: string
  reading_time: number
  content?: string
  preview_file_id?: string
  preview_og_file_id?: string
  is_published: boolean
  web_description?: string
  og_description?: string
  web_title?: string
  og_title?: string
  keywords?: string
  views_count: number
}

export interface SimpleArticleType extends Omit<Required<PostInfo>, 'content'> {
  id: string
  slug: string
  created_at: string
  updated_at: string
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

export interface Article extends SimpleArticleType {
  preview_file_id: string
  preview_og_file_id: string
}

export type getArticlesType = {
  data: Array<Article>
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
