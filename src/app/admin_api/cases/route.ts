'use server'

import { PostCaseInfo } from '@/api/admin/(CMS)/cases/CasesTypes'
import { postCase } from '@/api/admin/(CMS)/cases/Cases'

import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const content: PostCaseInfo = await request.json()

  const response = await postCase(content)

  if (!response) {
    return new Response('Ошибка при создании кейса', {
      status: 500,
    })
  }
  return Response.json(response)
}
