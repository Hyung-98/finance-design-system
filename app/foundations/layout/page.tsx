'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { breakpointTokens, zIndexTokens } from '@/lib/tokens'

function GridDemo({ cols, label }: { cols: number; label: string }) {
  return (
    <div>
      <p className="text-xs font-mono text-[var(--tds-color-text-secondary)] mb-2">{label}</p>
      <div
        className="w-full gap-2 p-3 bg-[var(--tds-color-bg-elevated)] rounded-[var(--tds-radius-lg)]"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={i}
            className="h-8 rounded-[var(--tds-radius-sm)] bg-[var(--tds-color-primary)] opacity-30"
          />
        ))}
      </div>
    </div>
  )
}

export default function LayoutPage() {
  const [showGrid, setShowGrid] = useState(false)

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">Foundation</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">레이아웃 (Layout)</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          일관된 레이아웃을 위한 그리드 시스템, 반응형 브레이크포인트, Z-Index 레이어 계층을 정의합니다.
        </p>

        <section id="breakpoints">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-6">브레이크포인트</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-4 text-sm">
            모바일 우선(Mobile First) 방식으로 설계합니다. 작은 화면 기준으로 스타일을 작성하고 큰 화면으로 확장하세요.
          </p>
          <div className="space-y-3 mb-6">
            {Object.entries(breakpointTokens).map(([name, token]) => {
              const px = parseInt(token.value)
              const maxPx = 1536
              return (
                <div key={name} className="flex items-center gap-4">
                  <div className="w-8 text-xs font-mono font-bold text-[var(--tds-color-primary)] shrink-0">{name}</div>
                  <div className="flex-1 relative h-7 bg-[var(--tds-color-bg-elevated)] rounded-[var(--tds-radius-sm)] overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-[var(--tds-color-primary)] opacity-20 rounded-[var(--tds-radius-sm)]"
                      style={{ width: `${(px / maxPx) * 100}%` }}
                    />
                    <div className="absolute inset-0 flex items-center px-3 gap-3">
                      <span className="text-xs font-mono text-[var(--tds-color-primary)] font-semibold">{token.value}</span>
                      <span className="text-xs text-[var(--tds-color-text-tertiary)]">{token.description}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--tds-color-border)]">
            <pre className="p-4 bg-[var(--tds-color-gray-900)] text-sm text-[var(--tds-color-gray-100)] overflow-x-auto">
              <code>{`/* Tailwind 브레이크포인트 사용 */
<div className="text-sm md:text-base lg:text-lg">
  반응형 텍스트
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  그리드 레이아웃
</div>`}</code>
            </pre>
          </div>
        </section>

        <section id="grid" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">컬럼 그리드</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-6 text-sm">
            화면 크기에 따라 컬럼 수를 조정하는 반응형 그리드를 사용합니다.
          </p>
          <div className="space-y-4">
            <GridDemo cols={4} label="모바일 — 4 columns (375px~)" />
            <GridDemo cols={8} label="태블릿 — 8 columns (768px~)" />
            <GridDemo cols={12} label="데스크톱 — 12 columns (1024px~)" />
          </div>
          <div className="mt-4 p-4 rounded-[var(--tds-radius-lg)] bg-[var(--tds-color-bg-elevated)]">
            <div className="grid grid-cols-3 gap-4 text-sm text-[var(--tds-color-text-secondary)]">
              {[
                ['거터(Gutter)', '16px (모바일)', '24px (데스크톱)'],
                ['마진(Margin)', '20px (모바일)', '32px (데스크톱)'],
                ['최대 너비', '—', '1280px'],
              ].map(([label, mobile, desktop]) => (
                <div key={label} className="col-span-3 flex gap-4">
                  <span className="w-28 shrink-0 font-medium text-[var(--tds-color-text-primary)]">{label}</span>
                  <span className="flex-1">{mobile}</span>
                  <span className="flex-1">{desktop}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="z-index" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Z-Index 레이어</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-6 text-sm">
            레이어 충돌을 방지하기 위해 정의된 Z-Index 계층입니다. 임의의 숫자 대신 반드시 토큰을 사용하세요.
          </p>
          <div className="relative h-64 rounded-[var(--tds-radius-xl)] border border-[var(--tds-color-border)] overflow-hidden bg-[var(--tds-color-bg-elevated)] flex items-end">
            {Object.entries(zIndexTokens).map(([name, token], i) => {
              const colors = ['bg-[#E5E8EB]', 'bg-[#B0B8C1]', 'bg-[#3182F6]/30', 'bg-[#3182F6]/50', 'bg-[#3182F6]/70', 'bg-[#3182F6]/90', 'bg-[#3182F6]']
              return (
                <div
                  key={name}
                  className={`absolute bottom-0 left-0 right-0 flex items-start px-4 pt-2 ${colors[i]} rounded-t-[var(--tds-radius-lg)] border-t border-white/20`}
                  style={{ height: `${(i + 1) * 36}px` }}
                >
                  <span className="text-xs font-mono font-semibold text-white drop-shadow">
                    {token.variable} = {token.value}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 rounded-xl border border-[var(--tds-color-border)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">토큰</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">값</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">사용 컴포넌트</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(zIndexTokens).map(([name, token], i, arr) => (
                  <tr key={name} className={i < arr.length - 1 ? 'border-b border-[var(--tds-color-border)]' : ''}>
                    <td className="px-4 py-3 font-mono text-xs text-[var(--tds-color-primary)]">{token.variable}</td>
                    <td className="px-4 py-3 font-mono text-sm text-[var(--tds-color-text-secondary)]">{token.value}</td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="container" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">컨테이너 패턴</h2>
          <div className="rounded-xl overflow-hidden border border-[var(--tds-color-border)]">
            <pre className="p-4 bg-[var(--tds-color-gray-900)] text-sm text-[var(--tds-color-gray-100)] overflow-x-auto">
              <code>{`/* 표준 페이지 컨테이너 */
<main className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12">
  {children}
</main>

/* 좁은 콘텐츠 (폼, 카드) */
<div className="max-w-md mx-auto px-5">
  {children}
</div>

/* 풀 블리드 (히어로, 배너) */
<section className="w-full">
  <div className="max-w-screen-xl mx-auto px-5 md:px-8">
    {children}
  </div>
</section>`}</code>
            </pre>
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
