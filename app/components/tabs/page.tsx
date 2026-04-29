'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Tabs } from '@/components/tds/Tabs'
import { CodeBlock } from '@/components/docs/CodeBlock'

const assetTabs = [
  { value: 'all', label: '전체' },
  { value: 'bank', label: '은행' },
  { value: 'investment', label: '투자' },
  { value: 'insurance', label: '보험' },
]

const filterTabs = [
  { value: '1w', label: '1주' },
  { value: '1m', label: '1개월' },
  { value: '3m', label: '3개월' },
  { value: '6m', label: '6개월' },
  { value: '1y', label: '1년' },
]

export default function TabsPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Tabs</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          관련 콘텐츠를 카테고리별로 전환하는 네비게이션 컴포넌트입니다.
          자산 현황, 거래 내역 필터 등 토스 앱의 핵심 네비게이션 패턴입니다.
        </p>

        <section id="variants">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview label="line (기본) — 하단 밑줄 인디케이터">
            <div className="w-full">
              <Tabs
                items={assetTabs}
                defaultValue="all"
                variant="line"
              />
            </div>
          </ComponentPreview>
          <ComponentPreview label="pill — 배경 채움 (필터 UI)">
            <Tabs
              items={filterTabs}
              defaultValue="1m"
              variant="pill"
            />
          </ComponentPreview>
        </section>

        <section id="with-content" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">콘텐츠 패널</h2>
          <p className="text-sm text-[var(--tds-color-text-secondary)] mb-4">
            children render prop으로 활성 탭에 따른 콘텐츠를 렌더링합니다.
          </p>
          <ComponentPreview label="탭 + 콘텐츠">
            <div className="w-full">
              <Tabs
                items={[
                  { value: 'income', label: '수입' },
                  { value: 'expense', label: '지출' },
                  { value: 'transfer', label: '이체' },
                ]}
                defaultValue="income"
                variant="line"
              >
                {(active) => (
                  <div className="p-4 text-sm text-[var(--tds-color-text-secondary)]">
                    {active === 'income' && '이번 달 수입 내역이 없습니다.'}
                    {active === 'expense' && '이번 달 지출 내역이 없습니다.'}
                    {active === 'transfer' && '이번 달 이체 내역이 없습니다.'}
                  </div>
                )}
              </Tabs>
            </div>
          </ComponentPreview>
        </section>

        <section id="disabled" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">비활성 탭</h2>
          <ComponentPreview label="disabled 탭 항목">
            <div className="w-full">
              <Tabs
                items={[
                  { value: 'stocks', label: '국내주식' },
                  { value: 'etf', label: 'ETF' },
                  { value: 'overseas', label: '해외주식', disabled: true },
                  { value: 'bonds', label: '채권', disabled: true },
                ]}
                defaultValue="stocks"
                variant="line"
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'items', type: 'TabItem[]', required: true, description: '탭 목록 ({ value, label, disabled? })' },
              { name: 'value', type: 'string', description: '제어 컴포넌트 활성 탭 값' },
              { name: 'defaultValue', type: 'string', description: '비제어 초기 활성 탭 값' },
              { name: 'onChange', type: '(value: string) => void', description: '탭 변경 콜백' },
              { name: 'variant', type: "'line' | 'pill'", defaultValue: "'line'", description: '탭 스타일 변형' },
              { name: 'children', type: '(activeValue: string) => ReactNode', description: '활성 탭 값을 받아 콘텐츠를 렌더링하는 render prop' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Tabs } from '@/components/tds'
import { useState } from 'react'

// 비제어 — 콘텐츠 패널 포함
<Tabs
  items={[
    { value: 'income', label: '수입' },
    { value: 'expense', label: '지출' },
  ]}
  defaultValue="income"
  variant="line"
>
  {(active) => (
    <div>
      {active === 'income' ? <IncomeList /> : <ExpenseList />}
    </div>
  )}
</Tabs>

// 제어 — 외부 상태로 관리
function FilterTabs() {
  const [period, setPeriod] = useState('1m')
  return (
    <Tabs
      items={periodOptions}
      value={period}
      onChange={setPeriod}
      variant="pill"
    />
  )
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: 'line은 페이지 네비게이션', description: '수입/지출, 자산/부채 등 주요 뷰 전환에는 line variant를 사용합니다.' },
              { label: 'pill은 필터', description: '기간 선택, 카테고리 필터 등 콘텐츠를 필터링할 때 pill variant를 사용합니다.' },
            ]}
            donts={[
              { label: '6개 이상 탭 사용 금지', description: '탭이 너무 많으면 한 줄에 다 표시되지 않습니다. 5개 이하를 권장합니다.' },
              { label: '탭 레이블에 아이콘만 사용', description: '텍스트 없이 아이콘만 사용하면 의미를 알기 어렵습니다. 반드시 레이블 텍스트를 제공하세요.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
