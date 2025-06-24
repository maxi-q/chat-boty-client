'use server'

import { patchArticle } from '@/api/admin/(CMS)/blog/Articles'
import { PostBlogArticleInfo } from '@/api/admin/(CMS)/blog/ArticlesTypes'
import { type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params }: { params: { slug: string } }) {
  const content: PostBlogArticleInfo = await request.json()

  const response = await patchArticle(params.slug, content)

  if (!response) {
    return new Response('Ошибка при создании поста', {
      status: 500,
    })
  }
  return Response.json('response')
}
