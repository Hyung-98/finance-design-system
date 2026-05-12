'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Accordion } from '@/components/fds/Accordion'
import { CodeBlock } from '@/components/docs/CodeBlock'

const faqItems = [
  {
    value: 'q1',
    trigger: '토스 계좌는 어떻게 만드나요?',
    content: '토스 앱에서 [은행] 탭 → [계좌 만들기]를 선택하면 신분증 촬영만으로 5분 안에 계좌를 개설할 수 있습니다.',
  },
  {
    value: 'q2',
    trigger: '이체 한도는 얼마인가요?',
    content: '기본 1회 이체 한도는 100만원, 1일 누적 한도는 500만원입니다. 고객센터를 통해 한도 상향을 신청할 수 있습니다.',
  },
  {
    value: 'q3',
    trigger: '환전 수수료가 있나요?',
    content: '토스뱅크 외화 통장을 이용하면 USD·EUR·JPY 등 주요 통화를 환전 수수료 없이 이용할 수 있습니다.',
  },
  {
    value: 'q4',
    trigger: '계좌 해지는 어떻게 하나요?',
    content: '앱 내 [계좌 정보] → [계좌 해지]를 통해 진행할 수 있습니다. 잔액이 있는 경우 먼저 이체 후 해지 가능합니다.',
    disabled: true,
  },
]

const termsItems = [
  {
    value: 't1',
    trigger: '[필수] 서비스 이용약관',
    content: '본 약관은 토스(이하 "회사")가 제공하는 금융 서비스의 이용과 관련하여 회사와 회원 사이의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다. 자세한 내용은 전문을 확인해주세요.',
  },
  {
    value: 't2',
    trigger: '[필수] 개인정보 수집 및 이용 동의',
    content: '회사는 서비스 제공을 위해 다음과 같이 개인정보를 수집·이용합니다. 수집 항목: 이름, 생년월일, 연락처, 계좌정보. 이용 목적: 본인 인증, 금융 서비스 제공, 고객 문의 처리.',
  },
  {
    value: 't3',
    trigger: '[선택] 마케팅 정보 수신 동의',
    content: '신상품 출시, 이벤트, 혜택 정보를 SMS, 앱 푸시, 이메일로 안내해 드립니다. 동의하지 않아도 기본 서비스 이용에는 제한이 없습니다.',
  },
]

export default function AccordionPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Accordion</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          콘텐츠를 접고 펼칠 수 있는 컴포넌트입니다.
          FAQ, 약관 상세, 설정 옵션 등에 사용합니다.
        </p>

        <section id="single">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Single (기본)</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            한 번에 하나의 항목만 열립니다. 다른 항목을 열면 기존 항목이 닫힙니다.
          </p>
          <ComponentPreview label="FAQ 예시">
            <div className="w-full">
              <Accordion items={faqItems} type="single" defaultValue="q1" />
            </div>
          </ComponentPreview>
        </section>

        <section id="multiple" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Multiple</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            여러 항목을 동시에 열 수 있습니다. 약관 동의 등에 적합합니다.
          </p>
          <ComponentPreview label="약관 동의 예시">
            <div className="w-full">
              <Accordion items={termsItems} type="multiple" defaultValue={['t1']} />
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'items', type: 'AccordionItem[]', required: true, description: '{ value, trigger, content, disabled? }' },
              { name: 'type', type: "'single' | 'multiple'", defaultValue: "'single'", description: '단일 / 다중 오픈 모드' },
              { name: 'defaultValue', type: 'string | string[]', description: '초기 열린 항목 값 (single: string, multiple: string[])' },
              { name: 'className', type: 'string', description: '추가 클래스' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Accordion } from '@/components/fds'

// FAQ — 단일 오픈
<Accordion
  type="single"
  defaultValue="q1"
  items={[
    {
      value: 'q1',
      trigger: '이체 한도는 얼마인가요?',
      content: '1회 100만원, 1일 500만원입니다.',
    },
    {
      value: 'q2',
      trigger: '수수료가 있나요?',
      content: '토스뱅크 간 이체는 무료입니다.',
    },
  ]}
/>

// 약관 — 다중 오픈
<Accordion
  type="multiple"
  items={termsItems}
/>`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: 'FAQ와 약관에 적합', description: '내용이 많지만 항상 모두 볼 필요는 없는 콘텐츠에 사용합니다.' },
              { label: '트리거는 명확한 제목으로', description: '사용자가 클릭 전에 내용을 예측할 수 있도록 트리거 텍스트를 명확히 작성합니다.' },
            ]}
            donts={[
              { label: '핵심 콘텐츠 숨기기', description: '사용자가 반드시 봐야 할 정보를 Accordion 안에 숨기지 마세요.' },
              { label: '중첩 Accordion', description: 'Accordion 안에 또 다른 Accordion을 넣으면 복잡성이 크게 올라갑니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
