'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

interface TocItem {
  id: string
  text: string
  level: number
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w가-힣-]/g, '')
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3')

    // Ensure every heading has a stable id
    headings.forEach((el) => {
      if (!el.id && el.textContent) {
        el.id = slugify(el.textContent)
      }
    })

    const tocItems: TocItem[] = Array.from(headings)
      .filter((el) => el.id)
      .map((el, idx) => ({
        id: el.id || `heading-${idx}`,
        text: el.textContent ?? '',
        level: parseInt(el.tagName.slice(1)),
      }))

    setItems(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0% -70% 0%' }
    )
    headings.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!items.length) return null

  return (
    <aside className="fixed right-6 top-[calc(var(--header-height)+2rem)] w-[var(--toc-width)] hidden xl:block">
      <p className="text-xs font-semibold text-[var(--tds-color-text-tertiary)] uppercase tracking-wider mb-3">
        이 페이지에서
      </p>
      <nav className="space-y-1">
        {items.map((item, idx) => (
          <a
            key={`${item.id}-${idx}`}
            href={`#${item.id}`}
            className={cn(
              'block text-sm py-0.5 transition-colors',
              item.level === 3 ? 'pl-4' : '',
              active === item.id
                ? 'text-[var(--tds-color-primary)] font-medium'
                : 'text-[var(--tds-color-text-secondary)] hover:text-[var(--tds-color-text-primary)]'
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}
