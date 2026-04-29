import { cn } from '@/lib/cn'

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline'
  size?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  primary: 'bg-[var(--tds-color-primary-subtle)] text-[var(--tds-color-primary)]',
  secondary: 'bg-[var(--tds-color-bg-elevated)] text-[var(--tds-color-text-secondary)]',
  success: 'bg-[var(--tds-color-success-subtle)] text-[var(--tds-color-success)]',
  danger: 'bg-[var(--tds-color-danger-subtle)] text-[var(--tds-color-danger)]',
  warning: 'bg-[var(--tds-color-warning-subtle)] text-[var(--tds-color-warning)]',
  outline: 'border border-[var(--tds-color-border-strong)] text-[var(--tds-color-text-secondary)]',
}

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5 rounded-[var(--tds-radius-sm)]',
  md: 'text-sm px-2.5 py-1 rounded-[var(--tds-radius-md)]',
}

export function Badge({ variant = 'primary', size = 'md', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
