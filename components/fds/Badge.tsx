import { cn } from '@/lib/cn'

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline'
  size?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  primary: 'bg-[var(--fds-color-primary-subtle)] text-[var(--fds-color-primary)]',
  secondary: 'bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-secondary)]',
  success: 'bg-[var(--fds-color-success-subtle)] text-[var(--fds-color-success)]',
  danger: 'bg-[var(--fds-color-danger-subtle)] text-[var(--fds-color-danger)]',
  warning: 'bg-[var(--fds-color-warning-subtle)] text-[var(--fds-color-warning)]',
  outline: 'border border-[var(--fds-color-border-strong)] text-[var(--fds-color-text-secondary)]',
}

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5 rounded-[var(--fds-radius-sm)]',
  md: 'text-sm px-2.5 py-1 rounded-[var(--fds-radius-md)]',
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
