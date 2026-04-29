import { cn } from '@/lib/cn'

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
  label?: string
}

export function ComponentPreview({ children, className, label }: ComponentPreviewProps) {
  return (
    <div className="rounded-xl border border-[var(--tds-color-border)] overflow-hidden my-4">
      {label && (
        <div className="px-4 py-2 bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
          <span className="text-xs text-[var(--tds-color-text-tertiary)]">{label}</span>
        </div>
      )}
      <div
        className={cn(
          'p-8 flex flex-wrap items-center justify-center gap-4 bg-[var(--tds-color-bg-base)]',
          'bg-[radial-gradient(var(--tds-color-gray-200)_1px,transparent_1px)] dark:bg-[radial-gradient(var(--tds-color-border)_1px,transparent_1px)]',
          '[background-size:20px_20px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
