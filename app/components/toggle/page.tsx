'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Toggle } from '@/components/tds/Toggle'

const playgroundConfig: PlaygroundConfig = {
  label: { type: 'string', default: '알림 받기' },
  description: { type: 'string', default: '새로운 거래 발생 시 알림을 받습니다.' },
  size: { type: 'select', options: ['sm', 'md'], default: 'md' },
  disabled: { type: 'boolean', default: false },
}

export default function TogglePage() {
  const [on, setOn] = useState(false)

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Toggle</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          ON/OFF 전환을 위한 스위치 컴포넌트입니다. 즉각적인 효과가 있는 설정에 사용합니다.
        </p>

        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <Toggle
                label={String(props.label)}
                description={props.description ? String(props.description) : undefined}
                size={props.size as 'md'}
                disabled={!!props.disabled}
                defaultChecked={false}
              />
            )}
            codeTemplate={(props) =>
              `<Toggle\n  label="${props.label}"\n  description="${props.description}"\n  size="${props.size}"\n/>`
            }
          />
        </section>

        <section id="basic" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Toggle
                checked={on}
                onChange={(e) => setOn(e.target.checked)}
                label={`알림 ${on ? 'ON' : 'OFF'}`}
                description="설정 변경 시 즉시 적용됩니다."
              />
              <Toggle label="SM 크기" size="sm" />
              <Toggle label="비활성화된 Toggle" disabled />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'label', type: 'string', description: 'Toggle 레이블' },
              { name: 'description', type: 'string', description: '부가 설명 텍스트' },
              { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Toggle 크기' },
              { name: 'checked', type: 'boolean', description: '활성화 상태 (제어형)' },
              { name: 'defaultChecked', type: 'boolean', description: '초기 상태 (비제어형)' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화 상태' },
              { name: 'onChange', type: '(e: ChangeEvent) => void', description: '상태 변경 핸들러' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Toggle } from '@/components/tds'
import { useState } from 'react'

function NotificationSetting() {
  const [enabled, setEnabled] = useState(true)

  return (
    <Toggle
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
      label="푸시 알림"
      description="새로운 이체 내역이 있을 때 알림을 받습니다."
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
