import { cn } from '@/lib/cn'
import { type TextareaHTMLAttributes, forwardRef, useState } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  errorText?: string
  maxLength?: number
  showCount?: boolean
  resize?: 'none' | 'vertical' | 'auto'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, errorText, maxLength, showCount, resize = 'vertical', className, onChange, value, defaultValue, ...props }, ref) => {
    const [internal, setInternal] = useState(String(defaultValue ?? ''))
    const controlled = value !== undefined
    const current = controlled ? String(value) : internal
    const hasError = !!errorText

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!controlled) setInternal(e.target.value)
      onChange?.(e)
    }

    const resizeClass = {
      none: 'resize-none',
      vertical: 'resize-y',
      auto: 'resize-none',
    }

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--tds-color-text-primary)] mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          value={controlled ? value : internal}
          onChange={handleChange}
          maxLength={maxLength}
          rows={4}
          className={cn(
            'w-full px-3.5 py-2.5 rounded-[var(--tds-radius-lg)] border text-sm',
            'bg-[var(--tds-color-bg-base)] text-[var(--tds-color-text-primary)]',
            'placeholder:text-[var(--tds-color-text-tertiary)]',
            'transition-all focus:outline-none focus:ring-2 focus:ring-offset-0',
            hasError
              ? 'border-[var(--tds-color-danger)] focus:ring-[var(--tds-color-danger)]'
              : 'border-[var(--tds-color-border)] focus:border-[var(--tds-color-primary)] focus:ring-[var(--tds-color-primary)]',
            props.disabled && 'opacity-40 cursor-not-allowed bg-[var(--tds-color-bg-elevated)]',
            resizeClass[resize],
            className
          )}
          {...props}
        />
        <div className="flex justify-between items-start mt-1.5">
          <p className={cn('text-sm', hasError ? 'text-[var(--tds-color-danger)]' : 'text-[var(--tds-color-text-secondary)]')}>
            {errorText || helperText}
          </p>
          {showCount && maxLength && (
            <span className="text-xs text-[var(--tds-color-text-tertiary)] shrink-0 ml-2">
              {current.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
