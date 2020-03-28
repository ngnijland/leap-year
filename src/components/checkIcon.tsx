import React from "react"

export interface CheckIconProps {
  className?: string
  height?: string
  width?: string
}

function CheckIcon({
  className,
  height = "28",
  width = "28",
}: CheckIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 29.172 29.172"
    >
      <path
        d="M33.172 18.586A14.586 14.586 0 1118.586 4a14.587 14.587 0 0114.586 14.586z"
        fill="#c8e6c9"
        transform="translate(-4 -4)"
      />
      <path
        d="M28.631 14.586l-9.9 9.908-4.083-4.074-2.062 2.062 6.151 6.136 11.957-11.97z"
        transform="translate(-4 -4) translate(-2.324 -2.866)"
        fill="#4caf50"
      />
    </svg>
  )
}

export default CheckIcon
