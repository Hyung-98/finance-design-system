'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { BottomSheet } from '@/components/tds/BottomSheet'
import { Button } from '@/components/tds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

function BasicDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>바텀시트 열기</Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title="송금 확인"
        description="아래 내용을 확인하고 송금을 진행해주세요."
        footer={
          <>
            <Button onClick={() => setOpen(false)}>확인하고 송금하기</Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>취소</Button>
          </>
        }
      >
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-[var(--tds-color-text-secondary)]">받는 사람</span>
            <span className="font-medium text-[var(--tds-color-text-primary)]">홍길동</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--tds-color-text-secondary)]">금액</span>
            <span className="font-bold text-[var(--tds-color-text-primary)]">50,000원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--tds-color-text-secondary)]">수수료</span>
            <span className="font-medium text-[var(--tds-color-text-primary)]">무료</span>
          </div>
        </div>
      </BottomSheet>
    </>
  )
}

function SimpleDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>간단 시트 열기</Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title="알림"
        footer={<Button fullWidth onClick={() => setOpen(false)}>확인</Button>}
      >
        송금이 완료되었습니다. 잔액에서 차감되었으며 내역에서 확인할 수 있습니다.
      </BottomSheet>
    </>
  )
}

function ContentOnlyDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>메뉴 시트 열기</Button>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <div className="-mx-6 -mt-4">
          {['계좌 정보 보기', '이체 한도 변경', '계좌 별명 변경', '계좌 해지'].map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(false)}
              className="w-full text-left px-6 py-4 text-sm text-[var(--tds-color-text-primary)] hover:bg-[var(--tds-color-bg-elevated)] transition-colors border-b border-[var(--tds-color-border)] last:border-0"
            >
              {item}
            </button>
          ))}
        </div>
      </BottomSheet>
    </>
  )
}

export default function BottomSheetPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">BottomSheet</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          화면 하단에서 슬라이드 업되는 패널입니다. 토스 앱의 가장 핵심적인 UI 패턴으로,
          확인 다이얼로그, 액션 메뉴, 상세 정보 표시에 사용합니다.
        </p>

        <section id="basic">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview label="제목 + 내용 + 푸터">
            <BasicDemo />
          </ComponentPreview>
        </section>

        <section id="simple" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">간단한 알림</h2>
          <ComponentPreview label="제목 + 단순 텍스트 + 확인 버튼">
            <SimpleDemo />
          </ComponentPreview>
        </section>

        <section id="action-menu" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">액션 메뉴</h2>
          <ComponentPreview label="리스트형 메뉴">
            <ContentOnlyDemo />
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'open', type: 'boolean', required: true, description: '바텀시트 표시 여부' },
              { name: 'onClose', type: '() => void', required: true, description: '닫기 콜백 (배경 클릭, 외부 트리거)' },
              { name: 'title', type: 'string', description: '상단 제목' },
              { name: 'description', type: 'string', description: '제목 아래 보조 설명' },
              { name: 'children', type: 'ReactNode', description: '본문 콘텐츠' },
              { name: 'footer', type: 'ReactNode', description: '하단 고정 영역 (버튼 등)' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { BottomSheet } from '@/components/tds'
import { Button } from '@/components/tds'
import { useState } from 'react'

function TransferConfirm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>송금하기</Button>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title="송금 확인"
        description="아래 내용을 확인하고 진행해주세요."
        footer={
          <>
            <Button onClick={handleConfirm}>확인하고 송금하기</Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>취소</Button>
          </>
        }
      >
        <TransferSummary />
      </BottomSheet>
    </>
  )
}`}
            language="tsx"
          />
        </section>

        <section id="accessibility" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">접근성</h2>
          <ul className="space-y-3 text-sm text-[var(--tds-color-text-secondary)]">
            {[
              'role="dialog" + aria-modal="true"로 스크린 리더에 모달임을 알립니다.',
              'title prop이 있으면 aria-labelledby로 제목과 연결됩니다.',
              '열릴 때 body scroll이 잠겨 배경 콘텐츠 스크롤을 방지합니다.',
              '배경(오버레이) 클릭 시 onClose가 호출됩니다.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--tds-color-success)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '확인/취소 패턴에 사용', description: '송금 확인, 삭제 확인 등 사용자 액션을 최종 확인할 때 BottomSheet를 사용합니다.' },
              { label: '푸터 버튼은 명확한 액션', description: 'footer의 주 버튼은 "확인하고 송금하기"처럼 실행될 동작을 명시합니다.' },
            ]}
            donts={[
              { label: '복잡한 폼을 바텀시트에 넣기', description: '입력 필드가 많은 경우 별도 페이지로 이동하는 것이 좋습니다. 바텀시트 내 스크롤은 최소화하세요.' },
              { label: '중첩 바텀시트', description: '바텀시트 위에 또 다른 바텀시트를 띄우지 마세요. 사용자가 맥락을 잃을 수 있습니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
