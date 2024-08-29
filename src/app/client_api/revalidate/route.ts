'use server'

import { type NextRequest } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams?.get('page')

  try {
    // Принудительная пере-валидация
    if (page) revalidatePath(`/blog?page=${page}`)
    else revalidatePath(`/blog`)
    
    if (page) revalidatePath(`/cases?page=${page}`)
      else revalidatePath(`/cases`)
    
    revalidateTag('articles')
    revalidateTag('cases')

    return Response.json({ revalidated: true })
  } catch (err) {
    return new Response('Ошибка при пере-валидации', {
      status: 500,
    })
  }
}
