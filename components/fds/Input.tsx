import { cn } from '@/lib/cn'
import { type InputHTMLAttributes, forwardRef, useId } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string
  helperText?: string
  errorText?: string
  status?: 'default' | 'error' | 'success'
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorText, status = 'default', prefix, suffix, className, disabled, id, ...props }, ref) => {
    const uid = useId()
    const inputId = id ?? uid
    const descId = `${inputId}-desc`
    const hasError = status === 'error' || !!errorText
    const hasSuccess = status === 'success'
    const hasDesc = !!(errorText || helperText)

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[var(--fds-color-text-primary)]">
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center gap-2 px-3.5 rounded-[var(--fds-radius-lg)] border transition-all',
            'bg-[var(--fds-color-bg-base)]',
            'focus-within:ring-2 focus-within:ring-offset-0',
            hasError
              ? 'border-[var(--fds-color-danger)] focus-within:ring-[var(--fds-color-danger)]'
              : hasSuccess
              ? 'border-[var(--fds-color-success)] focus-within:ring-[var(--fds-color-success)]'
              : 'border-[var(--fds-color-border)] focus-within:border-[var(--fds-color-primary)] focus-within:ring-[var(--fds-color-primary)]',
            disabled && 'opacity-40 cursor-not-allowed bg-[var(--fds-color-bg-elevated)]'
          )}
        >
          {prefix && (
            <span aria-hidden="true" className="text-[var(--fds-color-text-tertiary)] shrink-0">{prefix}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={hasDesc ? descId : undefined}
            className={cn(
              'flex-1 py-2.5 text-[15px] bg-transparent outline-none',
              'text-[var(--fds-color-text-primary)] placeholder:text-[var(--fds-color-text-tertiary)]',
              'disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
          {suffix && (
            <span aria-hidden="true" className="text-[var(--fds-color-text-tertiary)] shrink-0">{suffix}</span>
          )}
        </div>
        {hasDesc && (
          <p
            id={descId}
            role={hasError ? 'alert' : undefined}
            className={cn(
              'text-sm',
              hasError ? 'text-[var(--fds-color-danger)]' : 'text-[var(--fds-color-text-secondary)]'
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
