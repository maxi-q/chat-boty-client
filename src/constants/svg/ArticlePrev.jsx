import * as React from "react"
const ArticlePrev = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    stroke="#0B0A0A"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 12h-16m0 0 6-6m-6 6 6 6"
    />
  </svg>
)
export default ArticlePrev
