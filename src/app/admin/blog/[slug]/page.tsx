import dynamic from 'next/dynamic'
import React from 'react'

import MarkdownEditor from './ClientContent'

const NoSsr = ({ params }: { params: { slug: string } }) => (
  <React.Fragment><MarkdownEditor params={params}/></React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})