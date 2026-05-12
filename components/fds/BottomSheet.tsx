'use client'

import { useEffect, useRef, useId, type ReactNode } from 'react'
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

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function BottomSheet({ open, onClose, title, description, children, footer }: BottomSheetProps) {
  const uid = useId()
  const titleId = `${uid}-title`
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'

    const previouslyFocused = document.activeElement as HTMLElement | null
    const els = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
    els?.[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
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
    <div className="fixed inset-0 flex items-end justify-center" style={{ zIndex: 300 }}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cn(
          'relative w-full max-w-lg bg-[var(--fds-color-bg-base)]',
          'rounded-t-[var(--fds-radius-2xl)] shadow-[var(--fds-shadow-xl)]',
          'animate-in slide-in-from-bottom duration-300'
        )}
      >
        <div className="flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-10 h-1 rounded-full bg-[var(--fds-color-border-strong)]" />
        </div>

        {(title || description) && (
          <div className="px-6 pt-3 pb-4">
            {title && (
              <h2 id={titleId} className="text-lg font-bold text-[var(--fds-color-text-primary)]">{title}</h2>
            )}
            {description && (
              <p className="text-sm text-[var(--fds-color-text-secondary)] mt-1">{description}</p>
            )}
          </div>
        )}

        {children && (
          <div className="px-6 pb-4 text-sm text-[var(--fds-color-text-secondary)]">
            {children}
          </div>
        )}

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
