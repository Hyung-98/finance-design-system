'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface TooltipProps {
  content: ReactNode
  children: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

export function Tooltip({ content, children, placement = 'top', delay = 0, className }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    timer.current = setTimeout(() => setVisible(true), delay)
  }

  const hide = () => {
    if (timer.current) clearTimeout(timer.current)
    setVisible(false)
  }

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  const placementStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible && (
        <span
          role="tooltip"
          className={cn(
            'absolute z-[var(--fds-z-tooltip,500)] whitespace-nowrap pointer-events-none',
            'px-2.5 py-1.5 rounded-[var(--fds-radius-md)]',
            'bg-[var(--fds-color-gray-800)] text-white text-xs font-medium',
            'shadow-[var(--fds-shadow-md)]',
            'animate-in fade-in duration-150',
            placementStyles[placement],
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}
