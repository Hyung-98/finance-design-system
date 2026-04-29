'use client'

import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface AccordionItem {
  value: string
  trigger: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  className?: string
}

export function Accordion({ items, type = 'single', defaultValue, className }: AccordionProps) {
  const init = defaultValue
    ? Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    : []
  const [open, setOpen] = useState<string[]>(init)

  const toggle = (value: string) => {
    if (type === 'single') {
      setOpen(prev => prev.includes(value) ? [] : [value])
    } else {
      setOpen(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
    }
  }

  return (
    <div className={cn('divide-y divide-[var(--tds-color-border)] border border-[var(--tds-color-border)] rounded-[var(--tds-radius-xl)] overflow-hidden', className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.value)
        return (
          <div key={item.value}>
            <button
              type="button"
              disabled={item.disabled}
              aria-expanded={isOpen}
              onClick={() => !item.disabled && toggle(item.value)}
              className={cn(
                'w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-left',
                'text-[var(--tds-color-text-primary)] bg-[var(--tds-color-bg-base)]',
                'hover:bg-[var(--tds-color-bg-elevated)] transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--tds-color-primary)]',
                item.disabled && 'opacity-40 cursor-not-allowed'
              )}
            >
              <span>{item.trigger}</span>
              <svg
                className={cn('w-4 h-4 text-[var(--tds-color-text-tertiary)] transition-transform duration-200 shrink-0', isOpen && 'rotate-180')}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 pt-1 text-sm text-[var(--tds-color-text-secondary)] bg-[var(--tds-color-bg-base)] leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
