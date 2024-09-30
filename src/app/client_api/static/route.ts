'use server'

import { getImages } from '@/api/static/Files'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') || 1
  const size = searchParams.get('size') || 10
  const images = await getImages({ page: +page, size: +size })

  if (!!Object.keys(images).length) {
    return new Response('Ошибка при запросе файлов', {
      status: 500,
    })
  }
  return Response.json({ images })
}
