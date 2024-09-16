export interface IGetCases {
  page: number
  size: number
  has_file?: boolean
}
export type SimpleCaseType = {
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

export interface CaseType extends SimpleCaseType {
  preview_file_id: string
  preview_og_file_id: string
}

export type getCasesType = {
  data: Array<CaseType>
  page: number
  size: number
  total_items: number
  total_pages: number
}

export interface IGetCaseFile {
  slug: string
}
export type GetCaseFileType = string

export interface IGetCaseInfo {
  slug: string
}
