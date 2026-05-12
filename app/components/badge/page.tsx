'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Badge } from '@/components/fds/Badge'

const playgroundConfig: PlaygroundConfig = {
  variant: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'outline'], default: 'primary' },
  size: { type: 'select', options: ['sm', 'md'], default: 'md' },
  children: { type: 'string', default: '뱃지' },
}

export default function BadgePage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Badge</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          상태, 카테고리, 레이블을 시각적으로 표현하는 인라인 컴포넌트입니다.
        </p>

        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <Badge variant={props.variant as 'primary'} size={props.size as 'md'}>
                {String(props.children)}
              </Badge>
            )}
            codeTemplate={(props) =>
              `<Badge variant="${props.variant}" size="${props.size}">\n  ${props.children}\n</Badge>`
            }
          />
        </section>

        <section id="variants" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview>
            {(['primary', 'secondary', 'success', 'danger', 'warning', 'outline'] as const).map((v) => (
              <Badge key={v} variant={v}>{v}</Badge>
            ))}
          </ComponentPreview>
        </section>

        <section id="sizes" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'variant', type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline'", defaultValue: "'primary'", description: '뱃지 스타일 변형' },
              { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: '뱃지 크기' },
              { name: 'children', type: 'ReactNode', required: true, description: '뱃지 내용' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Badge } from '@/components/fds'

// 상태 표시
<Badge variant="success">완료</Badge>
<Badge variant="danger">오류</Badge>
<Badge variant="warning">주의</Badge>

// 카테고리 레이블
<Badge variant="secondary" size="sm">금융</Badge>

// 인라인 사용
<span>
  거래 내역 <Badge variant="primary">New</Badge>
</span>`}
            language="tsx"
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
