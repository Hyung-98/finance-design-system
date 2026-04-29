'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Input } from '@/components/tds/Input'
import { Select } from '@/components/tds/Select'
import { Button } from '@/components/tds/Button'
import { Checkbox } from '@/components/tds/Checkbox'
import { CodeBlock } from '@/components/docs/CodeBlock'

function TransferForm() {
  const [amount, setAmount] = useState('')
  const [memo, setMemo] = useState('')
  const [bank, setBank] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const amountError = submitted && !amount ? '금액을 입력해주세요' : ''
  const bankError = submitted && !bank ? '은행을 선택해주세요' : ''

  return (
    <div className="w-full max-w-sm space-y-5">
      <Select
        label="받는 은행"
        options={[
          { value: 'toss', label: '토스뱅크' },
          { value: 'kb', label: 'KB국민은행' },
          { value: 'shinhan', label: '신한은행' },
          { value: 'woori', label: '우리은행' },
        ]}
        value={bank}
        onChange={setBank}
        placeholder="은행을 선택하세요"
        errorText={bankError}
      />
      <Input
        label="이체 금액"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        errorText={amountError}
        helperText="이체 한도: 1회 100만원"
        suffix="원"
      />
      <Input
        label="메모 (선택)"
        placeholder="받는 분에게 표시될 메모"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
      <Checkbox
        label="이체 정보를 확인했습니다"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      <Button
        fullWidth
        disabled={!agreed}
        onClick={() => setSubmitted(true)}
      >
        이체하기
      </Button>
    </div>
  )
}

export default function FormPatternPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">패턴</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Form 패턴</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          입력 컴포넌트를 조합한 폼 구성 원칙입니다.
          이체, 가입, 결제 등 사용자 입력이 필요한 모든 화면에 적용됩니다.
        </p>

        <section id="example">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">실전 예시: 이체 폼</h2>
          <ComponentPreview label="이체 폼 전체 구성">
            <TransferForm />
          </ComponentPreview>
        </section>

        <section id="layout" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">레이아웃 원칙</h2>
          <div className="space-y-4">
            {[
              {
                title: '단일 컬럼',
                desc: '모바일 우선 폼은 항상 단일 컬럼으로 구성합니다. 여러 필드를 같은 줄에 배치하면 작은 화면에서 사용하기 어렵습니다.',
              },
              {
                title: '레이블은 항상 위에',
                desc: '레이블을 입력 필드 위에 배치합니다. placeholder만으로 레이블을 대체하지 않습니다. 입력 중 컨텍스트를 잃게 됩니다.',
              },
              {
                title: '관련 필드 그룹화',
                desc: '연관된 필드는 시각적으로 가까이 배치하고, 섹션 간에는 Divider나 추가 여백으로 구분합니다.',
              },
              {
                title: 'CTA는 하단 고정',
                desc: '제출 버튼은 폼 하단에 배치하며, 긴 폼에서는 하단 sticky로 항상 접근 가능하게 합니다.',
              },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-[var(--tds-radius-lg)] border border-[var(--tds-color-border)]">
                <p className="text-sm font-semibold text-[var(--tds-color-text-primary)] mb-1">{item.title}</p>
                <p className="text-sm text-[var(--tds-color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="validation" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">유효성 검사 시점</h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--tds-color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">시점</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">방법</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">사용 경우</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--tds-color-border)]">
                {[
                  ['onBlur', '포커스를 잃을 때', '이메일 형식, 숫자 범위 확인'],
                  ['onChange', '입력 중 실시간', '글자 수 제한, 허용 문자 필터링'],
                  ['onSubmit', '제출 버튼 클릭 시', '필수 필드 빈값 확인, 최종 서버 검증'],
                ].map(([timing, method, when]) => (
                  <tr key={timing}>
                    <td className="px-4 py-3"><code className="text-xs bg-[var(--tds-color-bg-elevated)] px-1.5 py-0.5 rounded font-mono">{timing}</code></td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{method}</td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Input, Select, Button, Checkbox } from '@/components/tds'
import { useState } from 'react'

function TransferForm() {
  const [amount, setAmount] = useState('')
  const [bank, setBank] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const next: Record<string, string> = {}
    if (!bank) next.bank = '은행을 선택해주세요'
    if (!amount) next.amount = '금액을 입력해주세요'
    else if (Number(amount) > 1000000) next.amount = '1회 이체 한도를 초과했습니다'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      // 이체 처리
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
      <Select
        label="받는 은행"
        options={bankOptions}
        value={bank}
        onChange={setBank}
        errorText={errors.bank}
      />
      <Input
        label="이체 금액"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        errorText={errors.amount}
        suffix="원"
      />
      <Checkbox
        label="이체 정보를 확인했습니다"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      <Button type="submit" fullWidth disabled={!agreed}>
        이체하기
      </Button>
    </form>
  )
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '인라인 에러 메시지', description: '에러는 해당 필드 바로 아래에 표시합니다. 폼 상단의 요약 에러는 긴 폼에서만 추가로 사용합니다.' },
              { label: '진행 중 저장', description: '긴 폼은 중간 저장 기능을 제공해 사용자가 실수로 데이터를 잃지 않게 합니다.' },
            ]}
            donts={[
              { label: '제출 전 모든 필드 사전 검사', description: '페이지 로드 시점부터 에러를 표시하면 사용자를 위압합니다. 상호작용 후에 검사하세요.' },
              { label: '애매한 에러 메시지', description: '"잘못된 입력"보다 "금액은 100원 이상 입력해주세요"처럼 구체적으로 안내합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
