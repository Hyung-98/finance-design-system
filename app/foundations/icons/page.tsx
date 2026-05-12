'use client'

import { useState } from 'react'
import { iconList } from '@/lib/tokens'
import { iconComponents } from '@/components/fds/icons'

export default function IconsPage() {
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const filtered = iconList.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()) ||
    icon.description.includes(search)
  )

  const handleCopy = async (name: string) => {
    await navigator.clipboard.writeText(`<${name}Icon />`)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="max-w-4xl px-8 py-10">
      <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">Foundation</div>
      <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">아이콘 (Icons)</h1>
      <p className="text-lg text-[var(--fds-color-text-secondary)] mb-8 leading-relaxed">
        토스 아이콘 라이브러리입니다. 아이콘을 클릭하면 JSX 코드가 복사됩니다.
      </p>

      {/* Search */}
      <div className="relative mb-8">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--fds-color-text-tertiary)]"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="아이콘 검색 (예: Close, Search, Bell...)"
          className="w-full pl-10 pr-4 py-2.5 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)] text-[var(--fds-color-text-primary)] placeholder:text-[var(--fds-color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--fds-color-primary)] text-sm"
        />
      </div>

      <p className="text-sm text-[var(--fds-color-text-tertiary)] mb-4">
        {filtered.length}개의 아이콘
      </p>

      {/* Icon Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {filtered.map((icon) => {
          const IconComp = iconComponents[icon.name]
          return (
            <button
              key={icon.name}
              onClick={() => handleCopy(icon.name)}
              className="flex flex-col items-center gap-2 p-3 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)] hover:border-[var(--fds-color-primary)] hover:bg-[var(--fds-color-primary-subtle)] transition-all group"
              title={`${icon.name} — ${icon.description}`}
            >
              <div className="w-6 h-6 flex items-center justify-center text-[var(--fds-color-text-secondary)] group-hover:text-[var(--fds-color-primary)] transition-colors">
                {IconComp ? (
                  <IconComp size={20} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 12h6M12 9v6" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className="text-[10px] text-[var(--fds-color-text-tertiary)] group-hover:text-[var(--fds-color-primary)] text-center leading-tight break-all transition-colors">
                {copied === icon.name ? '복사됨 ✓' : icon.name}
              </span>
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[var(--fds-color-text-tertiary)]">
          <div className="flex justify-center mb-3 opacity-30">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-sm">검색 결과가 없습니다.</p>
        </div>
      )}

      {/* Usage */}
      <div className="mt-12 rounded-xl overflow-hidden border border-[var(--fds-color-border)]">
        <div className="px-4 py-2 bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
          <span className="text-xs font-mono text-[var(--fds-color-text-secondary)]">사용법</span>
        </div>
        <pre className="p-4 bg-[var(--fds-color-gray-900)] text-sm text-[var(--fds-color-gray-100)] overflow-x-auto">
          <code>{`import { SearchIcon, CloseIcon, BellIcon } from 'finance-design-system/icons'

// 기본 사용 (24px)
<SearchIcon />

// 크기 지정
<BellIcon size={20} />

// 색상 적용 (currentColor 상속)
<CloseIcon className="text-[var(--fds-color-text-secondary)]" />`}</code>
        </pre>
      </div>

      {/* All icons preview */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-[var(--fds-color-text-primary)] mb-6">전체 아이콘 목록</h2>
        <div className="space-y-2">
          {filtered.map((icon) => {
            const IconComp = iconComponents[icon.name]
            return (
              <div
                key={`list-${icon.name}`}
                className="flex items-center gap-4 px-4 py-3 rounded-[var(--fds-radius-lg)] hover:bg-[var(--fds-color-bg-elevated)] transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center text-[var(--fds-color-text-primary)] shrink-0">
                  {IconComp && <IconComp size={22} />}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-mono font-medium text-[var(--fds-color-text-primary)]">
                    {icon.name}Icon
                  </span>
                  <span className="text-sm text-[var(--fds-color-text-tertiary)] ml-3">
                    {icon.description}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(icon.name)}
                  className="text-xs text-[var(--fds-color-text-tertiary)] hover:text-[var(--fds-color-primary)] font-mono px-2 py-1 rounded hover:bg-[var(--fds-color-primary-subtle)] transition-colors"
                >
                  {copied === icon.name ? '복사됨 ✓' : `<${icon.name}Icon />`}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
