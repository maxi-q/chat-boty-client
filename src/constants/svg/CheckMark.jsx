import * as React from "react"
const CheckMark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#6F6F6F"
      d="M5.06 15.252a.75.75 0 1 0-1.121.996l6 6.75a.751.751 0 0 0 1.092.033l15.75-15.75a.75.75 0 0 0-1.06-1.062L10.53 21.407l-5.47-6.155Z"
    />
  </svg>
)
export default CheckMark
