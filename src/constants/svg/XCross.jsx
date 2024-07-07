import * as React from 'react'

const XCross = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <path stroke="#6F6F6F" strokeLinecap="round" d="m10 10 20 20m0-20L10 30" />
  </svg>
)

export default XCross
