'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { DosDonts } from '@/components/docs/DosDonts'
import { Spinner } from '@/components/fds/Spinner'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Button } from '@/components/fds/Button'

const playgroundConfig: PlaygroundConfig = {
  size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
  variant: { type: 'select', options: ['primary', 'white', 'current'], default: 'primary' },
}

function codeTemplate(props: Record<string, unknown>) {
  const attrs = [
    props.size !== 'md' ? `size="${props.size}"` : '',
    props.variant !== 'primary' ? `variant="${props.variant}"` : '',
  ].filter(Boolean).join(' ')
  return `<Spinner${attrs ? ' ' + attrs : ''} />`
}

export default function SpinnerPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Spinner</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          콘텐츠 로딩 또는 처리 중임을 나타내는 인디케이터입니다.
          송금, 결제 처리 등 짧은 대기 상태에 사용합니다.
        </p>

        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <Spinner
                size={props.size as 'sm' | 'md' | 'lg'}
                variant={props.variant as 'primary' | 'white' | 'current'}
              />
            )}
            codeTemplate={codeTemplate}
          />
        </section>

        <section id="sizes" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview label="sm / md / lg">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </ComponentPreview>
          <div className="space-y-2 mt-3 text-sm text-[var(--fds-color-text-secondary)]">
            <p><strong>sm (16px)</strong> — 버튼 내부, 인라인 로딩</p>
            <p><strong>md (24px)</strong> — 기본값. 일반적인 로딩 상태</p>
            <p><strong>lg (40px)</strong> — 전체 페이지 또는 카드 로딩</p>
          </div>
        </section>

        <section id="variants" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview label="primary">
            <Spinner variant="primary" />
          </ComponentPreview>
          <ComponentPreview label="white (어두운 배경)">
            <div className="bg-[var(--fds-color-primary)] p-8 rounded-xl flex items-center justify-center w-full">
              <Spinner variant="white" />
            </div>
          </ComponentPreview>
          <ComponentPreview label="current (부모 색상 상속)">
            <div className="text-[var(--fds-color-success)] flex items-center gap-2">
              <Spinner variant="current" size="sm" />
              <span className="text-sm font-medium">처리 중...</span>
            </div>
          </ComponentPreview>
        </section>

        <section id="usage" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">사용 패턴</h2>
          <ComponentPreview label="버튼 로딩">
            <Button loading>송금 중</Button>
          </ComponentPreview>
          <ComponentPreview label="페이지 로딩">
            <div className="flex flex-col items-center gap-3 py-8">
              <Spinner size="lg" />
              <p className="text-sm text-[var(--fds-color-text-secondary)]">잔액을 불러오는 중...</p>
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '스피너 크기 (16 / 24 / 40px)' },
              { name: 'variant', type: "'primary' | 'white' | 'current'", defaultValue: "'primary'", description: '색상 변형. current는 부모 color 상속' },
              { name: 'className', type: 'string', description: '추가 Tailwind 클래스' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Spinner } from '@/components/fds'

// 기본
<Spinner />

// 크기
<Spinner size="sm" />
<Spinner size="lg" />

// 어두운 배경 위
<div className="bg-blue-500 p-4">
  <Spinner variant="white" />
</div>

// 페이지 로딩
<div className="flex flex-col items-center gap-3 py-20">
  <Spinner size="lg" />
  <p className="text-secondary">불러오는 중...</p>
</div>`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '대기 시간 안내', description: '로딩 텍스트를 함께 표시해 사용자가 무엇을 기다리는지 알 수 있게 합니다.' },
              { label: '짧은 대기에 사용', description: '2초 미만의 짧은 로딩에 Spinner를 사용합니다. 긴 작업에는 Progress Bar를 고려하세요.' },
            ]}
            donts={[
              { label: '전체 화면 덮기', description: '콘텐츠 위에 반투명 오버레이로 Spinner만 표시하지 마세요. Skeleton을 먼저 고려하세요.' },
              { label: '여러 Spinner 동시 표시', description: '같은 화면에 여러 Spinner를 동시에 사용하면 혼란을 줍니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
