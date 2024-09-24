import { postArticleClient } from '@/api/admin/blog/Routes'
import dynamic from 'next/dynamic'
import React from 'react'
import MarkdownEditor from '../../modules/ClientContent'

const NoSsr = () => (
  <React.Fragment>
    <MarkdownEditor postClient={postArticleClient} isUpdatePost={false} />
  </React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
