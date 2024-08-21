import * as React from "react"
const VideoReviewPlayer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    viewBox='0 0 256 256'
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M128 234.667c58.91 0 106.667-47.757 106.667-106.667 0-58.91-47.757-106.667-106.667-106.667C69.09 21.333 21.333 69.09 21.333 128c0 58.91 47.757 106.667 106.667 106.667Zm-13.936-65.645 50.349-29.726c8.338-4.924 8.338-17.668 0-22.592l-50.349-29.726C105.96 82.193 96 88.421 96 98.274v59.452c0 9.853 9.96 16.081 18.064 11.296Z"
      clipRule="evenodd"
    />
  </svg>
)
export default VideoReviewPlayer
