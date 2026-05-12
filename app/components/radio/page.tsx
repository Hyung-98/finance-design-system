'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Radio, RadioGroup } from '@/components/fds/Radio'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function RadioPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Radio</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          여러 선택지 중 하나만 선택할 수 있는 컴포넌트입니다.
          이체 수단 선택, 약관 동의 항목 등에 사용합니다.
        </p>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview label="Radio 단독">
            <div className="flex flex-col gap-3">
              <Radio name="demo1" value="a" label="즉시 이체" defaultChecked />
              <Radio name="demo1" value="b" label="예약 이체" />
              <Radio name="demo1" value="c" label="정기 이체" disabled />
            </div>
          </ComponentPreview>
        </section>

        <section id="radio-group" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">RadioGroup</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            관련 Radio를 그룹으로 묶어 fieldset/legend로 의미를 명확히 합니다.
          </p>
          <ComponentPreview label="수직 배열 (기본)">
            <div className="w-full max-w-sm">
              <RadioGroup
                name="transfer"
                label="이체 방법"
                defaultValue="instant"
                options={[
                  { value: 'instant', label: '즉시 이체', description: '지금 바로 이체합니다' },
                  { value: 'reserve', label: '예약 이체', description: '지정한 날짜에 이체합니다' },
                  { value: 'regular', label: '정기 이체', description: '매월 자동으로 이체합니다' },
                ]}
              />
            </div>
          </ComponentPreview>
          <ComponentPreview label="수평 배열">
            <RadioGroup
              name="period"
              label="조회 기간"
              defaultValue="1m"
              direction="horizontal"
              options={[
                { value: '1w', label: '1주' },
                { value: '1m', label: '1개월' },
                { value: '3m', label: '3개월' },
                { value: '6m', label: '6개월' },
              ]}
            />
          </ComponentPreview>
        </section>

        <section id="with-description" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">설명 포함</h2>
          <ComponentPreview label="description 있는 옵션">
            <div className="w-full max-w-sm">
              <RadioGroup
                name="account-type"
                label="계좌 종류"
                defaultValue="savings"
                options={[
                  { value: 'savings', label: '저축 계좌', description: '연 2.5% 이자 적용' },
                  { value: 'checking', label: '입출금 계좌', description: '수수료 없이 자유롭게 이용' },
                  { value: 'foreign', label: '외화 계좌', description: '달러, 유로 등 외화 보유', disabled: true },
                ]}
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3">Radio</h3>
          <PropsTable
            props={[
              { name: 'label', type: 'string', description: '라디오 버튼 레이블' },
              { name: 'description', type: 'string', description: '레이블 아래 보조 설명' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화' },
              { name: '...InputHTMLAttributes', type: '—', description: 'name, value, checked, onChange 등 input 속성 전달 가능' },
            ]}
          />
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3 mt-6">RadioGroup</h3>
          <PropsTable
            props={[
              { name: 'name', type: 'string', required: true, description: '라디오 그룹 name (폼 전송에 사용)' },
              { name: 'options', type: 'RadioOption[]', required: true, description: '{ value, label, description?, disabled? }' },
              { name: 'value', type: 'string', description: '제어 컴포넌트 선택값' },
              { name: 'defaultValue', type: 'string', description: '비제어 초기값' },
              { name: 'onChange', type: '(value: string) => void', description: '선택 변경 콜백' },
              { name: 'label', type: 'string', description: '그룹 레이블 (legend)' },
              { name: 'direction', type: "'vertical' | 'horizontal'", defaultValue: "'vertical'", description: '배열 방향' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { RadioGroup } from '@/components/fds'
import { useState } from 'react'

// 비제어
<RadioGroup
  name="transfer"
  label="이체 방법"
  defaultValue="instant"
  options={[
    { value: 'instant', label: '즉시 이체', description: '지금 바로 이체합니다' },
    { value: 'reserve', label: '예약 이체' },
  ]}
/>

// 제어
function TransferMethod() {
  const [method, setMethod] = useState('instant')
  return (
    <RadioGroup
      name="method"
      value={method}
      onChange={setMethod}
      options={options}
    />
  )
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '2~5개 옵션에 사용', description: '옵션이 2~5개일 때 RadioGroup이 적합합니다. 더 많으면 Select를 사용하세요.' },
              { label: '기본값 제공', description: '가능하면 defaultValue로 가장 일반적인 옵션을 미리 선택해두세요.' },
            ]}
            donts={[
              { label: 'Checkbox 대신 사용 금지', description: '다중 선택이 필요한 경우 Checkbox를 사용하세요. Radio는 반드시 하나만 선택 가능합니다.' },
              { label: '단독 Radio 사용 지양', description: '단일 Radio는 의미가 없습니다. 항상 RadioGroup으로 묶어 사용하세요.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
