'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Textarea } from '@/components/tds/Textarea'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function TextareaPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Textarea</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          여러 줄의 텍스트를 입력받는 컴포넌트입니다.
          메모, 사유 입력, 피드백 등 긴 텍스트 입력에 사용합니다.
        </p>

        <section id="basic">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview label="레이블 + 보조 텍스트">
            <div className="w-full max-w-sm">
              <Textarea
                label="이체 메모"
                placeholder="받는 분에게 보낼 메시지를 입력하세요"
                helperText="상대방의 통장에 표시됩니다"
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="with-count" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">글자 수 카운터</h2>
          <ComponentPreview label="maxLength + showCount">
            <div className="w-full max-w-sm">
              <Textarea
                label="신고 사유"
                placeholder="신고 사유를 입력해주세요"
                maxLength={200}
                showCount
                helperText="구체적으로 작성할수록 빠른 처리가 가능합니다"
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="states" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">States</h2>
          <ComponentPreview label="에러 상태">
            <div className="w-full max-w-sm">
              <Textarea
                label="메모"
                defaultValue="욕설이 포함된 내용"
                errorText="부적절한 내용이 포함되어 있습니다"
              />
            </div>
          </ComponentPreview>
          <ComponentPreview label="비활성 상태">
            <div className="w-full max-w-sm">
              <Textarea
                label="처리 내용"
                defaultValue="2024년 1월 15일 처리 완료"
                disabled
              />
            </div>
          </ComponentPreview>
        </section>

        <section id="resize" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Resize</h2>
          <ComponentPreview label="none / vertical (기본) 비교">
            <div className="w-full max-w-sm space-y-4">
              <Textarea label="크기 조절 불가 (none)" resize="none" placeholder="resize 없음" />
              <Textarea label="세로 조절 가능 (vertical)" resize="vertical" placeholder="세로로 늘릴 수 있습니다" />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'label', type: 'string', description: '입력 레이블' },
              { name: 'helperText', type: 'string', description: '보조 안내 텍스트' },
              { name: 'errorText', type: 'string', description: '에러 메시지' },
              { name: 'maxLength', type: 'number', description: '최대 입력 글자 수' },
              { name: 'showCount', type: 'boolean', defaultValue: 'false', description: '현재/최대 글자 수 표시' },
              { name: 'resize', type: "'none' | 'vertical' | 'auto'", defaultValue: "'vertical'", description: '크기 조절 방향' },
              { name: '...TextareaHTMLAttributes', type: '—', description: 'rows, placeholder, disabled, value, onChange 등 textarea 기본 속성' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Textarea } from '@/components/tds'
import { useState } from 'react'

// 기본
<Textarea
  label="이체 메모"
  placeholder="메시지를 입력하세요"
  helperText="상대방 통장에 표시됩니다"
/>

// 글자 수 카운터
<Textarea
  label="신고 사유"
  maxLength={200}
  showCount
  resize="none"
/>

// 제어
function MemoInput() {
  const [memo, setMemo] = useState('')
  return (
    <Textarea
      label="메모"
      value={memo}
      onChange={(e) => setMemo(e.target.value)}
      maxLength={100}
      showCount
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
              { label: '적절한 초기 높이', description: 'rows prop으로 예상 입력량에 맞는 초기 높이를 설정합니다.' },
              { label: '글자 제한 시 카운터 표시', description: 'maxLength가 있을 때 showCount를 함께 사용해 남은 글자 수를 안내합니다.' },
            ]}
            donts={[
              { label: '한 줄 입력에 Textarea', description: '이름, 금액 등 단일 줄 입력은 Input 컴포넌트를 사용하세요.' },
              { label: '너무 작은 높이', description: 'rows를 1~2로 설정하면 여러 줄 입력 시 스크롤이 생겨 UX가 좋지 않습니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
