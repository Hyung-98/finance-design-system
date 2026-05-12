'use client'

import { useState, useId, useRef, type ReactNode } from 'react'
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
  const uid = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const init = defaultValue
    ? Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    : []
  const [open, setOpen] = useState<string[]>(init)

  const getTriggerId = (value: string) => `${uid}-trigger-${value}`
  const getPanelId = (value: string) => `${uid}-panel-${value}`

  const toggle = (value: string) => {
    if (type === 'single') {
      setOpen(prev => prev.includes(value) ? [] : [value])
    } else {
      setOpen(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, currentValue: string) => {
    const enabledItems = items.filter(i => !i.disabled)
    const currentIdx = enabledItems.findIndex(i => i.value === currentValue)
    let nextIdx = -1

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      nextIdx = (currentIdx + 1) % enabledItems.length
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      nextIdx = (currentIdx - 1 + enabledItems.length) % enabledItems.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIdx = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIdx = enabledItems.length - 1
    }

    if (nextIdx >= 0) {
      containerRef.current
        ?.querySelector<HTMLElement>(`[id="${getTriggerId(enabledItems[nextIdx].value)}"]`)
        ?.focus()
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn('divide-y divide-[var(--fds-color-border)] border border-[var(--fds-color-border)] rounded-[var(--fds-radius-xl)] overflow-hidden', className)}
    >
      {items.map((item) => {
        const isOpen = open.includes(item.value)
        return (
          <div key={item.value}>
            <button
              id={getTriggerId(item.value)}
              type="button"
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={getPanelId(item.value)}
              onClick={() => !item.disabled && toggle(item.value)}
              onKeyDown={(e) => handleKeyDown(e, item.value)}
              className={cn(
                'w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-left',
                'text-[var(--fds-color-text-primary)] bg-[var(--fds-color-bg-base)]',
                'hover:bg-[var(--fds-color-bg-elevated)] transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--fds-color-primary)]',
                item.disabled && 'opacity-40 cursor-not-allowed'
              )}
            >
              <span>{item.trigger}</span>
              <svg
                aria-hidden="true"
                className={cn('w-4 h-4 text-[var(--fds-color-text-tertiary)] transition-transform duration-200 shrink-0', isOpen && 'rotate-180')}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              id={getPanelId(item.value)}
              role="region"
              aria-labelledby={getTriggerId(item.value)}
              hidden={!isOpen}
              className="px-5 pb-4 pt-1 text-sm text-[var(--fds-color-text-secondary)] bg-[var(--fds-color-bg-base)] leading-relaxed"
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
