import React from "react"

export interface CrossIconProps {
  className?: string
  height?: string
  width?: string
}

function CrossIcon({
  className,
  height = "28",
  width = "28",
}: CrossIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 29.172 29.172"
    >
      <g>
        <path
          d="M33.344 18.672A14.672 14.672 0 1118.672 4a14.673 14.673 0 0114.672 14.672z"
          transform="translate(-684 -661) translate(684 661) translate(-4 -4)"
          fill="#e6c8cf"
        />
        <path
          d="M693.435 670.975l11.207 10.127"
          fill="none"
          stroke="#af4c5f"
          strokeWidth={3}
          transform="translate(-684 -661)"
        />
        <path
          d="M704.102 670.435l-10.127 11.207"
          fill="none"
          stroke="#af4c5f"
          strokeWidth={3}
          transform="translate(-684 -661)"
        />
      </g>
    </svg>
  )
}

export default CrossIcon
