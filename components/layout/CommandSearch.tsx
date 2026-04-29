'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { flattenNavigation, navigation } from '@/lib/navigation'
import { cn } from '@/lib/cn'

const allItems = flattenNavigation(navigation).filter((item) => item.href)

function highlightMatch(text: string, query: string) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-[var(--tds-color-primary-subtle)] text-[var(--tds-color-primary)] rounded px-0.5 not-italic font-semibold">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

function getCategoryLabel(href: string) {
  if (href.startsWith('/foundations')) return 'Foundation'
  if (href.startsWith('/components')) return '컴포넌트'
  if (href.startsWith('/patterns')) return '패턴'
  if (href === '/changelog') return '문서'
  return '일반'
}

export function CommandSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = query
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : allItems.slice(0, 8)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const go = useCallback((href: string) => {
    router.push(href)
    close()
  }, [router, close])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      go(results[activeIndex].href)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-start justify-center pt-[20vh]"
      style={{ zIndex: 600 }}
      onClick={close}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="검색"
        className={cn(
          'relative w-full max-w-lg bg-[var(--tds-color-bg-base)]',
          'rounded-[var(--tds-radius-2xl)] shadow-[var(--tds-shadow-xl)]',
          'border border-[var(--tds-color-border)]',
          'animate-in fade-in zoom-in-95 duration-150'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 검색 입력 */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--tds-color-border)]">
          <svg className="w-5 h-5 text-[var(--tds-color-text-tertiary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="검색 (컴포넌트, 페이지...)"
            className="flex-1 bg-transparent text-sm text-[var(--tds-color-text-primary)] placeholder:text-[var(--tds-color-text-tertiary)] outline-none"
          />
          <kbd className="hidden sm:flex items-center gap-0.5 text-[10px] font-medium text-[var(--tds-color-text-tertiary)] bg-[var(--tds-color-bg-elevated)] border border-[var(--tds-color-border)] px-1.5 py-0.5 rounded">
            Esc
          </kbd>
        </div>

        {/* 결과 목록 */}
        <ul className="py-2 max-h-72 overflow-y-auto" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-[var(--tds-color-text-tertiary)]">
              "{query}"에 대한 결과가 없습니다
            </li>
          ) : (
            results.map((item, i) => (
              <li key={item.href} role="option" aria-selected={i === activeIndex}>
                <button
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                    i === activeIndex
                      ? 'bg-[var(--tds-color-primary-subtle)]'
                      : 'hover:bg-[var(--tds-color-bg-elevated)]'
                  )}
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <span className="text-xs font-medium text-[var(--tds-color-text-tertiary)] bg-[var(--tds-color-bg-elevated)] px-1.5 py-0.5 rounded shrink-0">
                    {getCategoryLabel(item.href)}
                  </span>
                  <span className={cn('text-sm', i === activeIndex ? 'text-[var(--tds-color-primary)]' : 'text-[var(--tds-color-text-primary)]')}>
                    {highlightMatch(item.title, query)}
                  </span>
                  <span className="ml-auto text-xs text-[var(--tds-color-text-tertiary)] truncate max-w-[120px]">
                    {item.href}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>

        {/* 하단 힌트 */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-[var(--tds-color-border)] text-[10px] text-[var(--tds-color-text-tertiary)]">
          <span className="flex items-center gap-1">
            <kbd className="bg-[var(--tds-color-bg-elevated)] border border-[var(--tds-color-border)] px-1 py-0.5 rounded">↑</kbd>
            <kbd className="bg-[var(--tds-color-bg-elevated)] border border-[var(--tds-color-border)] px-1 py-0.5 rounded">↓</kbd>
            이동
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-[var(--tds-color-bg-elevated)] border border-[var(--tds-color-border)] px-1.5 py-0.5 rounded">Enter</kbd>
            선택
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-[var(--tds-color-bg-elevated)] border border-[var(--tds-color-border)] px-1.5 py-0.5 rounded">Esc</kbd>
            닫기
          </span>
        </div>
      </div>
    </div>
  )
}
