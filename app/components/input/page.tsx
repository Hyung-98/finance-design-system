'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Input } from '@/components/fds/Input'

const playgroundConfig: PlaygroundConfig = {
  label: { type: 'string', default: '이메일' },
  placeholder: { type: 'string', default: 'finance@finance.com' },
  helperText: { type: 'string', default: '' },
  errorText: { type: 'string', default: '' },
  disabled: { type: 'boolean', default: false },
  status: { type: 'select', options: ['default', 'error', 'success'], default: 'default' },
}

function codeTemplate(props: Record<string, unknown>) {
  const attrs = [
    props.label ? `label="${props.label}"` : '',
    props.placeholder ? `placeholder="${props.placeholder}"` : '',
    props.helperText ? `helperText="${props.helperText}"` : '',
    props.errorText ? `errorText="${props.errorText}"` : '',
    props.status !== 'default' ? `status="${props.status}"` : '',
    props.disabled ? 'disabled' : '',
  ].filter(Boolean).join('\n  ')
  return `<Input\n  ${attrs}\n/>`
}

export default function InputPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Input</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          텍스트 입력을 위한 기본 폼 요소입니다. 레이블, 도움말, 오류 메시지를 통합 지원합니다.
        </p>

        {/* Playground */}
        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <div className="w-full max-w-sm">
                <Input
                  label={String(props.label)}
                  placeholder={String(props.placeholder)}
                  helperText={props.helperText ? String(props.helperText) : undefined}
                  errorText={props.errorText ? String(props.errorText) : undefined}
                  status={props.status as 'default'}
                  disabled={!!props.disabled}
                />
              </div>
            )}
            codeTemplate={codeTemplate}
          />
        </section>

        {/* States */}
        <section id="states" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">States</h2>
          <ComponentPreview label="기본 / 에러 / 성공 / 비활성">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input label="기본" placeholder="입력하세요" />
              <Input label="성공" placeholder="입력하세요" status="success" helperText="사용 가능한 이름입니다." />
              <Input label="오류" placeholder="입력하세요" status="error" errorText="이미 사용 중인 이메일입니다." />
              <Input label="비활성" placeholder="입력 불가" disabled />
            </div>
          </ComponentPreview>
        </section>

        {/* With prefix/suffix */}
        <section id="prefix-suffix" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Prefix / Suffix</h2>
          <ComponentPreview>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                label="검색"
                placeholder="검색어 입력"
                prefix={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              <Input
                label="금액"
                placeholder="0"
                type="number"
                suffix={<span className="text-sm font-medium text-[var(--fds-color-text-secondary)]">원</span>}
              />
            </div>
          </ComponentPreview>
        </section>

        {/* Props */}
        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'label', type: 'string', description: '입력 필드 레이블' },
              { name: 'placeholder', type: 'string', description: '플레이스홀더 텍스트' },
              { name: 'status', type: "'default' | 'error' | 'success'", defaultValue: "'default'", description: '입력 상태' },
              { name: 'helperText', type: 'string', description: '입력 필드 아래 도움말 텍스트' },
              { name: 'errorText', type: 'string', description: '오류 메시지 (status를 error로 자동 설정)' },
              { name: 'prefix', type: 'ReactNode', description: '입력 필드 앞에 표시할 요소' },
              { name: 'suffix', type: 'ReactNode', description: '입력 필드 뒤에 표시할 요소' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화 상태' },
            ]}
          />
        </section>

        {/* Code */}
        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Input } from '@/components/fds'
import { useState } from 'react'

function EmailForm() {
  const [value, setValue] = useState('')
  const isInvalid = value && !value.includes('@')

  return (
    <Input
      label="이메일"
      type="email"
      placeholder="finance@finance.com"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      status={isInvalid ? 'error' : 'default'}
      errorText={isInvalid ? '올바른 이메일 형식을 입력해주세요.' : undefined}
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
