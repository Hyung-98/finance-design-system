'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Tooltip } from '@/components/tds/Tooltip'
import { Button } from '@/components/tds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function TooltipPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Tooltip</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          요소에 hover 또는 focus 시 부가 정보를 표시하는 말풍선 컴포넌트입니다.
          아이콘 버튼의 레이블, 약어 설명 등에 사용합니다.
        </p>

        <section id="placement">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Placement</h2>
          <ComponentPreview label="top / bottom / left / right">
            <div className="flex flex-wrap gap-6 p-8">
              <Tooltip content="상단 툴팁" placement="top">
                <Button variant="outline" size="sm">Top</Button>
              </Tooltip>
              <Tooltip content="하단 툴팁" placement="bottom">
                <Button variant="outline" size="sm">Bottom</Button>
              </Tooltip>
              <Tooltip content="좌측 툴팁" placement="left">
                <Button variant="outline" size="sm">Left</Button>
              </Tooltip>
              <Tooltip content="우측 툴팁" placement="right">
                <Button variant="outline" size="sm">Right</Button>
              </Tooltip>
            </div>
          </ComponentPreview>
        </section>

        <section id="usage" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">사용 패턴</h2>
          <ComponentPreview label="아이콘 버튼 레이블">
            <div className="flex gap-3">
              <Tooltip content="설정">
                <button className="p-2 rounded-lg hover:bg-[var(--tds-color-bg-elevated)] transition-colors" aria-label="설정">
                  <svg className="w-5 h-5 text-[var(--tds-color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </Tooltip>
              <Tooltip content="알림">
                <button className="p-2 rounded-lg hover:bg-[var(--tds-color-bg-elevated)] transition-colors" aria-label="알림">
                  <svg className="w-5 h-5 text-[var(--tds-color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </Tooltip>
              <Tooltip content="공유하기">
                <button className="p-2 rounded-lg hover:bg-[var(--tds-color-bg-elevated)] transition-colors" aria-label="공유하기">
                  <svg className="w-5 h-5 text-[var(--tds-color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </Tooltip>
            </div>
          </ComponentPreview>
          <ComponentPreview label="약어 설명">
            <p className="text-sm text-[var(--tds-color-text-secondary)]">
              현재{' '}
              <Tooltip content="연간 수익률 (Annual Percentage Yield)" placement="top">
                <span className="underline decoration-dashed cursor-help text-[var(--tds-color-text-primary)] font-medium">APY</span>
              </Tooltip>
              는 <strong className="text-[var(--tds-color-text-primary)]">3.5%</strong>입니다.
            </p>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'content', type: 'ReactNode', required: true, description: '툴팁에 표시할 내용' },
              { name: 'children', type: 'ReactNode', required: true, description: '툴팁을 트리거하는 요소' },
              { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: '툴팁 위치' },
              { name: 'delay', type: 'number', defaultValue: '0', description: '표시 딜레이 (ms)' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Tooltip } from '@/components/tds'

// 아이콘 버튼 레이블
<Tooltip content="설정">
  <button aria-label="설정">
    <SettingsIcon />
  </button>
</Tooltip>

// 하단에 표시
<Tooltip content="더 자세한 설명" placement="bottom">
  <InfoIcon />
</Tooltip>

// 딜레이 적용
<Tooltip content="300ms 후 표시" delay={300}>
  <span>hover me</span>
</Tooltip>`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '간결한 내용', description: '툴팁은 한두 단어 ~ 짧은 문장으로 제한합니다. 긴 설명은 Popover를 사용하세요.' },
              { label: '아이콘 버튼에 필수', description: '텍스트 없이 아이콘만 있는 버튼에는 반드시 Tooltip으로 기능을 설명하세요.' },
            ]}
            donts={[
              { label: '중요한 정보를 툴팁에만', description: '툴팁은 hover/focus에서만 보입니다. 필수 정보는 항상 보이는 곳에 두세요.' },
              { label: '모바일에서 툴팁 의존', description: '터치 기기에서는 hover가 없으므로 툴팁만으로 정보를 전달하지 마세요.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
