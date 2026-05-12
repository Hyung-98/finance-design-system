import { cn } from '@/lib/cn'
import { type TextareaHTMLAttributes, forwardRef, useState, useId } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  errorText?: string
  maxLength?: number
  showCount?: boolean
  resize?: 'none' | 'vertical' | 'auto'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, errorText, maxLength, showCount, resize = 'vertical', className, onChange, value, defaultValue, id, ...props }, ref) => {
    const uid = useId()
    const textareaId = id ?? uid
    const descId = `${textareaId}-desc`
    const [internal, setInternal] = useState(String(defaultValue ?? ''))
    const controlled = value !== undefined
    const current = controlled ? String(value) : internal
    const hasError = !!errorText
    const hasDesc = !!(errorText || helperText)

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
          <label htmlFor={textareaId} className="block text-sm font-medium text-[var(--fds-color-text-primary)] mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={controlled ? value : internal}
          onChange={handleChange}
          maxLength={maxLength}
          rows={4}
          aria-invalid={hasError || undefined}
          aria-describedby={hasDesc ? descId : undefined}
          className={cn(
            'w-full px-3.5 py-2.5 rounded-[var(--fds-radius-lg)] border text-sm',
            'bg-[var(--fds-color-bg-base)] text-[var(--fds-color-text-primary)]',
            'placeholder:text-[var(--fds-color-text-tertiary)]',
            'transition-all focus:outline-none focus:ring-2 focus:ring-offset-0',
            hasError
              ? 'border-[var(--fds-color-danger)] focus:ring-[var(--fds-color-danger)]'
              : 'border-[var(--fds-color-border)] focus:border-[var(--fds-color-primary)] focus:ring-[var(--fds-color-primary)]',
            props.disabled && 'opacity-40 cursor-not-allowed bg-[var(--fds-color-bg-elevated)]',
            resizeClass[resize],
            className
          )}
          {...props}
        />
        <div className="flex justify-between items-start mt-1.5">
          {hasDesc && (
            <p
              id={descId}
              role={hasError ? 'alert' : undefined}
              className={cn('text-sm', hasError ? 'text-[var(--fds-color-danger)]' : 'text-[var(--fds-color-text-secondary)]')}
            >
              {errorText || helperText}
            </p>
          )}
          {showCount && maxLength && (
            <span aria-live="polite" className="text-xs text-[var(--fds-color-text-tertiary)] shrink-0 ml-auto">
              {current.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
