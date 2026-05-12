'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Skeleton, SkeletonText, SkeletonCard } from '@/components/fds/Skeleton'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function SkeletonPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Skeleton</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          콘텐츠가 로딩되기 전 레이아웃을 미리 보여주는 플레이스홀더입니다.
          잔액, 거래 내역 등 데이터 로딩 시 레이아웃 이동(CLS)을 방지합니다.
        </p>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview label="Skeleton 기본형">
            <div className="w-full max-w-sm space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </ComponentPreview>
          <ComponentPreview label="원형 / 사각형">
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="w-24 h-24 rounded-xl" />
            <Skeleton className="w-32 h-8 rounded-lg" />
          </ComponentPreview>
        </section>

        <section id="skeleton-text" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">SkeletonText</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            여러 줄의 텍스트 로딩 상태를 표현할 때 사용합니다.
          </p>
          <ComponentPreview label="2줄 / 3줄 / 4줄">
            <div className="w-full max-w-sm space-y-6">
              <SkeletonText lines={2} />
              <SkeletonText lines={3} />
              <SkeletonText lines={4} />
            </div>
          </ComponentPreview>
        </section>

        <section id="skeleton-card" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">SkeletonCard</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            아바타 + 텍스트 패턴의 카드 로딩 상태. 거래 내역, 연락처 등에 사용합니다.
          </p>
          <ComponentPreview label="카드 스켈레톤">
            <div className="w-full max-w-sm space-y-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </ComponentPreview>
        </section>

        <section id="account-example" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">실제 사용 예: 계좌 카드</h2>
          <ComponentPreview label="계좌 잔액 로딩">
            <div className="w-full max-w-sm p-5 rounded-2xl border border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)]">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3.5 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-7 w-36 mb-1" />
              <Skeleton className="h-3.5 w-20" />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3">Skeleton</h3>
          <PropsTable
            props={[
              { name: 'className', type: 'string', description: '크기, 모양 등 커스터마이징 (예: "h-4 w-full rounded-lg")' },
            ]}
          />
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3 mt-6">SkeletonText</h3>
          <PropsTable
            props={[
              { name: 'lines', type: 'number', defaultValue: '3', description: '표시할 텍스트 줄 수' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Skeleton, SkeletonText, SkeletonCard } from '@/components/fds'

// 기본형 — 원하는 크기로 지정
<Skeleton className="h-4 w-full" />
<Skeleton className="w-12 h-12 rounded-full" />

// 텍스트 여러 줄
<SkeletonText lines={3} />

// 카드 패턴 (아바타 + 텍스트)
<SkeletonCard />

// 조건부 렌더링
{isLoading ? <SkeletonCard /> : <TransactionItem {...data} />}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '실제 레이아웃과 유사하게', description: 'Skeleton의 크기와 위치를 실제 콘텐츠와 최대한 맞춰 로딩 후 레이아웃 이동을 최소화하세요.' },
              { label: 'Spinner 대신 Skeleton 우선', description: '잔액, 목록, 카드처럼 구조가 예측 가능한 콘텐츠에는 Skeleton을 Spinner보다 먼저 고려하세요.' },
            ]}
            donts={[
              { label: '과도한 애니메이션 속도', description: '빠른 pulse 애니메이션은 오히려 불안감을 줍니다. 기본 속도를 유지하세요.' },
              { label: '실제 데이터 영역과 크게 다른 크기', description: 'Skeleton이 실제 콘텐츠보다 훨씬 크거나 작으면 로딩 완료 시 레이아웃이 크게 변해 좋지 않습니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
