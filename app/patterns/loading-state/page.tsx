'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Spinner } from '@/components/tds/Spinner'
import { Skeleton, SkeletonCard } from '@/components/tds/Skeleton'
import { Progress } from '@/components/tds/Progress'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function LoadingStatePage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">패턴</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Loading State</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          데이터 로딩 중 상태를 표현하는 패턴입니다.
          Spinner, Skeleton, Progress Bar 중 상황에 맞는 것을 선택합니다.
        </p>

        <section id="decision">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">선택 기준</h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--tds-color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">컴포넌트</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">언제 사용</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">예시</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--tds-color-border)]">
                {[
                  ['Skeleton', '구조가 예측 가능한 콘텐츠', '잔액 카드, 거래 목록, 프로필'],
                  ['Spinner', '짧은 처리 대기 (< 2초)', '버튼 처리, API 호출, 폼 제출'],
                  ['Progress Bar', '진행률을 알 수 있는 작업', '파일 업로드, 다운로드, 다단계 온보딩'],
                ].map(([comp, when, ex]) => (
                  <tr key={comp}>
                    <td className="px-4 py-3 font-medium text-[var(--tds-color-primary)]">{comp}</td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{when}</td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-tertiary)]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="skeleton-pattern" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Skeleton 패턴</h2>
          <p className="text-sm text-[var(--tds-color-text-secondary)] mb-4">
            실제 레이아웃과 유사한 플레이스홀더로 CLS(레이아웃 이동)를 최소화합니다.
          </p>
          <ComponentPreview label="계좌 카드 로딩">
            <div className="w-full max-w-sm p-5 rounded-2xl border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)]">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3.5 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-7 w-40 mb-1" />
              <Skeleton className="h-3.5 w-24" />
            </div>
          </ComponentPreview>
          <ComponentPreview label="거래 목록 로딩">
            <div className="w-full max-w-sm space-y-2">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </ComponentPreview>
        </section>

        <section id="spinner-pattern" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Spinner 패턴</h2>
          <ComponentPreview label="페이지 초기 로딩">
            <div className="flex flex-col items-center gap-3 py-8">
              <Spinner size="lg" />
              <p className="text-sm text-[var(--tds-color-text-secondary)]">잔액을 불러오는 중...</p>
            </div>
          </ComponentPreview>
          <ComponentPreview label="인라인 로딩 (결과 갱신)">
            <div className="w-full max-w-sm">
              <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--tds-color-border)]">
                <span className="text-sm text-[var(--tds-color-text-secondary)]">현재 환율 계산 중</span>
                <Spinner size="sm" />
              </div>
            </div>
          </ComponentPreview>
        </section>

        <section id="progress-pattern" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Progress 패턴</h2>
          <ComponentPreview label="파일 업로드">
            <div className="w-full max-w-sm space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--tds-color-text-primary)] font-medium">증빙 서류 업로드</span>
                <span className="text-[var(--tds-color-text-tertiary)]">2.3 MB / 5 MB</span>
              </div>
              <Progress value={46} variant="primary" showLabel />
            </div>
          </ComponentPreview>
          <ComponentPreview label="온보딩 단계">
            <div className="w-full max-w-sm">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-[var(--tds-color-text-secondary)]">2단계: 신분증 촬영</span>
                <span className="text-[var(--tds-color-text-tertiary)]">2 / 4</span>
              </div>
              <Progress value={50} size="sm" />
            </div>
          </ComponentPreview>
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`// 조건부 로딩 상태 처리 패턴
function AccountCard({ accountId }) {
  const { data, isLoading, error } = useAccount(accountId)

  // 1. Skeleton — 구조 예측 가능
  if (isLoading) {
    return (
      <div className="p-5 rounded-2xl border">
        <div className="flex gap-3 mb-4">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-3.5 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <Skeleton className="h-7 w-40" />
      </div>
    )
  }

  // 2. Error State
  if (error) return <ErrorState onRetry={refetch} />

  // 3. 실제 데이터
  return <AccountCardContent data={data} />
}

// Spinner — 짧은 처리
function TransferButton({ onTransfer }) {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      loading={loading}
      onClick={async () => {
        setLoading(true)
        await onTransfer()
        setLoading(false)
      }}
    >
      이체하기
    </Button>
  )
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: 'Skeleton 우선', description: '콘텐츠 구조를 알 수 있다면 Spinner 대신 Skeleton을 사용해 더 나은 체감 성능을 제공합니다.' },
              { label: '최소 표시 시간 적용', description: '너무 빠르게 사라지는 로딩 상태는 오히려 불안정하게 느껴질 수 있습니다. 최소 300ms를 유지하세요.' },
            ]}
            donts={[
              { label: '여러 Spinner 동시 표시', description: '한 화면에 여러 Spinner가 보이면 혼란스럽습니다. 섹션별 Skeleton으로 대체하세요.' },
              { label: '무한 로딩', description: '타임아웃을 설정하고 일정 시간 이상 로딩되면 에러 상태로 전환하세요.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
