'use client'

import { cn } from '@/lib/cn'
import { useState } from 'react'

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
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value ?? '')
  const active = controlled !== undefined ? controlled : internal

  const handleChange = (val: string) => {
    if (controlled === undefined) setInternal(val)
    onChange?.(val)
  }

  return (
    <div>
      <div
        role="tablist"
        className={cn(
          'flex',
          variant === 'line'
            ? 'border-b border-[var(--tds-color-border)]'
            : 'p-1 bg-[var(--tds-color-bg-elevated)] rounded-[var(--tds-radius-lg)] gap-1'
        )}
      >
        {items.map((item) => (
          <button
            key={item.value}
            role="tab"
            aria-selected={active === item.value}
            disabled={item.disabled}
            onClick={() => !item.disabled && handleChange(item.value)}
            className={cn(
              'relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tds-color-primary)]',
              item.disabled && 'opacity-40 cursor-not-allowed',
              variant === 'line'
                ? cn(
                    'px-4 py-2.5',
                    active === item.value
                      ? 'text-[var(--tds-color-primary)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--tds-color-primary)] after:rounded-t'
                      : 'text-[var(--tds-color-text-secondary)] hover:text-[var(--tds-color-text-primary)]'
                  )
                : cn(
                    'px-4 py-1.5 rounded-[var(--tds-radius-md)] flex-1',
                    active === item.value
                      ? 'bg-[var(--tds-color-bg-base)] text-[var(--tds-color-text-primary)] shadow-[var(--tds-shadow-sm)]'
                      : 'text-[var(--tds-color-text-secondary)] hover:text-[var(--tds-color-text-primary)]'
                  )
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children && (
        <div role="tabpanel" className="mt-4">
          {children(active)}
        </div>
      )}
    </div>
  )
}
