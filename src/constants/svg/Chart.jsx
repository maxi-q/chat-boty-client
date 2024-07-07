import * as React from "react"
const Chart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox='-5 -5 60 60'
    fill="#0B0A0A"
    {...props}
  >
    <path
      d="M36.027 4.777c-.61.61-.61 1.592-.61 3.556v27.083c0 1.965 0 2.946.61 3.557.61.61 1.592.61 3.556.61 1.965 0 2.946 0 3.557-.61.61-.61.61-1.592.61-3.556V8.332c0-1.964 0-2.946-.61-3.556-.61-.61-1.592-.61-3.557-.61-1.964 0-2.945 0-3.556.61Zm-15.194 9.806c0-1.964 0-2.946.61-3.556.611-.61 1.592-.61 3.557-.61 1.965 0 2.946 0 3.556.61.61.61.61 1.592.61 3.556v20.834c0 1.964 0 2.945-.61 3.556-.61.61-1.591.61-3.556.61s-2.946 0-3.556-.61c-.61-.61-.61-1.592-.61-3.556V14.582ZM6.86 19.36c-.61.61-.61 1.592-.61 3.556v12.5c0 1.965 0 2.946.61 3.557.61.61 1.592.61 3.557.61 1.964 0 2.946 0 3.556-.61.61-.61.61-1.592.61-3.556v-12.5c0-1.965 0-2.946-.61-3.557-.61-.61-1.592-.61-3.556-.61-1.965 0-2.946 0-3.557.61Zm-.61 24.91a1.563 1.563 0 1 0 0 3.126h37.5a1.562 1.562 0 1 0 0-3.125H6.25Z"
    />
  </svg>
)
export default Chart
