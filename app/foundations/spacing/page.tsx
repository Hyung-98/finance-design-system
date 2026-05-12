import type { Metadata } from 'next'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { spacingTokens, radiusTokens, shadowTokens } from '@/lib/tokens'

export const metadata: Metadata = { title: '간격 (Spacing)' }

export default function SpacingPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">Foundation</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">간격 (Spacing)</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          4px 베이스 그리드 시스템으로 일관된 레이아웃과 컴포넌트 간격을 유지합니다.
        </p>

        <section id="spacing-scale">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">Spacing Scale</h2>
          <div className="space-y-3">
            {Object.entries(spacingTokens).map(([step, token]) => {
              const px = parseInt(token.value)
              return (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-20 shrink-0">
                    <code className="text-xs font-mono text-[var(--fds-color-primary)]">{token.variable.replace('--fds-spacing-', 'spacing-')}</code>
                    <p className="text-xs text-[var(--fds-color-text-tertiary)] mt-0.5">{token.value}</p>
                  </div>
                  <div className="flex-1">
                    <div
                      className="h-5 rounded bg-[var(--fds-color-primary)] opacity-70"
                      style={{ width: `${Math.min(px * 4, 400)}px`, minWidth: 4 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="border-radius" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">Border Radius</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(radiusTokens).map(([name, token]) => (
              <div key={name} className="flex flex-col items-center gap-2 p-4 border border-[var(--fds-color-border)] rounded-xl">
                <div
                  className="w-16 h-16 bg-[var(--fds-color-primary-subtle)] border-2 border-[var(--fds-color-primary)]"
                  style={{ borderRadius: token.value }}
                />
                <div className="text-center">
                  <code className="text-xs font-mono text-[var(--fds-color-primary)]">radius-{name}</code>
                  <p className="text-xs text-[var(--fds-color-text-tertiary)] mt-0.5">{token.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="shadow" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">Shadow</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(shadowTokens).map(([name, token]) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 p-6 rounded-[var(--fds-radius-xl)] bg-[var(--fds-color-bg-base)] border border-[var(--fds-color-border)]"
                style={{ boxShadow: token.value }}
              >
                <code className="text-xs font-mono text-[var(--fds-color-primary)]">shadow-{name}</code>
                <p className="text-xs text-[var(--fds-color-text-tertiary)] text-center">{token.value}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
