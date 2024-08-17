import { callBackContent } from '@/components/ui/CallBackPopUp'
import { SOURCE } from '@/constants/static'

const API_URL = SOURCE.url

export async function telegramRequest(content: callBackContent) {
  try {
    const response = await fetch(`${API_URL}communication-requests/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contact_type: content.contactType,
        value: content.contact,
        name: content.name
      }),
    })

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`)
      ;(error as any).status = response.status
      throw error
    }

    return true
  } catch (error) {
    console.log(error, 'Не получилось оставить заявку')
    return
  }
}
