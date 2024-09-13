export interface IImage {
  created_at: string
  description: string
  id: string
  mime_type: string
  size: number
  slug: string
  title: string
  updated_at: string
}

export interface IImages {
  data: IImage[]
  page: number
  size: number
  total_items: number
  total_pages: number
}

export interface IGetImages {
  page: number
  size: number
  has_file?: boolean
}
