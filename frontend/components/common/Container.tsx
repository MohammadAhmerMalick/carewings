import type { ReactNode } from 'react'

import { classnames } from '@/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={classnames(
        'max-w-8xl mx-auto px-3 py-3 font-medium text-neutral-700 md:px-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
