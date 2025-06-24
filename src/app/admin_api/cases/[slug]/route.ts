'use server'

import { PostCaseInfo } from '@/api/admin/(CMS)/cases/CasesTypes'
import { patchCase } from '@/api/admin/(CMS)/cases/Cases'
import { type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params }: { params: { slug: string } }) {
  const content: PostCaseInfo = await request.json()

  const response = await patchCase(params.slug, content)

  if (!response) {
    return new Response('Ошибка при создании кейса', {
      status: 500,
    })
  }
  return Response.json('response')
}
