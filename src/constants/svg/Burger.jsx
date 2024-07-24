import * as React from "react"
const Burger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    stroke="#fff"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={2.625}
      d="M35 12.75H7M35 21.5H7M35 30.25H7"
    />
  </svg>
)
export default Burger
