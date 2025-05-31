import type { ReactNode } from 'react'

import { classnames } from '@/utils'

interface SectionHeadingProps {
  className?: string
  children: ReactNode
}

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      className={classnames(
        'text-2xl font-semibold text-black lg:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

export default SectionHeading
