'use client'

import { useEffect, useRef, useId, type ReactNode } from 'react'
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

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }: ModalProps) {
  const uid = useId()
  const titleId = `${uid}-title`
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'

    const previouslyFocused = document.activeElement as HTMLElement | null

    const focusFirst = () => {
      const els = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      els?.[0]?.focus()
    }
    focusFirst()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const els = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
      if (!els.length) return
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 50 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className={cn(
          'relative w-full bg-[var(--fds-color-bg-base)] rounded-[var(--fds-radius-2xl)] shadow-[var(--fds-shadow-xl)]',
          'animate-in fade-in zoom-in-95 duration-200',
          sizeMap[size]
        )}
      >
        {(title || description) && (
          <div className="px-6 pt-6 pb-4">
            {title && (
              <h2 id={titleId} className="text-lg font-bold text-[var(--fds-color-text-primary)]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-[var(--fds-color-text-secondary)]">{description}</p>
            )}
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--fds-color-text-tertiary)] hover:text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)]"
          aria-label="닫기"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children && (
          <div className="px-6 pb-4 text-sm text-[var(--fds-color-text-secondary)]">
            {children}
          </div>
        )}
        {footer && (
          <div className="px-6 pb-6 flex gap-2 justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
