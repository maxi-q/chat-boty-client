export interface IGetCases {
  page: number
  size: number
  has_file?: boolean
}
export type CaseType = {
  id: string
  created_at: string
  updated_at: string
  title: string
  short_description: string
  reading_time: number
  slug: string
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
