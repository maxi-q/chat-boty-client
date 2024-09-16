export interface IImage {
  created_at: string
  description: string
  id: string
  mime_type: string
  size: number
  slug: string
  title: string
  updated_at: string

  width?: number
  height?: number
}

export interface IImages {
  data: IImage[]
  page: number
  size: number
  total_items: number
  total_pages: number
}

export interface IImagesResponse {
  images: IImages
}

export interface IGetImages {
  page: number
  size: number
  has_file?: boolean
}

export interface ICreateFile {
  slug?: string
  title: string
  description: string
}

export interface IFileInfo {
  id: string
  slug: string
  title: string
  description: string
  size: number
  mime_type: string
  created_at: string
  updated_at: string
}

export interface IUploadFile {
  file: File
  id: string
}

export interface IDeleteFileInfo {
  id: string
}
