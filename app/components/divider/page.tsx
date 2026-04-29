'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Divider } from '@/components/tds/Divider'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function DividerPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Divider</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          콘텐츠 영역을 구분하는 수평 또는 수직 선입니다.
          섹션 구분, 메뉴 항목 구분 등에 사용합니다.
        </p>

        <section id="horizontal">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">수평 구분선</h2>
          <ComponentPreview label="solid / dashed">
            <div className="w-full space-y-6">
              <div>
                <p className="text-sm text-[var(--tds-color-text-secondary)] mb-3">위 섹션</p>
                <Divider />
                <p className="text-sm text-[var(--tds-color-text-secondary)] mt-3">아래 섹션</p>
              </div>
              <div>
                <p className="text-sm text-[var(--tds-color-text-secondary)] mb-3">dashed 스타일</p>
                <Divider variant="dashed" />
                <p className="text-sm text-[var(--tds-color-text-secondary)] mt-3">아래 섹션</p>
              </div>
            </div>
          </ComponentPreview>
        </section>

        <section id="with-label" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">레이블 구분선</h2>
          <ComponentPreview label="중앙 텍스트 포함">
            <div className="w-full space-y-6">
              <Divider label="또는" />
              <Divider label="2024년 1월" />
            </div>
          </ComponentPreview>
        </section>

        <section id="vertical" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">수직 구분선</h2>
          <ComponentPreview label="인라인 요소 사이">
            <div className="flex items-center gap-4 text-sm text-[var(--tds-color-text-secondary)]">
              <span>송금</span>
              <Divider orientation="vertical" spacing="none" />
              <span>조회</span>
              <Divider orientation="vertical" spacing="none" />
              <span>결제</span>
            </div>
          </ComponentPreview>
        </section>

        <section id="spacing" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Spacing</h2>
          <ComponentPreview label="none / sm / md / lg">
            <div className="w-full">
              {(['none', 'sm', 'md', 'lg'] as const).map((s) => (
                <div key={s} className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[var(--tds-color-text-tertiary)] w-8">{s}</span>
                  <div className="flex-1">
                    <Divider spacing={s} />
                  </div>
                </div>
              ))}
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '구분선 방향' },
              { name: 'variant', type: "'solid' | 'dashed'", defaultValue: "'solid'", description: '선 스타일' },
              { name: 'spacing', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '상하(수평)/좌우(수직) 여백' },
              { name: 'label', type: 'string', description: '중앙에 표시할 텍스트 (수평 전용)' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Divider } from '@/components/tds'

// 기본 수평 구분선
<Divider />

// 레이블 포함
<Divider label="또는" />
<Divider label="2024년 1월" />

// 수직 구분선 (인라인)
<div className="flex items-center gap-4">
  <span>홈</span>
  <Divider orientation="vertical" spacing="none" />
  <span>마이</span>
</div>

// dashed 스타일
<Divider variant="dashed" />`}
            language="tsx"
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
