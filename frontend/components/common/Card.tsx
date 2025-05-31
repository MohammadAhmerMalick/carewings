import { type ReactNode } from 'react'

import { classnames } from '@/utils'

interface CardProps {
  id?: string
  className?: string
  children: ReactNode
}

const Card = ({ id, children, className }: CardProps) => {
  return (
    <div
      id={id}
      className={classnames(
        'rounded-4xl border border-neutral-50 p-6 shadow-md duration-300 hover:border-neutral-100 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
