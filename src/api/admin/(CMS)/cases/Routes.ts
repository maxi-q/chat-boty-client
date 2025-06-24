import { SOURCE } from '@/constants/static'
import { GetCaseInfo, PostCaseInfo } from './CasesTypes'
const API_URL = SOURCE.url

export async function postCaseClient(content: PostCaseInfo): Promise<GetCaseInfo | undefined> {
  try {
    const response = await fetch(`/admin_api/cases`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: post case')
    return
  }
}

export async function patchCaseClient(content: PostCaseInfo, slug: string): Promise<GetCaseInfo | undefined> {
  try {
    const response = await fetch(`/admin_api/cases/${slug}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'Error: patch case')
    return
  }
}
