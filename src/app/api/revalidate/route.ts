import { type NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams?.get('page')

  try {
    // Принудительная пере-валидация
    if (page) revalidatePath(`/blog?page=${page}`)
    else revalidatePath(`/blog`)
    return Response.json({ revalidated: true })
  } catch (err) {
    return new Response('Ошибка при пере-валидации', {
      status: 500,
    })
  }
}
