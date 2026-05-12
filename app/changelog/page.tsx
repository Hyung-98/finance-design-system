'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'

interface ChangeEntry {
  version: string
  date: string
  changes: {
    type: 'new' | 'update' | 'fix' | 'deprecate'
    content: string
  }[]
}

const changelog: ChangeEntry[] = [
  {
    version: '1.3.0',
    date: '2026-04-30',
    changes: [
      { type: 'new', content: 'Accordion 컴포넌트 추가 (single/multiple 모드)' },
      { type: 'new', content: 'Chip / ChipGroup 컴포넌트 추가 (filter/tag 변형)' },
      { type: 'new', content: 'Avatar / AvatarGroup 컴포넌트 추가 (이니셜 폴백 지원)' },
      { type: 'new', content: 'Progress / StepProgress 컴포넌트 추가' },
      { type: 'new', content: 'Tooltip 컴포넌트 추가 (4방향 placement)' },
      { type: 'new', content: 'Divider 컴포넌트 추가 (horizontal/vertical, 레이블 지원)' },
      { type: 'new', content: 'Textarea 컴포넌트 추가 (글자 수 카운터, 에러 상태)' },
      { type: 'new', content: 'Pattern 섹션 신설: Form, Empty State, Error State, Loading State' },
      { type: 'new', content: 'Cmd+K 전역 검색 (CommandSearch) 추가' },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-04-15',
    changes: [
      { type: 'new', content: 'BottomSheet 컴포넌트 추가 (슬라이드 업, body scroll lock)' },
      { type: 'new', content: 'Tabs 컴포넌트 추가 (line/pill 변형, render prop 지원)' },
      { type: 'new', content: 'Select 컴포넌트 추가 (커스텀 드롭다운, 제어/비제어)' },
      { type: 'new', content: 'Radio / RadioGroup 컴포넌트 추가' },
      { type: 'new', content: 'Spinner 컴포넌트 추가 (sm/md/lg, 3가지 변형)' },
      { type: 'new', content: 'Skeleton / SkeletonText / SkeletonCard 컴포넌트 추가' },
      { type: 'new', content: 'Card / CardHeader / CardTitle / CardDescription / CardFooter 추가' },
      { type: 'new', content: 'Motion 토큰 페이지 추가 (duration, easing, Do/Don\'t)' },
      { type: 'new', content: 'Layout/Grid 페이지 추가 (브레이크포인트, Z-index 시스템)' },
      { type: 'update', content: 'Icons 페이지: 32개 실제 SVG 아이콘으로 교체 (이름별 개별 구현)' },
      { type: 'fix', content: 'TableOfContents: 중복 키 경고 수정 (slugify + id 자동 부여)' },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-04-01',
    changes: [
      { type: 'new', content: 'Toast 컴포넌트 추가 (4가지 변형, 자동 닫기)' },
      { type: 'new', content: 'Modal 컴포넌트 추가 (size 변형, 접근성 지원)' },
      { type: 'new', content: 'Badge 컴포넌트 추가 (dot 모드 포함)' },
      { type: 'new', content: 'Toggle 컴포넌트 추가 (sm/md/lg 크기)' },
      { type: 'update', content: 'Button: loading 상태 시 클릭 차단 처리 강화' },
      { type: 'update', content: 'Input: suffix/prefix 지원 추가' },
      { type: 'fix', content: '다크모드에서 border 색상 번짐 현상 수정' },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-03-15',
    changes: [
      { type: 'new', content: '디자인 시스템 가이드 최초 출시' },
      { type: 'new', content: 'Getting Started 페이지' },
      { type: 'new', content: '디자인 원칙 페이지 (명확성, 일관성, 효율성, 신뢰)' },
      { type: 'new', content: 'Foundation: 색상 토큰 시스템 (Primitive + Semantic)' },
      { type: 'new', content: 'Foundation: 타이포그래피 스케일' },
      { type: 'new', content: 'Foundation: 간격 시스템 (4px 베이스)' },
      { type: 'new', content: 'Foundation: 아이콘 가이드' },
      { type: 'new', content: 'Button 컴포넌트 (5가지 variant, 3가지 size)' },
      { type: 'new', content: 'Input 컴포넌트 (에러/보조 텍스트, forwardRef)' },
      { type: 'new', content: 'Checkbox 컴포넌트 (intermediate 상태 지원)' },
      { type: 'new', content: '다크모드 지원 (next-themes)' },
      { type: 'new', content: '인터랙티브 Playground' },
    ],
  },
]

const typeStyles = {
  new: { label: '신규', className: 'bg-[var(--fds-color-primary-subtle)] text-[var(--fds-color-primary)]' },
  update: { label: '업데이트', className: 'bg-[var(--fds-color-success-subtle)] text-[var(--fds-color-success)]' },
  fix: { label: '수정', className: 'bg-[var(--fds-color-warning-subtle)] text-[var(--fds-color-warning)]' },
  deprecate: { label: '지원 종료', className: 'bg-[var(--fds-color-danger-subtle)] text-[var(--fds-color-danger)]' },
}

export default function ChangelogPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">문서</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Changelog</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          FDS 디자인 시스템 가이드의 버전별 변경 내역입니다.
        </p>

        <div className="space-y-10">
          {changelog.map((entry) => (
            <section key={entry.version} id={`v${entry.version.replace(/\./g, '-')}`}>
              <div className="flex items-baseline gap-3 mb-5">
                <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)]">
                  v{entry.version}
                </h2>
                <span className="text-sm text-[var(--fds-color-text-tertiary)]">{entry.date}</span>
              </div>
              <div className="space-y-2.5 border-l-2 border-[var(--fds-color-border)] pl-5">
                {entry.changes.map((change, i) => {
                  const style = typeStyles[change.type]
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded mt-0.5 ${style.className}`}>
                        {style.label}
                      </span>
                      <p className="text-sm text-[var(--fds-color-text-secondary)] leading-relaxed">
                        {change.content}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </article>
      <TableOfContents />
    </div>
  )
}
