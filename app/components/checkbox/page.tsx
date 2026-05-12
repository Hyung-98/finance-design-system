'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Checkbox } from '@/components/fds/Checkbox'

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  const [all, setAll] = useState(false)
  const [items, setItems] = useState([false, false, false])

  const handleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAll(e.target.checked)
    setItems(items.map(() => e.target.checked))
  }

  const handleItem = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const next = items.map((v, i) => (i === idx ? e.target.checked : v))
    setItems(next)
    setAll(next.every(Boolean))
  }

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Checkbox</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          단일 또는 다중 선택을 위한 체크박스 컴포넌트입니다.
        </p>

        <section id="basic" className="mt-2">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview>
            <div className="flex flex-col gap-3">
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="이용약관에 동의합니다"
                description="서비스 이용에 필요한 필수 약관입니다."
              />
              <Checkbox label="레이블만 있는 체크박스" />
              <Checkbox label="비활성화된 체크박스" disabled />
              <Checkbox label="체크된 비활성화" checked disabled readOnly />
            </div>
          </ComponentPreview>
        </section>

        <section id="group" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">전체 선택 패턴</h2>
          <ComponentPreview>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="pb-2 border-b border-[var(--fds-color-border)]">
                <Checkbox
                  checked={all}
                  onChange={handleAll}
                  label="전체 동의"
                />
              </div>
              {['마케팅 정보 수신 (선택)', '위치 정보 이용 (선택)', '개인정보 제3자 제공 (선택)'].map((l, i) => (
                <Checkbox
                  key={l}
                  checked={items[i]}
                  onChange={(e) => handleItem(i, e)}
                  label={l}
                />
              ))}
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'label', type: 'string', description: '체크박스 레이블' },
              { name: 'description', type: 'string', description: '레이블 아래 부가 설명' },
              { name: 'checked', type: 'boolean', description: '체크 상태 (제어형)' },
              { name: 'defaultChecked', type: 'boolean', description: '초기 체크 상태 (비제어형)' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화 상태' },
              { name: 'onChange', type: '(e: ChangeEvent) => void', description: '체크 상태 변경 핸들러' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Checkbox } from '@/components/fds'
import { useState } from 'react'

function AgreementForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <Checkbox
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
      label="이용약관에 동의합니다 (필수)"
      description="서비스 이용에 필요한 약관입니다."
    />
  )
}`}
            language="tsx"
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
