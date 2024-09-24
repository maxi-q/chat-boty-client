import { postArticleClient } from '@/api/admin/blog/Routes'
import dynamic from 'next/dynamic'
import React from 'react'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = () => {
  const postArticle = async (content: any) => {
    'use server'
    return postArticleClient(content)
  }

  return (
    <React.Fragment>
      <MarkdownEditor postClient={postArticle} isUpdatePost={false} />
    </React.Fragment>
  )
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
