'use client'

import { cn } from '@/lib/cn'
import { useState, useId, useRef } from 'react'

export interface TabItem {
  value: string
  label: string
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  variant?: 'line' | 'pill'
  children?: (activeValue: string) => React.ReactNode
}

export function Tabs({ items, value: controlled, defaultValue, onChange, variant = 'line', children }: TabsProps) {
  const uid = useId()
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value ?? '')
  const active = controlled !== undefined ? controlled : internal
  const tablistRef = useRef<HTMLDivElement>(null)

  const getTabId = (value: string) => `${uid}-tab-${value}`
  const getPanelId = (value: string) => `${uid}-panel-${value}`

  const handleChange = (val: string) => {
    if (controlled === undefined) setInternal(val)
    onChange?.(val)
  }

  const handleKeyDown = (e: React.KeyboardEvent, currentValue: string) => {
    const enabledItems = items.filter(i => !i.disabled)
    const currentIdx = enabledItems.findIndex(i => i.value === currentValue)
    let nextIdx = -1

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      nextIdx = (currentIdx + 1) % enabledItems.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
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
      const nextItem = enabledItems[nextIdx]
      handleChange(nextItem.value)
      tablistRef.current?.querySelector<HTMLElement>(`[id="${getTabId(nextItem.value)}"]`)?.focus()
    }
  }

  return (
    <div>
      <div
        ref={tablistRef}
        role="tablist"
        className={cn(
          'flex',
          variant === 'line'
            ? 'border-b border-[var(--fds-color-border)]'
            : 'p-1 bg-[var(--fds-color-bg-elevated)] rounded-[var(--fds-radius-lg)] gap-1'
        )}
      >
        {items.map((item) => (
          <button
            key={item.value}
            id={getTabId(item.value)}
            role="tab"
            aria-selected={active === item.value}
            aria-controls={getPanelId(item.value)}
            disabled={item.disabled}
            tabIndex={active === item.value ? 0 : -1}
            onClick={() => !item.disabled && handleChange(item.value)}
            onKeyDown={(e) => handleKeyDown(e, item.value)}
            className={cn(
              'relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)]',
              item.disabled && 'opacity-40 cursor-not-allowed',
              variant === 'line'
                ? cn(
                    'px-4 py-2.5',
                    active === item.value
                      ? 'text-[var(--fds-color-primary)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--fds-color-primary)] after:rounded-t'
                      : 'text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)]'
                  )
                : cn(
                    'px-4 py-1.5 rounded-[var(--fds-radius-md)] flex-1',
                    active === item.value
                      ? 'bg-[var(--fds-color-bg-base)] text-[var(--fds-color-text-primary)] shadow-[var(--fds-shadow-sm)]'
                      : 'text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)]'
                  )
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children && items.map((item) => (
        <div
          key={item.value}
          id={getPanelId(item.value)}
          role="tabpanel"
          aria-labelledby={getTabId(item.value)}
          hidden={active !== item.value}
          className="mt-4"
        >
          {active === item.value && children(active)}
        </div>
      ))}
    </div>
  )
}
