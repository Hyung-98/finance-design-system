'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { Playground, type PlaygroundConfig } from '@/components/docs/Playground'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Toast } from '@/components/fds/Toast'

const playgroundConfig: PlaygroundConfig = {
  message: { type: 'string', default: '송금이 완료되었습니다.' },
  description: { type: 'string', default: '' },
  variant: { type: 'select', options: ['default', 'success', 'danger', 'warning'], default: 'success' },
}

export default function ToastPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Toast</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          사용자 액션의 결과나 시스템 알림을 일시적으로 표시하는 컴포넌트입니다.
          화면 하단에서 짧게 나타났다 사라집니다.
        </p>

        <section id="playground">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">인터랙티브 데모</h2>
          <Playground
            config={playgroundConfig}
            render={(props) => (
              <Toast
                message={String(props.message)}
                description={props.description ? String(props.description) : undefined}
                variant={props.variant as 'default'}
              />
            )}
            codeTemplate={(props) =>
              `<Toast\n  message="${props.message}"\n  variant="${props.variant}"\n/>`
            }
          />
        </section>

        <section id="variants" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Toast variant="default" message="기본 알림 메시지입니다." />
              <Toast variant="success" message="송금이 완료되었습니다." />
              <Toast variant="danger" message="오류가 발생했습니다." description="잠시 후 다시 시도해주세요." />
              <Toast variant="warning" message="인터넷 연결이 불안정합니다." />
            </div>
          </ComponentPreview>
        </section>

        <section id="with-action" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Action 버튼</h2>
          <ComponentPreview>
            <Toast
              variant="default"
              message="메시지가 삭제되었습니다."
              action={{ label: '실행취소', onClick: () => alert('실행 취소') }}
            />
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'message', type: 'string', required: true, description: '주요 알림 메시지' },
              { name: 'description', type: 'string', description: '부가 설명 텍스트' },
              { name: 'variant', type: "'default' | 'success' | 'danger' | 'warning'", defaultValue: "'default'", description: '토스트 스타일 변형' },
              { name: 'action', type: '{ label: string; onClick: () => void }', description: '토스트 내 액션 버튼' },
              { name: 'onClose', type: '() => void', description: '닫기 버튼 표시 및 핸들러' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Toast } from '@/components/fds'

// 성공
<Toast variant="success" message="송금이 완료되었습니다." />

// 오류 + 설명
<Toast
  variant="danger"
  message="오류가 발생했습니다."
  description="잠시 후 다시 시도해주세요."
/>

// 실행 취소 액션
<Toast
  message="메시지가 삭제되었습니다."
  action={{ label: '실행취소', onClick: handleUndo }}
/>

// 토스트 시스템 사용 (토스트 매니저 패턴)
import { toast } from '@/components/fds'

toast.success('변경사항이 저장되었습니다.')
toast.error('저장에 실패했습니다.')`}
            language="tsx"
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
