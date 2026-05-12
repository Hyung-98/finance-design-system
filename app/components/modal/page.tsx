'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Modal } from '@/components/fds/Modal'
import { Button } from '@/components/fds/Button'

export default function ModalPage() {
  const [open, setOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Modal</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          사용자의 즉각적인 주의가 필요한 정보나 액션을 요구할 때 사용하는 오버레이 컴포넌트입니다.
        </p>

        <section id="basic">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">기본 모달</h2>
          <ComponentPreview>
            <Button onClick={() => setOpen(true)}>기본 모달 열기</Button>
          </ComponentPreview>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="개인정보 처리방침"
            description="서비스 이용을 위해 아래 내용을 확인해주세요."
            footer={
              <>
                <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
                <Button variant="primary" onClick={() => setOpen(false)}>확인</Button>
              </>
            }
          >
            <p>
              토스는 개인정보를 소중히 보호하며, 법률이 정하는 경우 외에는 개인정보를 무단으로 공개하거나 제3자에게 제공하지 않습니다.
            </p>
          </Modal>
        </section>

        <section id="confirm" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">확인 다이얼로그</h2>
          <ComponentPreview>
            <Button variant="danger" onClick={() => setConfirmOpen(true)}>계정 삭제</Button>
          </ComponentPreview>
          <Modal
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            title="정말 삭제하시겠습니까?"
            description="계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
            size="sm"
            footer={
              <>
                <Button variant="secondary" onClick={() => setConfirmOpen(false)}>취소</Button>
                <Button variant="danger" onClick={() => setConfirmOpen(false)}>삭제</Button>
              </>
            }
          />
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'open', type: 'boolean', required: true, description: '모달 표시 여부' },
              { name: 'onClose', type: '() => void', required: true, description: '모달 닫기 핸들러 (배경 클릭, X 버튼)' },
              { name: 'title', type: 'string', description: '모달 제목' },
              { name: 'description', type: 'string', description: '모달 설명 텍스트' },
              { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '모달 너비' },
              { name: 'children', type: 'ReactNode', description: '모달 본문 내용' },
              { name: 'footer', type: 'ReactNode', description: '하단 액션 영역 (버튼 등)' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Modal, Button } from '@/components/fds'
import { useState } from 'react'

function DeleteAccountModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        계정 삭제
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="정말 삭제하시겠습니까?"
        description="이 작업은 되돌릴 수 없습니다."
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              삭제
            </Button>
          </>
        }
      />
    </>
  )
}`}
            language="tsx"
          />
        </section>

        <section id="accessibility" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">접근성</h2>
          <ul className="space-y-3 text-sm text-[var(--fds-color-text-secondary)]">
            {[
              'role="dialog"와 aria-modal="true"가 자동 설정되어 스크린 리더에 모달임을 알립니다.',
              'title prop이 있을 경우 aria-labelledby로 자동 연결됩니다.',
              'Escape 키로 모달을 닫을 수 있습니다.',
              '모달 열림 시 배경 스크롤이 잠깁니다.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--fds-color-success)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
