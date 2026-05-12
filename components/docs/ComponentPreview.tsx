import { cn } from '@/lib/cn'

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
  label?: string
}

export function ComponentPreview({ children, className, label }: ComponentPreviewProps) {
  return (
    <div className="rounded-xl border border-[var(--fds-color-border)] overflow-hidden my-4">
      {label && (
        <div className="px-4 py-2 bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
          <span className="text-xs text-[var(--fds-color-text-tertiary)]">{label}</span>
        </div>
      )}
      <div
        className={cn(
          'p-8 flex flex-wrap items-center justify-center gap-4 bg-[var(--fds-color-bg-base)]',
          'bg-[radial-gradient(var(--fds-color-gray-200)_1px,transparent_1px)] dark:bg-[radial-gradient(var(--fds-color-border)_1px,transparent_1px)]',
          '[background-size:20px_20px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
