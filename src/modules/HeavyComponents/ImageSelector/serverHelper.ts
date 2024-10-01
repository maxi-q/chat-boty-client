'use server'

import { getImages } from '@/api/static/Files'

export const getData = async (page: number) => {
  console.log('server')
  return await getImages({ page: page, size: 12 })
}