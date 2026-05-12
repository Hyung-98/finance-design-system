'use client'

import { cn } from '@/lib/cn'
import { type InputHTMLAttributes, forwardRef } from 'react'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  description?: string
  size?: 'sm' | 'md'
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, description, size = 'md', disabled, className, ...props }, ref) => {
    const trackSize = size === 'sm' ? 'w-8 h-4' : 'w-11 h-6'
    const thumbSize = size === 'sm' ? 'w-3 h-3' : 'w-5 h-5'
    const thumbTranslate = size === 'sm' ? 'peer-checked:translate-x-4' : 'peer-checked:translate-x-5'

    return (
      <label
        className={cn(
          'flex items-center gap-3 cursor-pointer',
          disabled && 'opacity-40 cursor-not-allowed'
        )}
      >
        <div className="relative shrink-0">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              'rounded-full transition-colors duration-200',
              'bg-[var(--fds-color-border-strong)] peer-checked:bg-[var(--fds-color-primary)]',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--fds-color-primary)] peer-focus-visible:ring-offset-2',
              trackSize,
              className
            )}
          />
          <div
            className={cn(
              'absolute top-0.5 left-0.5 bg-white rounded-full shadow transition-transform duration-200',
              thumbSize,
              thumbTranslate
            )}
          />
        </div>
        {(label || description) && (
          <div>
            {label && (
              <p className="text-sm font-medium text-[var(--fds-color-text-primary)]">{label}</p>
            )}
            {description && (
              <p className="text-sm text-[var(--fds-color-text-secondary)] mt-0.5">{description}</p>
            )}
          </div>
        )}
      </label>
    )
  }
)

Toggle.displayName = 'Toggle'
