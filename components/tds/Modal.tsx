'use client'

import { useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 50 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className={cn(
          'relative w-full bg-[var(--tds-color-bg-base)] rounded-[var(--tds-radius-2xl)] shadow-[var(--tds-shadow-xl)]',
          'animate-in fade-in zoom-in-95 duration-200',
          sizeMap[size]
        )}
      >
        {/* Header */}
        {(title || description) && (
          <div className="px-6 pt-6 pb-4">
            {title && (
              <h2 id="modal-title" className="text-lg font-bold text-[var(--tds-color-text-primary)]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-[var(--tds-color-text-secondary)]">{description}</p>
            )}
          </div>
        )}
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--tds-color-text-tertiary)] hover:text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-bg-elevated)] transition-colors"
          aria-label="닫기"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Content */}
        {children && (
          <div className="px-6 pb-4 text-sm text-[var(--tds-color-text-secondary)]">
            {children}
          </div>
        )}
        {/* Footer */}
        {footer && (
          <div className="px-6 pb-6 flex gap-2 justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
