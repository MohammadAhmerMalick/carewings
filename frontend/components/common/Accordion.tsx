'use client'

import { useState, type ReactNode } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { classnames } from '@/utils'
import Button from '@/components/common/Button'

interface AccordionProps {
  heading: string
  children: ReactNode
  defaultExpanded?: boolean
}
const Accordion = ({
  heading,
  children,
  defaultExpanded = false,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div
      className={classnames(
        'overflow-hidden rounded-2xl border border-neutral-200 shadow-md duration-300'
      )}
    >
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={classnames(
          'h-auto w-full !rounded-2xl border-0 p-4 text-left text-lg text-black shadow-md duration-300 hover:!shadow-md md:text-lg',
          isExpanded && 'bg-primary/10'
        )}
        theme="none"
      >
        <span className="flex items-center justify-between">
          {heading}
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </Button>
      <div
        style={{ height: 'calc-size(auto, size)' }}
        className={classnames(
          'px-4 duration-300',
          isExpanded ? 'py-4' : '!h-0 py-0'
        )}
      >
        <p className=" ">{children}</p>
      </div>
    </div>
  )
}

export default Accordion
