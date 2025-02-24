'use server'

import { getImages } from '@/api/static/Files'

export const getData = async (page: number) => {
  return await getImages({ page: page, size: 12 })
}