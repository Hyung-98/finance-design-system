import { cn } from '@/lib/cn'

export interface SkeletonProps {
  className?: string
  rounded?: 'sm' | 'md' | 'lg' | 'full'
}

const roundedMap = {
  sm: 'rounded-[var(--tds-radius-sm)]',
  md: 'rounded-[var(--tds-radius-md)]',
  lg: 'rounded-[var(--tds-radius-lg)]',
  full: 'rounded-full',
}

export function Skeleton({ className, rounded = 'md' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'animate-pulse bg-[var(--tds-color-gray-200)] dark:bg-[var(--tds-color-border)]',
        roundedMap[rounded],
        className
      )}
    />
  )
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
          rounded="md"
        />
      ))}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="p-4 rounded-[var(--tds-radius-xl)] border border-[var(--tds-color-border)] space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10" rounded="full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3.5 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  )
}
