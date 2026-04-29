import { cn } from '@/lib/cn'
import { type InputHTMLAttributes, forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorText?: string
  status?: 'default' | 'error' | 'success'
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorText, status = 'default', prefix, suffix, className, disabled, ...props }, ref) => {
    const hasError = status === 'error' || !!errorText
    const hasSuccess = status === 'success'

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-[var(--tds-color-text-primary)]">
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center gap-2 px-3.5 rounded-[var(--tds-radius-lg)] border transition-all',
            'bg-[var(--tds-color-bg-base)]',
            'focus-within:ring-2 focus-within:ring-offset-0',
            hasError
              ? 'border-[var(--tds-color-danger)] focus-within:ring-[var(--tds-color-danger)]'
              : hasSuccess
              ? 'border-[var(--tds-color-success)] focus-within:ring-[var(--tds-color-success)]'
              : 'border-[var(--tds-color-border)] focus-within:border-[var(--tds-color-primary)] focus-within:ring-[var(--tds-color-primary)]',
            disabled && 'opacity-40 cursor-not-allowed bg-[var(--tds-color-bg-elevated)]'
          )}
        >
          {prefix && (
            <span className="text-[var(--tds-color-text-tertiary)] shrink-0">{prefix}</span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              'flex-1 py-2.5 text-[15px] bg-transparent outline-none',
              'text-[var(--tds-color-text-primary)] placeholder:text-[var(--tds-color-text-tertiary)]',
              'disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
          {suffix && (
            <span className="text-[var(--tds-color-text-tertiary)] shrink-0">{suffix}</span>
          )}
        </div>
        {(errorText || helperText) && (
          <p
            className={cn(
              'text-sm',
              hasError ? 'text-[var(--tds-color-danger)]' : 'text-[var(--tds-color-text-secondary)]'
            )}
          >
            {errorText || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
