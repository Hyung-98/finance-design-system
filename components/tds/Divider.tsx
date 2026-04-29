import { cn } from '@/lib/cn'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

const spacingH = { none: '', sm: 'my-3', md: 'my-5', lg: 'my-8' }
const spacingV = { none: '', sm: 'mx-3', md: 'mx-5', lg: 'mx-8' }

export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  spacing = 'md',
  label,
  className,
}: DividerProps) {
  const borderStyle = variant === 'dashed' ? 'border-dashed' : 'border-solid'

  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'self-stretch w-px border-l border-[var(--tds-color-border)]',
          borderStyle,
          spacingV[spacing],
          className
        )}
      />
    )
  }

  if (label) {
    return (
      <div className={cn('flex items-center gap-3', spacingH[spacing], className)} role="separator">
        <div className={cn('flex-1 border-t border-[var(--tds-color-border)]', borderStyle)} />
        <span className="text-xs text-[var(--tds-color-text-tertiary)] whitespace-nowrap">{label}</span>
        <div className={cn('flex-1 border-t border-[var(--tds-color-border)]', borderStyle)} />
      </div>
    )
  }

  return (
    <hr
      className={cn(
        'border-0 border-t border-[var(--tds-color-border)]',
        borderStyle,
        spacingH[spacing],
        className
      )}
    />
  )
}
