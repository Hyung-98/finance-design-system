import type { Metadata } from 'next'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { typographyTokens } from '@/lib/tokens'

export const metadata: Metadata = { title: '타이포그래피' }

export default function TypographyPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">Foundation</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">타이포그래피</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          토스는 Pretendard 폰트를 기반으로 명확한 정보 계층을 표현합니다.
        </p>

        <section id="font-family">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Font Family</h2>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              { name: 'Pretendard', desc: '기본 본문 및 UI 텍스트', sample: '가나다라 ABCDEFG 0123456789', mono: false },
              { name: 'JetBrains Mono', desc: '코드, 숫자, 기술적 콘텐츠', sample: 'const value = 42;', mono: true },
            ].map((f) => (
              <div key={f.name} className="p-5 rounded-[var(--fds-radius-xl)] border border-[var(--fds-color-border)]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--fds-color-text-primary)]">{f.name}</p>
                    <p className="text-sm text-[var(--fds-color-text-secondary)]">{f.desc}</p>
                  </div>
                </div>
                <p
                  className="text-2xl text-[var(--fds-color-text-primary)]"
                  style={{ fontFamily: f.mono ? 'JetBrains Mono, monospace' : 'Pretendard, sans-serif' }}
                >
                  {f.sample}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="scale">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">타입 스케일</h2>
          <div className="space-y-1">
            {Object.entries(typographyTokens.scale).reverse().map(([name, token]) => (
              <div
                key={name}
                className="flex items-center gap-4 p-4 rounded-[var(--fds-radius-lg)] hover:bg-[var(--fds-color-bg-elevated)] transition-colors"
              >
                <div className="w-16 shrink-0">
                  <code className="text-xs font-mono text-[var(--fds-color-primary)]">text-{name}</code>
                </div>
                <div className="w-24 shrink-0 text-[var(--fds-color-text-tertiary)] text-xs font-mono">
                  {token.fontSize} / {token.lineHeight}
                </div>
                <div
                  className="flex-1 text-[var(--fds-color-text-primary)] truncate"
                  style={{ fontSize: token.fontSize, lineHeight: token.lineHeight }}
                >
                  토스 디자인 시스템
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="weight" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Font Weight</h2>
          <div className="space-y-3">
            {Object.entries(typographyTokens.weight).map(([name, token]) => (
              <div
                key={name}
                className="flex items-center gap-4 p-4 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)]"
              >
                <div className="w-24 shrink-0">
                  <p className="text-xs font-mono text-[var(--fds-color-primary)]">{token.variable}</p>
                  <p className="text-xs text-[var(--fds-color-text-tertiary)] mt-0.5">{token.value}</p>
                </div>
                <p
                  className="text-xl text-[var(--fds-color-text-primary)]"
                  style={{ fontWeight: token.value }}
                >
                  토스 디자인 시스템 — {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="usage" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">폰트 로드</h2>
          <div className="rounded-xl overflow-hidden border border-[var(--fds-color-border)]">
            <pre className="p-4 bg-[var(--fds-color-gray-900)] text-sm text-[var(--fds-color-gray-100)] overflow-x-auto">
              <code>{`/* app/layout.tsx — Next.js font 최적화 */
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
