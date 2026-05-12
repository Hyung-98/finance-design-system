'use client'

import { cn } from '@/lib/cn'
import { useState, useRef, useEffect, useId } from 'react'

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
  const uid = useId()
  const labelId = `${uid}-label`
  const listboxId = `${uid}-listbox`
  const descId = `${uid}-desc`

  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const value = controlledValue !== undefined ? controlledValue : internalValue
  const selected = options.find(o => o.value === value)
  const hasError = !!errorText
  const hasDesc = !!(errorText || helperText)
  const enabledOptions = options.filter(o => !o.disabled)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (!open) setFocusedIndex(-1)
    else {
      const idx = options.findIndex(o => o.value === value)
      setFocusedIndex(idx >= 0 ? idx : 0)
    }
  }, [open])

  const handleSelect = (opt: SelectOption) => {
    if (opt.disabled) return
    if (controlledValue === undefined) setInternalValue(opt.value)
    onChange?.(opt.value)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setOpen(true)
      }
      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex(i => {
        const next = i + 1
        return next < options.length ? next : i
      })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex(i => {
        const prev = i - 1
        return prev >= 0 ? prev : 0
      })
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (focusedIndex >= 0) handleSelect(options[focusedIndex])
    } else if (e.key === 'Home') {
      e.preventDefault()
      setFocusedIndex(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setFocusedIndex(options.length - 1)
    }
  }

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      {label && (
        <label id={labelId} className="block text-sm font-medium text-[var(--fds-color-text-primary)] mb-1.5">
          {label}
        </label>
      )}
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={() => setOpen(v => !v)}
        onKeyDown={handleKeyDown}
        className={cn(
          'w-full flex items-center justify-between px-3.5 py-2.5 rounded-[var(--fds-radius-lg)] border text-sm text-left transition-all',
          'bg-[var(--fds-color-bg-base)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          hasError
            ? 'border-[var(--fds-color-danger)] focus:ring-[var(--fds-color-danger)]'
            : open
            ? 'border-[var(--fds-color-primary)] ring-2 ring-[var(--fds-color-primary)]'
            : 'border-[var(--fds-color-border)]',
          disabled && 'opacity-40 cursor-not-allowed'
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={label ? labelId : undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasDesc ? descId : undefined}
      >
        <span className={selected ? 'text-[var(--fds-color-text-primary)]' : 'text-[var(--fds-color-text-tertiary)]'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          aria-hidden="true"
          className={cn('w-4 h-4 text-[var(--fds-color-text-tertiary)] transition-transform', open ? 'rotate-180' : '')}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={label ? labelId : undefined}
          onKeyDown={handleKeyDown}
          className="absolute z-[var(--fds-z-dropdown,100)] mt-1 w-full rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)] shadow-[var(--fds-shadow-lg)] overflow-hidden py-1 max-h-56 overflow-y-auto"
        >
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              aria-disabled={opt.disabled}
              data-focused={focusedIndex === idx ? 'true' : undefined}
              onClick={() => handleSelect(opt)}
              className={cn(
                'flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors',
                opt.disabled
                  ? 'opacity-40 cursor-not-allowed text-[var(--fds-color-text-tertiary)]'
                  : focusedIndex === idx
                  ? 'bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-primary)]'
                  : value === opt.value
                  ? 'text-[var(--fds-color-primary)] font-medium bg-[var(--fds-color-primary-subtle)]'
                  : 'text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)]'
              )}
            >
              {opt.label}
              {value === opt.value && (
                <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}

      {hasDesc && (
        <p
          id={descId}
          role={hasError ? 'alert' : undefined}
          className={cn('text-sm mt-1.5', hasError ? 'text-[var(--fds-color-danger)]' : 'text-[var(--fds-color-text-secondary)]')}
        >
          {errorText || helperText}
        </p>
      )}
    </div>
  )
}
