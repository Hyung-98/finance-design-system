'use client'

import { useState, useEffect } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Progress, StepProgress } from '@/components/tds/Progress'
import { Button } from '@/components/tds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

function AnimatedDemo() {
  const [value, setValue] = useState(30)
  return (
    <div className="w-full max-w-sm space-y-4">
      <Progress value={value} showLabel label="업로드 중" />
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setValue(v => Math.max(0, v - 20))}>−20%</Button>
        <Button size="sm" variant="outline" onClick={() => setValue(v => Math.min(100, v + 20))}>+20%</Button>
        <Button size="sm" variant="secondary" onClick={() => setValue(0)}>초기화</Button>
      </div>
    </div>
  )
}

function StepDemo() {
  const [step, setStep] = useState(2)
  const total = 5
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex justify-between text-sm text-[var(--tds-color-text-secondary)]">
        <span>단계 {step} / {total}</span>
      </div>
      <StepProgress current={step} total={total} />
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setStep(v => Math.max(0, v - 1))}>이전</Button>
        <Button size="sm" variant="primary" onClick={() => setStep(v => Math.min(total, v + 1))}>다음</Button>
      </div>
    </div>
  )
}

export default function ProgressPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Progress</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          작업 진행률이나 단계를 시각적으로 표시하는 컴포넌트입니다.
          파일 업로드, 온보딩 단계 등에 사용합니다.
        </p>

        <section id="basic">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">기본 사용</h2>
          <ComponentPreview label="인터랙티브 데모">
            <AnimatedDemo />
          </ComponentPreview>
        </section>

        <section id="variants" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview label="primary / success / warning / danger">
            <div className="w-full max-w-sm space-y-4">
              <Progress value={70} variant="primary" label="저장 중" showLabel />
              <Progress value={100} variant="success" label="완료" showLabel />
              <Progress value={45} variant="warning" label="주의" showLabel />
              <Progress value={20} variant="danger" label="위험" showLabel />
            </div>
          </ComponentPreview>
        </section>

        <section id="sizes" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview label="sm / md / lg">
            <div className="w-full max-w-sm space-y-4">
              <Progress value={60} size="sm" label="sm" />
              <Progress value={60} size="md" label="md" />
              <Progress value={60} size="lg" label="lg" />
            </div>
          </ComponentPreview>
        </section>

        <section id="step-progress" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">StepProgress</h2>
          <p className="text-sm text-[var(--tds-color-text-secondary)] mb-4">
            온보딩, 가입 절차 등 단계별 진행을 세그먼트로 표시합니다.
          </p>
          <ComponentPreview label="단계 진행 데모">
            <StepDemo />
          </ComponentPreview>
          <ComponentPreview label="다양한 단계 수">
            <div className="w-full max-w-sm space-y-3">
              <StepProgress current={1} total={3} />
              <StepProgress current={3} total={5} />
              <StepProgress current={7} total={8} />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] mb-3">Progress</h3>
          <PropsTable
            props={[
              { name: 'value', type: 'number', required: true, description: '현재 진행값 (0 ~ max)' },
              { name: 'max', type: 'number', defaultValue: '100', description: '최대값' },
              { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '바 높이' },
              { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger'", defaultValue: "'primary'", description: '색상 변형' },
              { name: 'showLabel', type: 'boolean', defaultValue: 'false', description: '퍼센트 레이블 표시' },
              { name: 'label', type: 'string', description: '진행 항목 설명 레이블' },
            ]}
          />
          <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] mb-3 mt-6">StepProgress</h3>
          <PropsTable
            props={[
              { name: 'current', type: 'number', required: true, description: '현재 완료된 단계 수' },
              { name: 'total', type: 'number', required: true, description: '전체 단계 수' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Progress, StepProgress } from '@/components/tds'

// 기본 진행 바
<Progress value={75} label="업로드 중" showLabel />

// 완료 상태
<Progress value={100} variant="success" label="완료" showLabel />

// 온보딩 단계
<StepProgress current={2} total={4} />

// 동적 진행률
function UploadProgress({ progress }: { progress: number }) {
  return (
    <Progress
      value={progress}
      variant={progress === 100 ? 'success' : 'primary'}
      showLabel
      label={progress === 100 ? '업로드 완료' : '업로드 중'}
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
              { label: 'StepProgress는 온보딩에', description: '가입 절차, 설정 단계처럼 명확한 단계 수가 있을 때 StepProgress를 사용합니다.' },
              { label: '완료 시 success variant', description: '100% 도달 시 variant를 success로 변경해 완료를 시각적으로 강조합니다.' },
            ]}
            donts={[
              { label: '불확정 진행에 Progress 사용', description: '언제 끝날지 모르는 작업에는 Spinner를 사용하세요. Progress는 정확한 진행률이 있을 때만 사용합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
