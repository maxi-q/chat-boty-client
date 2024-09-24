import dynamic from 'next/dynamic'
import React from 'react'

import MarkdownEditor from './ClientContent'

const NoSsr = () => (
  <React.Fragment><MarkdownEditor/></React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})