import type { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { TableOfContents } from '@/components/layout/TableOfContents'

export const metadata: Metadata = { title: 'Getting Started' }

export default function GettingStartedPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">시작하기</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Getting Started</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          토스 디자인 시스템을 프로젝트에 빠르게 통합하는 방법을 안내합니다.
        </p>

        <section id="requirements">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">시스템 요구사항</h2>
          <div className="rounded-xl border border-[var(--fds-color-border)] overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">최소 버전</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Node.js', '18.0+'],
                  ['React', '18.0+'],
                  ['TypeScript', '5.0+ (권장)'],
                  ['Next.js', '14.0+ (권장)'],
                ].map(([item, ver], i, arr) => (
                  <tr key={item} className={i < arr.length - 1 ? 'border-b border-[var(--fds-color-border)]' : ''}>
                    <td className="px-4 py-3 font-mono text-[var(--fds-color-text-primary)]">{item}</td>
                    <td className="px-4 py-3 text-[var(--fds-color-text-secondary)]">{ver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="installation">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">설치</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-3">
            npm, yarn, pnpm 중 원하는 패키지 매니저를 사용해 설치합니다.
          </p>
          <CodeBlock
            code={`# npm
npm install @/components/fds

# yarn
yarn add @/components/fds

# pnpm
pnpm add @/components/fds`}
            language="bash"
            filename="terminal"
          />
          <p className="text-sm text-[var(--fds-color-text-secondary)] mt-2">
            Peer dependency로 <code className="font-mono text-xs bg-[var(--fds-color-bg-elevated)] px-1.5 py-0.5 rounded">react</code>와 <code className="font-mono text-xs bg-[var(--fds-color-bg-elevated)] px-1.5 py-0.5 rounded">react-dom</code>이 필요합니다.
          </p>
        </section>

        <section id="global-styles" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">전역 스타일 설정</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-3">
            앱의 최상위 파일에 전역 CSS를 import합니다. Next.js의 경우 <code className="font-mono text-xs bg-[var(--fds-color-bg-elevated)] px-1.5 py-0.5 rounded">app/layout.tsx</code>에 추가합니다.
          </p>
          <CodeBlock
            code={`// app/layout.tsx
import '@/components/fds/styles'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}`}
            language="tsx"
            filename="app/layout.tsx"
          />
        </section>

        <section id="quickstart" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Quick Start</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-3">
            설치 완료 후 컴포넌트를 import하여 바로 사용할 수 있습니다.
          </p>
          <CodeBlock
            code={`import { Button, Input } from '@/components/fds'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Input
        label="이메일"
        placeholder="finance@finance.com"
        type="email"
      />
      <Button variant="primary" size="md">
        시작하기
      </Button>
    </div>
  )
}`}
            language="tsx"
            filename="app/page.tsx"
          />
        </section>

        <section id="with-nextjs" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Next.js 설정</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-3">
            Next.js App Router에서 클라이언트 상호작용이 필요한 컴포넌트는 <code className="font-mono text-xs bg-[var(--fds-color-bg-elevated)] px-1.5 py-0.5 rounded">&apos;use client&apos;</code> 지시어를 추가합니다.
          </p>
          <CodeBlock
            code={`'use client'

import { useState } from 'react'
import { Button, Modal } from '@/components/fds'

export default function ClientExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="확인"
        description="이 작업을 진행하시겠습니까?"
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>확인</Button>
          </>
        }
      />
    </>
  )
}`}
            language="tsx"
            filename="app/example/page.tsx"
          />
        </section>

        <section id="browsers" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">지원 브라우저</h2>
          <div className="flex flex-wrap gap-3">
            {['Chrome 90+', 'Firefox 88+', 'Safari 14+', 'Edge 90+', 'iOS Safari 14+', 'Android Chrome 90+'].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-[var(--fds-radius-md)] text-sm bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-secondary)] border border-[var(--fds-color-border)]">
                {b}
              </span>
            ))}
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
