'use server'

import { PostInfoResponse } from '@/api/admin/blog/ArticlesTypes'
import { patchCase } from '@/api/admin/cases/Cases'
import { type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params }: { params: { slug: string } }) {
  const content: PostInfoResponse = await request.json()

  const response = await patchCase(params.slug, content)

  if (!response) {
    return new Response('Ошибка при создании кейса', {
      status: 500,
    })
  }
  return Response.json('response')
}
