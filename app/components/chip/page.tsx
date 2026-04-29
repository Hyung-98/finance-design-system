'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Chip, ChipGroup } from '@/components/tds/Chip'
import { CodeBlock } from '@/components/docs/CodeBlock'

function FilterDemo() {
  const [selected, setSelected] = useState<string[]>(['transfer'])
  const options = [
    { value: 'all', label: '전체' },
    { value: 'income', label: '수입' },
    { value: 'expense', label: '지출' },
    { value: 'transfer', label: '이체' },
    { value: 'investment', label: '투자' },
  ]
  return (
    <ChipGroup
      options={options}
      value={selected}
      onChange={setSelected}
      multiple
    />
  )
}

function TagDemo() {
  const [tags, setTags] = useState(['토스뱅크', '월급통장', '자동이체'])
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip key={tag} variant="tag" onRemove={() => setTags(prev => prev.filter(t => t !== tag))}>
          {tag}
        </Chip>
      ))}
    </div>
  )
}

export default function ChipPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Chip</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          선택 가능한 필터나 태그를 표현하는 소형 컴포넌트입니다.
          거래 내역 필터, 카테고리 선택, 검색 태그 등에 사용합니다.
        </p>

        <section id="filter">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Filter Chip</h2>
          <p className="text-sm text-[var(--tds-color-text-secondary)] mb-4">
            선택/해제가 가능한 필터입니다. 클릭 시 토글되며 선택된 항목은 강조됩니다.
          </p>
          <ComponentPreview label="다중 필터 선택">
            <FilterDemo />
          </ComponentPreview>
        </section>

        <section id="tag" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Tag Chip</h2>
          <p className="text-sm text-[var(--tds-color-text-secondary)] mb-4">
            제거 가능한 태그입니다. X 버튼으로 개별 제거를 지원합니다.
          </p>
          <ComponentPreview label="제거 가능한 태그">
            <TagDemo />
          </ComponentPreview>
        </section>

        <section id="sizes" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview label="sm / md">
            <div className="flex flex-col gap-3 items-start">
              <div className="flex gap-2">
                <Chip size="sm" selected>소형 선택됨</Chip>
                <Chip size="sm">소형</Chip>
              </div>
              <div className="flex gap-2">
                <Chip size="md" selected>중형 선택됨</Chip>
                <Chip size="md">중형</Chip>
              </div>
            </div>
          </ComponentPreview>
        </section>

        <section id="states" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">States</h2>
          <ComponentPreview label="기본 / 선택 / 비활성">
            <Chip>기본</Chip>
            <Chip selected>선택됨</Chip>
            <Chip disabled>비활성</Chip>
            <Chip selected disabled>선택+비활성</Chip>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] mb-3">Chip</h3>
          <PropsTable
            props={[
              { name: 'children', type: 'ReactNode', required: true, description: '칩 레이블' },
              { name: 'variant', type: "'filter' | 'tag'", defaultValue: "'filter'", description: 'filter: 선택 토글 / tag: 제거 가능' },
              { name: 'selected', type: 'boolean', defaultValue: 'false', description: '선택 상태 (filter 전용)' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화' },
              { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: '칩 크기' },
              { name: 'onClick', type: '() => void', description: '클릭 핸들러 (filter 전용)' },
              { name: 'onRemove', type: '() => void', description: '제거 핸들러 (tag 전용)' },
            ]}
          />
          <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] mb-3 mt-6">ChipGroup</h3>
          <PropsTable
            props={[
              { name: 'options', type: '{ value, label, disabled? }[]', required: true, description: '칩 옵션 배열' },
              { name: 'value', type: 'string[]', description: '선택된 값 배열' },
              { name: 'onChange', type: '(value: string[]) => void', description: '선택 변경 콜백' },
              { name: 'multiple', type: 'boolean', defaultValue: 'true', description: '다중 선택 허용 여부' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Chip, ChipGroup } from '@/components/tds'
import { useState } from 'react'

// 필터 그룹
function TransactionFilter() {
  const [filters, setFilters] = useState<string[]>([])

  return (
    <ChipGroup
      options={[
        { value: 'income', label: '수입' },
        { value: 'expense', label: '지출' },
        { value: 'transfer', label: '이체' },
      ]}
      value={filters}
      onChange={setFilters}
      multiple
    />
  )
}

// 제거 가능한 태그
function TagList({ tags, onRemove }) {
  return (
    <div className="flex gap-2">
      {tags.map(tag => (
        <Chip key={tag} variant="tag" onRemove={() => onRemove(tag)}>
          {tag}
        </Chip>
      ))}
    </div>
  )
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '간결한 레이블', description: '2~5글자의 짧은 레이블을 사용합니다. 긴 텍스트는 칩에 어울리지 않습니다.' },
              { label: '필터 결과 즉시 반영', description: '칩 선택 시 목록이 즉시 필터링되어야 합니다.' },
            ]}
            donts={[
              { label: 'Chip으로 내비게이션', description: '페이지 이동에는 Chip 대신 Tabs나 Button을 사용하세요.' },
              { label: '10개 이상의 칩', description: '칩이 너무 많으면 Select나 CheckboxGroup을 고려하세요.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
