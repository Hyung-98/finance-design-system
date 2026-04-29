'use client'

import { useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
  snapPoints?: ('full' | 'half' | 'auto')
}

export function BottomSheet({ open, onClose, title, description, children, footer }: BottomSheetProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-end justify-center" style={{ zIndex: 300 }}>
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'bs-title' : undefined}
        className={cn(
          'relative w-full max-w-lg bg-[var(--tds-color-bg-base)]',
          'rounded-t-[var(--tds-radius-2xl)] shadow-[var(--tds-shadow-xl)]',
          'animate-in slide-in-from-bottom duration-300'
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[var(--tds-color-border-strong)]" />
        </div>

        {/* Header */}
        {(title || description) && (
          <div className="px-6 pt-3 pb-4">
            {title && (
              <h2 id="bs-title" className="text-lg font-bold text-[var(--tds-color-text-primary)]">{title}</h2>
            )}
            {description && (
              <p className="text-sm text-[var(--tds-color-text-secondary)] mt-1">{description}</p>
            )}
          </div>
        )}

        {/* Content */}
        {children && (
          <div className="px-6 pb-4 text-sm text-[var(--tds-color-text-secondary)]">
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="px-6 pb-8 pt-2 flex flex-col gap-2">
            {footer}
          </div>
        )}

        {!footer && <div className="pb-6" />}
      </div>
    </div>
  )
}
