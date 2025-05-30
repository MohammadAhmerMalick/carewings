import type { HTMLAttributes, ReactNode } from 'react'

import { classnames } from '@/utils'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  size?: 'big' | 'small' | 'bigger'
  theme?: 'light' | 'dark' | 'gradient' | 'none'
}

export const getButtonThemeColor = (theme: ButtonProps['theme'] = 'dark') => {
  if (theme === 'gradient')
    return ' bg-linear-45 from-red-800 to-red-900 text-white'
  if (theme === 'light') return 'border-black bg-white text-black'
  if (theme === 'dark')
    return 'border-black bg-black text-white hover:bg-neutral-900'

  return ''
}

const getButtonSize = (size: ButtonProps['size']) => {
  if (size === 'small') return 'h-9 text-sm'
  if (size === 'big') return 'h-12 text-base'
  if (size === 'bigger') return 'lg:h-14 h-10 lg:text-lg'

  return 'h-10 text-base'
}

const Button = ({
  children,
  className,
  size,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        'rounded-lg border px-4 duration-200 hover:shadow-xl',
        getButtonSize(size),
        getButtonThemeColor(theme),
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
