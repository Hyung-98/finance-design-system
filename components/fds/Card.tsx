import { cn } from '@/lib/cn'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outline'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  interactive?: boolean
  className?: string
  onClick?: () => void
}

const variantStyles = {
  default: 'bg-[var(--fds-color-bg-base)] border border-[var(--fds-color-border)]',
  elevated: 'bg-[var(--fds-color-bg-base)] shadow-[var(--fds-shadow-md)]',
  outline: 'bg-transparent border border-[var(--fds-color-border)]',
}
const paddingStyles = { none: '', sm: 'p-4', md: 'p-5', lg: 'p-6' }

export function Card({ children, variant = 'default', padding = 'md', interactive, className, onClick }: CardProps) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'rounded-[var(--fds-radius-xl)] w-full text-left',
        variantStyles[variant],
        paddingStyles[padding],
        interactive && 'cursor-pointer hover:shadow-[var(--fds-shadow-lg)] transition-shadow',
        onClick && 'cursor-pointer hover:shadow-[var(--fds-shadow-lg)] transition-shadow active:scale-[0.99]',
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-base font-bold text-[var(--fds-color-text-primary)]', className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-sm text-[var(--fds-color-text-secondary)] mt-1', className)}>{children}</p>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mt-4 flex items-center gap-2', className)}>{children}</div>
}
