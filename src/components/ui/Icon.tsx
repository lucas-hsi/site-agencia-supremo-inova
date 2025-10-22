import React from 'react'

type Props = {
  children: React.ReactElement
  muted?: boolean
  className?: string
}

export function Icon({ children, muted = false, className }: Props) {
  return (
    <span className={["icon", muted ? "icon-muted" : "", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  )
}