'use server'

import { patchArticle } from '@/api/admin/blog/Articles'
import { PostInfoResponse } from '@/api/admin/blog/ArticlesTypes'
import { type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params }: { params: { slug: string } }) {
  const content: PostInfoResponse = await request.json()

  const response = await patchArticle(params.slug, content)

  if (!response) {
    return new Response('Ошибка при создании поста', {
      status: 500,
    })
  }
  return Response.json('response')
}
