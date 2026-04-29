import { cn } from '@/lib/cn'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
}

const variantStyles = {
  primary: 'bg-[var(--tds-color-primary)] text-white hover:bg-[var(--tds-color-primary-hover)] active:scale-[0.98]',
  secondary: 'bg-[var(--tds-color-gray-100)] dark:bg-[var(--tds-color-border)] text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-gray-200)] dark:hover:bg-[var(--tds-color-border-strong)]',
  outline: 'bg-transparent border border-[var(--tds-color-border-strong)] text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-bg-elevated)]',
  ghost: 'bg-transparent text-[var(--tds-color-text-secondary)] hover:bg-[var(--tds-color-bg-elevated)] hover:text-[var(--tds-color-text-primary)]',
  danger: 'bg-[var(--tds-color-danger)] text-white hover:opacity-90',
}

const sizeStyles = {
  sm: 'h-8 px-3 text-sm rounded-[var(--tds-radius-md)] gap-1.5',
  md: 'h-10 px-4 text-[15px] rounded-[var(--tds-radius-lg)] gap-2',
  lg: 'h-12 px-6 text-base rounded-[var(--tds-radius-xl)] gap-2',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, fullWidth, disabled, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tds-color-primary)] focus-visible:ring-offset-2',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
