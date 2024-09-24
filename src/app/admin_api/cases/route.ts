'use server'

import { PostInfoResponse } from '@/api/admin/blog/ArticlesTypes'
import { postCase } from '@/api/admin/cases/Cases'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const content: PostInfoResponse = await request.json()

  const response = await postCase(content)

  if (!response) {
    return new Response('Ошибка при создании кейса', {
      status: 500,
    })
  }
  return Response.json(response)
}
