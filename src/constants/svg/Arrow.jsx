import * as React from "react"

function Arrow(props) {
  return (
    <svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      // fill={props.fill ? props.fill : "#7001FE"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5.917C7.465.917.917 7.465.917 15.5S7.465 30.083 15.5 30.083 30.083 23.535 30.083 15.5 23.536.917 15.5.917zm4.069 15.356L14.42 21.42c-.219.219-.496.32-.773.32s-.554-.101-.773-.32a1.1 1.1 0 010-1.546L17.25 15.5l-4.375-4.375a1.1 1.1 0 010-1.546 1.1 1.1 0 011.546 0l5.148 5.148a1.074 1.074 0 010 1.546z"
      />
    </svg>
  )
}

export default Arrow
