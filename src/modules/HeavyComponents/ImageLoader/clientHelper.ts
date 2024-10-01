'use server'

import { createFile, uploadFile } from '@/api/static/Files'

export const createFileData = ({ title, description, slug }: { title: string; description: string; slug?: string }) =>
  createFile({
    title: title,
    description: description,
    slug: slug || undefined,
  })

