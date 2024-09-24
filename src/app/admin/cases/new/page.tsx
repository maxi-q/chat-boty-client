import { postCase } from '@/api/admin/cases/Cases'
import dynamic from 'next/dynamic'
import React from 'react'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = () => {
  const postClient = async (content: any) => {
    'use server'
    return postCase(content)
  }

  return (
    <React.Fragment>
      <MarkdownEditor postClient={postClient} isUpdatePost={false} />
    </React.Fragment>
  )
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
