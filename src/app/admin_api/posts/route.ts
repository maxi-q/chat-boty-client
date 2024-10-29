'use server'

import { postArticle } from '@/api/admin/blog/Articles'
import { PostInfo } from '@/api/admin/blog/ArticlesTypes'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const content: PostInfo = await request.json()

  const response = await postArticle(content)

  if (!response) {
    return new Response('Ошибка при создании поста', {
      status: 500,
    })
  }
  return Response.json(response)
}
