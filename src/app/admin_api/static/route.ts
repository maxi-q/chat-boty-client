'use server'

import { createFile } from '@/api/static/Files'
import { ICreateFile } from '@/api/static/types'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const content: ICreateFile = await request.json()

  const response = await createFile(content)

  if (response instanceof Response) {
    return response
  }

  return Response.json(response)
}
