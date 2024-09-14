export interface PostPostInfo {
  title: string
  short_description: string
  reading_time: number
  content?: string
  preview_file_id?: string
  preview_og_file_id?: string
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
