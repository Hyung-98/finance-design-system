import { cn } from '@/lib/cn'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'white' | 'current'
  className?: string
}

const sizeMap = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' }
const colorMap = {
  primary: 'text-[var(--tds-color-primary)]',
  white: 'text-white',
  current: 'text-current',
}

export function Spinner({ size = 'md', variant = 'primary', className }: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin', sizeMap[size], colorMap[variant], className)}
      fill="none"
      viewBox="0 0 24 24"
      aria-label="로딩 중"
      role="status"
    >
      <circle
        className="opacity-20"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="3"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
