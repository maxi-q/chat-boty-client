import * as React from "react"
const TelegramFeedback = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="#000"
    viewBox='0 -5 45 45'
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M29.666 6.645a2.25 2.25 0 0 1 3.092 2.439l-3.402 20.635c-.33 1.99-2.514 3.132-4.339 2.14-1.527-.829-3.795-2.107-5.835-3.44-1.02-.668-4.144-2.805-3.76-4.326.33-1.3 5.58-6.188 8.58-9.093 1.177-1.142.64-1.8-.75-.75-3.453 2.607-8.997 6.571-10.83 7.687-1.617.984-2.46 1.152-3.469.984-1.839-.306-3.544-.78-4.936-1.357-1.881-.78-1.79-3.366-.002-4.12l25.65-10.799Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default TelegramFeedback
