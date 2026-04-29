'use client'

import { cn } from '@/lib/cn'
import { useState, useRef, useEffect } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  helperText?: string
  errorText?: string
  disabled?: boolean
  className?: string
}

export function Select({
  options, value: controlledValue, defaultValue, onChange,
  placeholder = '선택하세요', label, helperText, errorText, disabled, className,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const ref = useRef<HTMLDivElement>(null)

  const value = controlledValue !== undefined ? controlledValue : internalValue
  const selected = options.find(o => o.value === value)
  const hasError = !!errorText

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (opt: SelectOption) => {
    if (opt.disabled) return
    if (controlledValue === undefined) setInternalValue(opt.value)
    onChange?.(opt.value)
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-[var(--tds-color-text-primary)] mb-1.5">
          {label}
        </label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(v => !v)}
        className={cn(
          'w-full flex items-center justify-between px-3.5 py-2.5 rounded-[var(--tds-radius-lg)] border text-sm text-left transition-all',
          'bg-[var(--tds-color-bg-base)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          hasError
            ? 'border-[var(--tds-color-danger)] focus:ring-[var(--tds-color-danger)]'
            : open
            ? 'border-[var(--tds-color-primary)] ring-2 ring-[var(--tds-color-primary)]'
            : 'border-[var(--tds-color-border)]',
          disabled && 'opacity-40 cursor-not-allowed'
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? 'text-[var(--tds-color-text-primary)]' : 'text-[var(--tds-color-text-tertiary)]'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={cn('w-4 h-4 text-[var(--tds-color-text-tertiary)] transition-transform', open ? 'rotate-180' : '')}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-[var(--tds-z-dropdown,100)] mt-1 w-full rounded-[var(--tds-radius-lg)] border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)] shadow-[var(--tds-shadow-lg)] overflow-hidden py-1 max-h-56 overflow-y-auto"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => handleSelect(opt)}
              className={cn(
                'flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors',
                opt.disabled
                  ? 'opacity-40 cursor-not-allowed text-[var(--tds-color-text-tertiary)]'
                  : value === opt.value
                  ? 'text-[var(--tds-color-primary)] font-medium bg-[var(--tds-color-primary-subtle)]'
                  : 'text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-bg-elevated)]'
              )}
            >
              {opt.label}
              {value === opt.value && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}

      {(errorText || helperText) && (
        <p className={cn('text-sm mt-1.5', hasError ? 'text-[var(--tds-color-danger)]' : 'text-[var(--tds-color-text-secondary)]')}>
          {errorText || helperText}
        </p>
      )}
    </div>
  )
}
