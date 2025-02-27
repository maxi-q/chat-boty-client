import { postArticle } from '@/api/admin/(CMS)/blog/Articles'
import dynamic from 'next/dynamic'
import React from 'react'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = () => {
  const fromPost = async (content: any) => {
    'use server'
    return postArticle(content)
  }

  return (
    <React.Fragment>
      <MarkdownEditor postClient={fromPost} isUpdatePost={false} />
    </React.Fragment>
  )
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
