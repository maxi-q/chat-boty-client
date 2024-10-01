import { defaultResponse, defaultResponseNoJson, ServerError } from '@/constants/helpers'
import { SOURCE } from '@/constants/static'
import { cookies } from 'next/headers'
import { ICreateFile, IDeleteFileInfo, IFileInfo, IGetImages, IImages } from './types'

const API_URL = SOURCE.static_url

export async function getImages(content: IGetImages): Promise<IImages | ServerError> {
  const params = new URLSearchParams()
  params.append('page', '' + content.page)
  params.append('size', '' + content.size)

  const token = cookies().get('token')?.value.toString()

  return defaultResponse('Error: getImages', `${API_URL}?${params}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=300',
      Authorization: token || '',
    },
    next: { tags: ['images'] },
  })
}

export async function createFile(content: ICreateFile): Promise<IFileInfo | ServerError> {
  const token = cookies().get('token')?.value.toString()

  return defaultResponse('Error: createFile', `${API_URL}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
    body: JSON.stringify(content),
  })
}

import axios from 'axios'

export async function uploadFile(fileData: File, id: string): Promise<Response> {
  const token = cookies().get('token')?.value.toString()
  const formData = new FormData()

  formData.append('file', fileData)

  return axios.put(`${API_URL}${id}?field=id`, formData, {
    headers: {
      Accept: 'application/json',
      Authorization: token || '',
    },
    maxRedirects: 2,
  })
}

export async function deleteFileInfo(content: IDeleteFileInfo): Promise<Response> {
  const token = cookies().get('token')?.value.toString()

  return defaultResponseNoJson('deleteFileInfo', `${API_URL}${content.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
  })
}
