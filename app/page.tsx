import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Toss Design System Guide' }

const features = [
  {
    icon: '🎨',
    title: 'Foundation',
    desc: '색상, 타이포그래피, 간격, 아이콘 등 디자인 토큰 가이드',
    href: '/foundations/color',
  },
  {
    icon: '🧩',
    title: '컴포넌트',
    desc: 'Button, Input, Badge 등 인터랙티브 데모와 Props 문서',
    href: '/components/button',
  },
  {
    icon: '📐',
    title: '디자인 원칙',
    desc: '토스의 디자인 철학과 접근성, Do/Don\'t 가이드',
    href: '/principles',
  },
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: '프로젝트 설치부터 첫 컴포넌트 렌더링까지 빠른 시작 가이드',
    href: '/getting-started',
  },
]

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--tds-color-primary-subtle)] text-[var(--tds-color-primary)] text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--tds-color-primary)] animate-pulse" />
          Developer Guide
        </div>
        <h1 className="text-5xl font-bold text-[var(--tds-color-text-primary)] leading-tight mb-4">
          Toss Design System
        </h1>
        <p className="text-xl text-[var(--tds-color-text-secondary)] leading-relaxed max-w-2xl">
          토스의 디자인 시스템 가이드입니다. 일관된 사용자 경험을 위한 컴포넌트, 토큰, 디자인 원칙을 개발자 관점에서 정리했습니다.
        </p>
        <div className="flex gap-3 mt-8">
          <Link
            href="/getting-started"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--tds-radius-xl)] bg-[var(--tds-color-primary)] text-white font-semibold text-[15px] hover:bg-[var(--tds-color-primary-hover)] transition-colors"
          >
            시작하기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/components/button"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--tds-radius-xl)] bg-[var(--tds-color-bg-elevated)] text-[var(--tds-color-text-primary)] font-semibold text-[15px] hover:bg-[var(--tds-color-gray-200)] dark:hover:bg-[var(--tds-color-border)] transition-colors"
          >
            컴포넌트 보기
          </Link>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="group p-6 rounded-[var(--tds-radius-2xl)] border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)] hover:border-[var(--tds-color-primary)] hover:shadow-[var(--tds-shadow-md)] transition-all"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h2 className="text-base font-bold text-[var(--tds-color-text-primary)] mb-1 group-hover:text-[var(--tds-color-primary)] transition-colors">
              {f.title}
            </h2>
            <p className="text-sm text-[var(--tds-color-text-secondary)]">{f.desc}</p>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 p-6 rounded-[var(--tds-radius-2xl)] bg-[var(--tds-color-bg-elevated)] flex flex-wrap gap-8">
        {[
          { label: '컴포넌트', value: '7+' },
          { label: '디자인 토큰', value: '50+' },
          { label: '아이콘', value: '32+' },
          { label: '다크모드', value: '지원' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold text-[var(--tds-color-primary)]">{s.value}</div>
            <div className="text-sm text-[var(--tds-color-text-secondary)] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
