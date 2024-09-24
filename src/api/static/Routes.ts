import { defaultResponse, defaultResponseNoJson, ServerError } from '@/constants/helpers'
import { ICreateFile, IDeleteFileInfo, IFileInfo, IGetImages, IImagesResponse, IUploadFile } from './types'

export async function getImagesClient(content: IGetImages): Promise<IImagesResponse | ServerError> {
  const params = new URLSearchParams()
  params.append('page', '' + content.page)
  params.append('size', '' + content.size)

  return defaultResponse('getImagesClient', `/client_api/static?${params}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Cache-Control': 'max-age=300',
    },
    next: { tags: ['images'] },
  })
}

export async function createFileClient(content: ICreateFile): Promise<IFileInfo | ServerError> {
  return defaultResponse('createFileClient', `/admin_api/static/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
  })
}

export async function uploadFileClient(content: IUploadFile): Promise<Response> {
  const formData = new FormData()
  formData.append('file', content.file)

  return defaultResponse('uploadFileClient', `/admin_api/static/${content.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
}

export async function deleteFileInfoClient(content: IDeleteFileInfo): Promise<Response> {
  return defaultResponseNoJson('uploadFileClient', `/admin_api/static/${content.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  })
}
