'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { DosDonts } from '@/components/docs/DosDonts'
import { Select } from '@/components/tds/Select'
import { CodeBlock } from '@/components/docs/CodeBlock'

const bankOptions = [
  { value: 'toss', label: '토스뱅크' },
  { value: 'kakao', label: '카카오뱅크' },
  { value: 'kb', label: 'KB국민은행' },
  { value: 'shinhan', label: '신한은행' },
  { value: 'woori', label: '우리은행' },
  { value: 'hana', label: '하나은행' },
]

const playgroundConfig: PlaygroundConfig = {
  placeholder: { type: 'string', default: '은행을 선택하세요' },
  label: { type: 'string', default: '출금 계좌' },
  helperText: { type: 'string', default: '등록된 계좌 중 선택' },
  disabled: { type: 'boolean', default: false },
}

export default function SelectPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Select</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          여러 옵션 중 하나를 선택하는 드롭다운 컴포넌트입니다.
          계좌 선택, 카테고리 선택 등 선택지가 많을 때 사용합니다.
        </p>

        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <div className="w-full max-w-sm">
                <Select
                  options={bankOptions}
                  placeholder={String(props.placeholder)}
                  label={String(props.label) || undefined}
                  helperText={String(props.helperText) || undefined}
                  disabled={!!props.disabled}
                />
              </div>
            )}
            codeTemplate={(props) => `<Select
  options={banks}
  label="${props.label}"
  placeholder="${props.placeholder}"
  helperText="${props.helperText}"${props.disabled ? '\n  disabled' : ''}
/>`}
          />
        </section>

        <section id="states" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">States</h2>
          <ComponentPreview label="기본">
            <div className="w-full max-w-sm">
              <Select options={bankOptions} label="은행 선택" placeholder="선택하세요" />
            </div>
          </ComponentPreview>
          <ComponentPreview label="에러">
            <div className="w-full max-w-sm">
              <Select
                options={bankOptions}
                label="은행 선택"
                errorText="계좌를 선택해주세요"
              />
            </div>
          </ComponentPreview>
          <ComponentPreview label="비활성">
            <div className="w-full max-w-sm">
              <Select
                options={bankOptions}
                label="은행 선택"
                defaultValue="toss"
                disabled
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="with-disabled-options" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">비활성 옵션</h2>
          <ComponentPreview label="일부 옵션 비활성">
            <div className="w-full max-w-sm">
              <Select
                options={[
                  { value: 'toss', label: '토스뱅크' },
                  { value: 'kakao', label: '카카오뱅크', disabled: true },
                  { value: 'kb', label: 'KB국민은행' },
                ]}
                label="연결 가능한 은행"
                helperText="연결 불가 은행은 선택할 수 없습니다"
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'options', type: 'SelectOption[]', required: true, description: '선택 옵션 배열 ({ value, label, disabled? })' },
              { name: 'value', type: 'string', description: '제어 컴포넌트일 때 현재 선택값' },
              { name: 'defaultValue', type: 'string', description: '비제어 컴포넌트일 때 초기 선택값' },
              { name: 'onChange', type: '(value: string) => void', description: '선택 변경 콜백' },
              { name: 'placeholder', type: 'string', defaultValue: "'선택하세요'", description: '미선택 시 표시 텍스트' },
              { name: 'label', type: 'string', description: '상단 레이블' },
              { name: 'helperText', type: 'string', description: '보조 텍스트 (정상 상태)' },
              { name: 'errorText', type: 'string', description: '에러 메시지 (에러 상태)' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Select } from '@/components/tds'
import { useState } from 'react'

const banks = [
  { value: 'toss', label: '토스뱅크' },
  { value: 'kakao', label: '카카오뱅크' },
  { value: 'kb', label: 'KB국민은행' },
]

// 비제어
<Select options={banks} label="은행 선택" />

// 제어
function BankSelect() {
  const [bank, setBank] = useState('')
  return (
    <Select
      options={banks}
      value={bank}
      onChange={setBank}
      label="출금 계좌"
      helperText="이체할 계좌를 선택하세요"
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
              { label: '5개 이상일 때 Select 사용', description: '옵션이 5개 미만이면 RadioGroup을 고려하세요. Select는 옵션이 많을 때 적합합니다.' },
              { label: '명확한 레이블 제공', description: '사용자가 무엇을 선택하는지 label로 명확히 안내합니다.' },
            ]}
            donts={[
              { label: '너무 많은 옵션', description: '옵션이 20개를 넘으면 검색 기능이 있는 Combobox를 고려하세요.' },
              { label: 'placeholder로 레이블 대체', description: '"은행을 선택하세요"를 레이블 대신 사용하지 마세요. placeholder는 사라지므로 레이블을 별도로 제공해야 합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
