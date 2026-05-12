'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { DosDonts } from '@/components/docs/DosDonts'
import { Button } from '@/components/fds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

const playgroundConfig: PlaygroundConfig = {
  variant: { type: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'], default: 'primary' },
  size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
  children: { type: 'string', default: '버튼' },
  disabled: { type: 'boolean', default: false },
  loading: { type: 'boolean', default: false },
  fullWidth: { type: 'boolean', default: false },
}

function codeTemplate(props: Record<string, unknown>) {
  const attrs = [
    props.variant !== 'primary' ? `variant="${props.variant}"` : '',
    props.size !== 'md' ? `size="${props.size}"` : '',
    props.disabled ? 'disabled' : '',
    props.loading ? 'loading' : '',
    props.fullWidth ? 'fullWidth' : '',
  ].filter(Boolean).join(' ')

  return `<Button${attrs ? ' ' + attrs : ''}>\n  ${props.children}\n</Button>`
}

export default function ButtonPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Button</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          사용자의 행동을 유도하는 가장 기본적인 인터랙티브 컴포넌트입니다.
          중요도에 따라 variant로 시각적 계층을 표현합니다.
        </p>

        {/* Playground */}
        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <Button
                variant={props.variant as 'primary'}
                size={props.size as 'md'}
                disabled={!!props.disabled}
                loading={!!props.loading}
                fullWidth={!!props.fullWidth}
              >
                {String(props.children)}
              </Button>
            )}
            codeTemplate={codeTemplate}
          />
        </section>

        {/* Variants */}
        <section id="variants">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview label="모든 variant">
            {(['primary', 'secondary', 'outline', 'ghost', 'danger'] as const).map((v) => (
              <Button key={v} variant={v}>{v}</Button>
            ))}
          </ComponentPreview>
          <div className="space-y-4 mt-4">
            {[
              { variant: 'primary', desc: '가장 중요한 단일 액션에 사용. 화면당 하나만 권장' },
              { variant: 'secondary', desc: '주요 액션의 대안이나 보조 액션에 사용' },
              { variant: 'outline', desc: '낮은 우선순위의 명시적 액션에 사용' },
              { variant: 'ghost', desc: '텍스트 링크처럼 최소 시각적 무게가 필요할 때' },
              { variant: 'danger', desc: '삭제, 비활성화 등 비가역적 액션에 사용' },
            ].map(({ variant, desc }) => (
              <div key={variant} className="flex items-start gap-4 p-4 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)]">
                <Button variant={variant as 'primary'} size="sm">{variant}</Button>
                <p className="text-sm text-[var(--fds-color-text-secondary)] mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section id="sizes" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview label="sm / md / lg">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </ComponentPreview>
        </section>

        {/* States */}
        <section id="states" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">States</h2>
          <ComponentPreview label="기본 / 비활성 / 로딩">
            <Button>기본</Button>
            <Button disabled>비활성</Button>
            <Button loading>로딩 중</Button>
          </ComponentPreview>
        </section>

        {/* Full width */}
        <section id="full-width" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Full Width</h2>
          <ComponentPreview label="fullWidth">
            <div className="w-full max-w-sm">
              <Button fullWidth>전체 너비 버튼</Button>
            </div>
          </ComponentPreview>
        </section>

        {/* Props */}
        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", defaultValue: "'primary'", description: '버튼 스타일 변형' },
              { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '버튼 크기' },
              { name: 'disabled', type: 'boolean', defaultValue: 'false', description: '비활성화 상태' },
              { name: 'loading', type: 'boolean', defaultValue: 'false', description: '로딩 스피너 표시 및 클릭 차단' },
              { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: '부모 컨테이너의 전체 너비 차지' },
              { name: 'onClick', type: '() => void', description: '클릭 이벤트 핸들러' },
              { name: 'children', type: 'ReactNode', required: true, description: '버튼 내용' },
            ]}
          />
        </section>

        {/* Code */}
        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Button } from '@/components/fds'

// 기본
<Button>시작하기</Button>

// Variant
<Button variant="secondary">취소</Button>
<Button variant="danger">삭제</Button>

// 로딩 상태
<Button loading>처리 중...</Button>

// 전체 너비
<Button fullWidth>동의하고 계속하기</Button>

// 클릭 핸들러
<Button onClick={() => router.push('/next')}>
  다음 단계
</Button>`}
            language="tsx"
          />
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">접근성</h2>
          <ul className="space-y-3 text-sm text-[var(--fds-color-text-secondary)]">
            {[
              'HTML <button> 요소를 기반으로 하여 기본 키보드 인터랙션(Enter, Space)이 자동 지원됩니다.',
              'disabled 상태에서는 자동으로 aria-disabled 처리되어 스크린 리더가 비활성 상태를 안내합니다.',
              'loading 상태에서는 포커스와 클릭이 차단되어 중복 제출을 방지합니다.',
              '아이콘만 있는 버튼의 경우 aria-label을 반드시 제공하세요.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--fds-color-success)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Do/Dont */}
        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              {
                label: '동작을 명확히 표현하는 레이블',
                description: '"송금하기", "계좌 추가하기"처럼 클릭 후 결과를 예측할 수 있게 작성합니다.',
              },
            ]}
            donts={[
              {
                label: '모호한 레이블 사용 금지',
                description: '"확인", "OK", "예" 같이 어떤 동작이 일어나는지 알 수 없는 레이블은 사용하지 마세요.',
              },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
