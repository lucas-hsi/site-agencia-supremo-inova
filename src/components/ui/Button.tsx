import React from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'cta' | 'mini'
export type ButtonSize = 'sm' | 'md' | 'lg'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  const classes = clsx(
    // base linear button
    {
      'linear-button': variant === 'primary' || variant === 'cta' || variant === 'mini',
      'linear-button-secondary': variant === 'secondary',
      'linear-button-ghost': variant === 'ghost',
      'linear-button-outline': variant === 'outline',
      'linear-glow-strong': variant === 'cta',
    },
    // sizes mapped to text utilities
    {
      'text-sm': size === 'sm',
      'text-lg': size === 'lg',
    },
    className
  )

  return (
    <a className={classes} aria-disabled={disabled || loading} {...rest}>
      {leftIcon && <span className="btn-icon">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="btn-icon">{rightIcon}</span>}
    </a>
  )
}