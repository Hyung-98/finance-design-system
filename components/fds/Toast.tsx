'use client'

import { cn } from '@/lib/cn'

export interface ToastProps {
  message: string
  description?: string
  variant?: 'default' | 'success' | 'danger' | 'warning'
  action?: { label: string; onClick: () => void }
  onClose?: () => void
}

const variantStyles = {
  default: 'bg-[var(--fds-color-gray-900)] dark:bg-[var(--fds-color-gray-100)] text-white dark:text-[var(--fds-color-gray-900)]',
  success: 'bg-[var(--fds-color-success)] text-white',
  danger: 'bg-[var(--fds-color-danger)] text-white',
  warning: 'bg-[var(--fds-color-warning)] text-white',
}

const Icon = ({ variant }: { variant: ToastProps['variant'] }) => {
  if (variant === 'success') {
    return (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (variant === 'danger') {
    return (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
  if (variant === 'warning') {
    return (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    )
  }
  return null
}

export function Toast({ message, description, variant = 'default', action, onClose }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex items-start gap-3 px-4 py-3 rounded-[var(--fds-radius-xl)] shadow-[var(--fds-shadow-lg)]',
        'max-w-sm w-full',
        variantStyles[variant]
      )}
    >
      <Icon variant={variant} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-5">{message}</p>
        {description && (
          <p className="text-sm opacity-80 mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {action && (
          <button
            onClick={action.onClick}
            className="text-sm font-semibold opacity-90 hover:opacity-100 underline underline-offset-2"
          >
            {action.label}
          </button>
        )}
        {onClose && (
          <button onClick={onClose} className="opacity-70 hover:opacity-100" aria-label="닫기">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
