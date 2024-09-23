import { SOURCE } from '@/constants/static'
import { CaseType, GetCaseFileType, getCasesType, IGetCaseFile, IGetCaseInfo, IGetCases } from './casesTypes'

const API_URL = SOURCE.url

export async function getCases(content: IGetCases): Promise<getCasesType | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)
    params.append('hasFullContent', 'True')

    const response = await fetch(`${API_URL}cases?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600',
      },
      next: { tags: ['cases'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: getCases')
    return
  }
}

export async function getCaseFile(content: IGetCaseFile): Promise<GetCaseFileType | undefined> {
  try {
    const response = await fetch(`${API_URL}cases/${content.slug}/content?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300',
      },
      next: { tags: ['cases'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.text()
    return data
  } catch (error) {
    console.log(error, 'Error: getCaseFile')
    return
  }
}

export async function getCaseInfo(content: IGetCaseInfo): Promise<CaseType | undefined> {
  try {
    const response = await fetch(`${API_URL}cases/${content.slug}/?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      next: { tags: ['cases'] },
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: getCaseInfo')
    return
  }
}
