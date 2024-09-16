// src/app/api/upload/route.ts
import { deleteFileInfo, uploadFile } from '@/api/static/Files'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const formData = await request.formData()
  const file = formData.get('file') as File | null // Явно указываем тип

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: 'No file uploaded or invalid file format' }, { status: 400 })
  }

  const fetchResponse = await uploadFile(file, params.id)

  if (fetchResponse.status > 400) {
    return NextResponse.json({ error: 'Failed to send file' }, { status: fetchResponse.status })
  }

  return NextResponse.json({ message: 'File uploaded and sent successfully' }, { status: fetchResponse.status })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  if (!id) {
    return NextResponse.json({ error: 'No id in response' }, { status: 404 })
  }

  const fetchResponse = await deleteFileInfo({id})

  if (fetchResponse.status > 400) {
    return NextResponse.json({ error: 'Failed delete file' }, { status: fetchResponse.status })
  }

  return NextResponse.json({ message: 'File deleted successfully' }, { status: 200 })
}
