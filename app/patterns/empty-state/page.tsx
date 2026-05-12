'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Button } from '@/components/fds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

function EmptyStateCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode
  title: string
  description: string
  action?: { label: string }
}) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 max-w-xs">
      <div className="w-16 h-16 rounded-2xl bg-[var(--fds-color-bg-elevated)] flex items-center justify-center mb-5 text-[var(--fds-color-text-tertiary)]">
        {icon}
      </div>
      <h3 className="text-base font-bold text-[var(--fds-color-text-primary)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--fds-color-text-secondary)] leading-relaxed mb-5">{description}</p>
      {action && <Button size="sm">{action.label}</Button>}
    </div>
  )
}

const TransactionIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const NotificationIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

export default function EmptyStatePage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">패턴</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Empty State</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          데이터가 없을 때 표시하는 화면입니다. 사용자에게 현재 상황을 안내하고
          다음 행동을 유도하는 역할을 합니다.
        </p>

        <section id="types">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">유형별 예시</h2>
          <ComponentPreview label="거래 내역 없음">
            <EmptyStateCard
              icon={<TransactionIcon />}
              title="거래 내역이 없어요"
              description="이 기간에 거래한 내역이 없습니다. 다른 기간을 선택해보세요."
            />
          </ComponentPreview>
          <ComponentPreview label="검색 결과 없음">
            <EmptyStateCard
              icon={<SearchIcon />}
              title="검색 결과가 없어요"
              description='"토스증" 과 일치하는 결과를 찾지 못했습니다. 검색어를 다시 확인해보세요.'
            />
          </ComponentPreview>
          <ComponentPreview label="알림 없음 + CTA">
            <EmptyStateCard
              icon={<NotificationIcon />}
              title="받은 알림이 없어요"
              description="중요한 알림을 놓치지 않으려면 알림 설정을 켜두세요."
              action={{ label: '알림 설정하기' }}
            />
          </ComponentPreview>
        </section>

        <section id="anatomy" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">구성 요소</h2>
          <div className="space-y-3">
            {[
              { element: '아이콘/일러스트', required: true, desc: '현재 상태를 시각적으로 표현. 24~64px 아이콘 또는 일러스트.' },
              { element: '제목', required: true, desc: '상황을 간결하게 설명. "N이 없어요" 패턴을 권장.' },
              { element: '설명', required: false, desc: '이유 또는 해결 방법 안내. 1~2문장.' },
              { element: 'CTA 버튼', required: false, desc: '사용자가 취할 수 있는 다음 행동. 항상 있을 필요는 없음.' },
            ].map((item) => (
              <div key={item.element} className="flex gap-4 p-4 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)]">
                <div className="shrink-0 mt-0.5">
                  {item.required
                    ? <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--fds-color-danger-subtle)] text-[var(--fds-color-danger)] font-medium">필수</span>
                    : <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-tertiary)] font-medium">선택</span>
                  }
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--fds-color-text-primary)]">{item.element}</p>
                  <p className="text-sm text-[var(--fds-color-text-secondary)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`// Empty State 컴포넌트 패턴
function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-base font-bold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-secondary leading-relaxed mb-5">{description}</p>
      )}
      {action && (
        <Button size="sm" onClick={action.onClick}>{action.label}</Button>
      )}
    </div>
  )
}

// 사용 예
{transactions.length === 0 ? (
  <EmptyState
    icon={<ReceiptIcon />}
    title="거래 내역이 없어요"
    description="이 기간에 거래한 내역이 없습니다."
  />
) : (
  <TransactionList items={transactions} />
)}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '"없어요" 패턴 사용', description: '제목은 "거래 내역이 없어요"처럼 친근하게 상황을 설명합니다. 기술적 표현을 피합니다.' },
              { label: '해결 방법 안내', description: '사용자가 무엇을 할 수 있는지 설명 또는 CTA로 안내합니다.' },
            ]}
            donts={[
              { label: '"데이터 없음" 같은 기술적 표현', description: '개발자 관점의 표현 대신 사용자 언어로 작성합니다.' },
              { label: '빈 화면 그대로 두기', description: '아무것도 표시하지 않으면 오류인지 정상 상태인지 알 수 없습니다. 항상 empty state를 제공합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
