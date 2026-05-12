'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navigation, type NavItem } from '@/lib/navigation'
import { cn } from '@/lib/cn'

function NavGroup({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = item.href === pathname
  const isChildActive = item.children?.some((c) => c.href === pathname)
  const [open, setOpen] = useState(isActive || !!isChildActive)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'block px-3 py-1.5 text-sm rounded-lg transition-colors',
          isActive
            ? 'bg-[var(--fds-color-primary-subtle)] text-[var(--fds-color-primary)] font-medium'
            : 'text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)]'
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-1.5 text-sm rounded-lg transition-colors',
          isChildActive || isActive
            ? 'text-[var(--fds-color-text-primary)] font-semibold'
            : 'text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)]'
        )}
      >
        <span>{item.title}</span>
        <svg
          className={cn('w-4 h-4 transition-transform', open ? 'rotate-90' : '')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div className="ml-3 mt-1 border-l border-[var(--fds-color-border)] pl-3 space-y-0.5">
          {item.children.map((child) => (
            <NavGroup key={child.href} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-[var(--sidebar-width)] border-r border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)] overflow-y-auto"
      style={{ zIndex: 10 }}
    >
      <nav className="px-4 py-6 space-y-1">
        {navigation.map((item) => (
          <NavGroup key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  )
}
