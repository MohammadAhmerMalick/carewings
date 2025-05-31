import Link from 'next/link'
import { type Url } from 'next/dist/shared/lib/router/router'
import { type HTMLAttributeAnchorTarget, type ReactNode } from 'react'

import {
  getButtonSize,
  type ButtonProps,
  getButtonThemeColor,
} from '@/common/Button'
import { classnames } from '@/utils'

interface LinkButtonProps {
  href: Url
  className?: string
  ariaLabel?: string
  children: ReactNode
  size?: ButtonProps['size']
  theme?: ButtonProps['theme']
  target?: HTMLAttributeAnchorTarget
}

const LinkButton = ({
  href,
  size,
  theme,
  target,
  children,
  ariaLabel,
  className = '',
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      aria-label={ariaLabel}
      className={classnames(
        'rounded-lg border px-4 duration-200 hover:shadow-xl',
        getButtonSize(size),
        getButtonThemeColor(theme),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkButton
