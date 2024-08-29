import * as React from "react"
const BlogClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#7001FE"
      d="M14.666 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8 4.833a.5.5 0 0 1 .5.5v2.46l1.52 1.52a.5.5 0 1 1-.707.707L7.646 8.354A.5.5 0 0 1 7.5 8V5.333a.5.5 0 0 1 .5-.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default BlogClock
