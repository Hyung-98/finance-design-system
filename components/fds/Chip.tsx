'use client'

import { cn } from '@/lib/cn'
import { type ReactNode } from 'react'

export interface ChipProps {
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  onRemove?: () => void
  variant?: 'filter' | 'tag'
  size?: 'sm' | 'md'
  className?: string
}

export function Chip({
  children,
  selected = false,
  disabled = false,
  onClick,
  onRemove,
  variant = 'filter',
  size = 'md',
  className,
}: ChipProps) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 gap-1',
    md: 'text-sm px-3.5 py-1.5 gap-1.5',
  }

  const baseStyles = cn(
    'inline-flex items-center rounded-full font-medium transition-all border',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)] focus-visible:ring-offset-1',
    sizeStyles[size],
    disabled && 'opacity-40 cursor-not-allowed',
    className
  )

  const selectedStyles = selected
    ? 'bg-[var(--fds-color-primary-subtle)] border-[var(--fds-color-primary)] text-[var(--fds-color-primary)]'
    : 'bg-[var(--fds-color-bg-elevated)] border-[var(--fds-color-border)] text-[var(--fds-color-text-secondary)] hover:border-[var(--fds-color-border-strong)] hover:text-[var(--fds-color-text-primary)]'

  if (variant === 'tag') {
    return (
      <span className={cn(baseStyles, 'bg-[var(--fds-color-bg-elevated)] border-[var(--fds-color-border)] text-[var(--fds-color-text-secondary)]')}>
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            disabled={disabled}
            aria-label="제거"
            className="ml-0.5 rounded-full hover:text-[var(--fds-color-text-primary)] focus-visible:outline-none"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    )
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-pressed={selected}
      className={cn(baseStyles, selectedStyles)}
    >
      {selected && (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
      {children}
    </button>
  )
}

export interface ChipGroupProps {
  options: { value: string; label: string; disabled?: boolean }[]
  value?: string[]
  onChange?: (value: string[]) => void
  multiple?: boolean
  size?: ChipProps['size']
  className?: string
}

export function ChipGroup({ options, value = [], onChange, multiple = true, size = 'md', className }: ChipGroupProps) {
  const toggle = (v: string) => {
    if (!onChange) return
    if (multiple) {
      onChange(value.includes(v) ? value.filter(x => x !== v) : [...value, v])
    } else {
      onChange(value.includes(v) ? [] : [v])
    }
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {options.map((opt) => (
        <Chip
          key={opt.value}
          selected={value.includes(opt.value)}
          disabled={opt.disabled}
          onClick={() => toggle(opt.value)}
          size={size}
        >
          {opt.label}
        </Chip>
      ))}
    </div>
  )
}
