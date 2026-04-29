'use client'

import { cn } from '@/lib/cn'
import { type InputHTMLAttributes, forwardRef } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, disabled, className, ...props }, ref) => {
    return (
      <label
        className={cn(
          'flex items-start gap-3 cursor-pointer',
          disabled && 'opacity-40 cursor-not-allowed'
        )}
      >
        <div className="relative mt-0.5 shrink-0">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 rounded-[var(--tds-radius-sm)] border-2 transition-all',
              'border-[var(--tds-color-border-strong)]',
              'peer-checked:bg-[var(--tds-color-primary)] peer-checked:border-[var(--tds-color-primary)]',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--tds-color-primary)] peer-focus-visible:ring-offset-2',
              className
            )}
          />
          <svg
            className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 10l4 4 8-8" />
          </svg>
        </div>
        {(label || description) && (
          <div>
            {label && (
              <p className="text-sm font-medium text-[var(--tds-color-text-primary)]">{label}</p>
            )}
            {description && (
              <p className="text-sm text-[var(--tds-color-text-secondary)] mt-0.5">{description}</p>
            )}
          </div>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
