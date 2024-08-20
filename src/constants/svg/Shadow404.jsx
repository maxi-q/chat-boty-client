import * as React from "react"
const Shadow404 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={161}
    height={57}
    fill="none"
    {...props}
  >
    <g filter="url(#a)" opacity={0.58}>
      <ellipse cx={80.5} cy={28.5} fill="#000" rx={57.357} ry={5.5} />
    </g>
    <defs>
      <filter
        id="a"
        width={159.915}
        height={56.2}
        x={0.543}
        y={0.4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_620_2491"
          stdDeviation={11.3}
        />
      </filter>
    </defs>
  </svg>
)
export default Shadow404
