import { SOURCE } from '@/constants/static'
import { cookies } from 'next/headers'
import { CaseType, GetCaseFileType, GetCaseInfo, getCasesType, IGetCaseFile, IGetCaseInfo, IGetCases, PostCaseInfo } from './CasesTypes'

const API_URL = SOURCE.url

export async function postCase(content: PostCaseInfo): Promise<GetCaseInfo | undefined> {
  try {
    const token = cookies().get('token')?.value.toString()

    const response = await fetch(`${API_URL}cases/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
      body: JSON.stringify(content),
    })

    const data = await response.json()

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    return data
  } catch (error) {
    console.log(error, 'Error: postCase')
    return
  }
}

export async function patchCase(slug: string, content: PostCaseInfo): Promise<GetCaseInfo | undefined> {
  try {
    const token = cookies().get('token')?.value.toString()

    const response = await fetch(`${API_URL}cases/${slug}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
      body: JSON.stringify(content),
    })

    const data = await response.json()

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    return data
  } catch (error) {
    console.log(error, 'Error: patchCase')
    return
  }
}

export async function getAllCases(content: IGetCases): Promise<getCasesType | undefined> {
  try {
    const params = new URLSearchParams()
    params.append('page', '' + content.page)
    params.append('size', '' + content.size)

    const response = await fetch(`${API_URL}cases?` + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
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

export async function getCaseFileAdmin(content: IGetCaseFile): Promise<GetCaseFileType | undefined> {
  try {
    const response = await fetch(`${API_URL}cases/${content.slug}/content?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
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

export async function getCaseInfoAdmin(content: IGetCaseInfo): Promise<CaseType | undefined> {
  try {
    const response = await fetch(`${API_URL}cases/${content.slug}/?field=slug`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
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

export const dynamic = 'force-dynamic'
export const revalidate = 0