'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { CommandSearch } from './CommandSearch'

function DSLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="6" fill="#3182F6" />
      <rect x="5" y="5" width="4" height="4" rx="1" fill="white" />
      <rect x="11" y="5" width="4" height="4" rx="1" fill="white" fillOpacity="0.6" />
      <rect x="5" y="11" width="4" height="4" rx="1" fill="white" fillOpacity="0.6" />
      <rect x="11" y="11" width="4" height="4" rx="1" fill="white" fillOpacity="0.3" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07-6.07l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header
      className="fixed top-0 left-0 right-0 h-[var(--header-height)] border-b border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)]"
      style={{ zIndex: 20 }}
    >
      <div className="flex items-center h-full px-6 gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <DSLogo />
          <span className="font-semibold text-sm text-[var(--tds-color-text-primary)]">
            Finance Design System
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--tds-color-primary-subtle)] text-[var(--tds-color-primary)] font-medium">
            Guide
          </span>
        </Link>

        <div className="flex-1" />

        {/* Cmd+K 검색 트리거 */}
        <button
          onClick={() => {
            const e = new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
            window.dispatchEvent(e)
          }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-[var(--tds-radius-lg)] border border-[var(--tds-color-border)] text-sm text-[var(--tds-color-text-tertiary)] hover:border-[var(--tds-color-border-strong)] hover:text-[var(--tds-color-text-secondary)] transition-colors bg-[var(--tds-color-bg-elevated)]"
          aria-label="검색"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs">검색</span>
          <kbd className="flex items-center gap-0.5 text-[10px] font-medium bg-[var(--tds-color-bg-base)] border border-[var(--tds-color-border)] px-1.5 py-0.5 rounded ml-1">
            ⌘K
          </kbd>
        </button>

        <CommandSearch />

        <a
          href="https://github.com/toss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--tds-color-text-secondary)] hover:text-[var(--tds-color-text-primary)] transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-lg text-[var(--tds-color-text-secondary)] hover:text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-bg-elevated)] transition-colors"
            aria-label="다크모드 토글"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        )}
      </div>
    </header>
  )
}
