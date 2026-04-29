'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/tds/Card'
import { Button } from '@/components/tds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function CardPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Card</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          관련 정보를 하나의 컨테이너로 묶는 컴포넌트입니다.
          계좌 카드, 상품 카드, 정보 카드 등 토스의 핵심 레이아웃 패턴입니다.
        </p>

        <section id="variants">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Variants</h2>
          <ComponentPreview label="default — 테두리">
            <div className="w-full max-w-sm">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>토스뱅크 통장</CardTitle>
                  <CardDescription>입출금 자유 · 연 2% 이자</CardDescription>
                </CardHeader>
                <p className="text-2xl font-bold text-[var(--tds-color-text-primary)]">1,234,567원</p>
              </Card>
            </div>
          </ComponentPreview>
          <ComponentPreview label="elevated — 그림자">
            <div className="w-full max-w-sm">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>토스 증권</CardTitle>
                  <CardDescription>평가 금액</CardDescription>
                </CardHeader>
                <p className="text-2xl font-bold text-[var(--tds-color-text-primary)]">3,850,200원</p>
                <p className="text-sm text-[var(--tds-color-success)] mt-1">+125,000원 (3.36%)</p>
              </Card>
            </div>
          </ComponentPreview>
          <ComponentPreview label="outline — 투명 배경">
            <div className="w-full max-w-sm">
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>공지사항</CardTitle>
                </CardHeader>
                <p className="text-sm text-[var(--tds-color-text-secondary)]">토스 앱 업데이트 안내입니다. 새 버전에서는...</p>
              </Card>
            </div>
          </ComponentPreview>
        </section>

        <section id="padding" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Padding</h2>
          <ComponentPreview label="none / sm / md / lg">
            <div className="w-full max-w-sm space-y-3">
              {(['none', 'sm', 'md', 'lg'] as const).map((p) => (
                <Card key={p} padding={p}>
                  <p className="text-sm text-[var(--tds-color-text-secondary)]">padding="{p}"</p>
                </Card>
              ))}
            </div>
          </ComponentPreview>
        </section>

        <section id="interactive" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Interactive</h2>
          <ComponentPreview label="hover + 클릭 가능">
            <div className="w-full max-w-sm">
              <Card interactive onClick={() => alert('카드 클릭!')}>
                <CardHeader>
                  <CardTitle>클릭 가능한 카드</CardTitle>
                  <CardDescription>hover 시 그림자가 강조됩니다</CardDescription>
                </CardHeader>
                <p className="text-sm text-[var(--tds-color-text-secondary)]">클릭해보세요</p>
              </Card>
            </div>
          </ComponentPreview>
        </section>

        <section id="with-footer" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">CardFooter</h2>
          <ComponentPreview label="헤더 + 내용 + 푸터">
            <div className="w-full max-w-sm">
              <Card>
                <CardHeader>
                  <CardTitle>토스 머니</CardTitle>
                  <CardDescription>간편결제 잔액</CardDescription>
                </CardHeader>
                <p className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-2">50,000원</p>
                <CardFooter>
                  <Button size="sm" variant="primary">충전하기</Button>
                  <Button size="sm" variant="outline">사용 내역</Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] mb-3">Card</h3>
          <PropsTable
            props={[
              { name: 'variant', type: "'default' | 'elevated' | 'outline'", defaultValue: "'default'", description: '카드 스타일 변형' },
              { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '내부 여백' },
              { name: 'interactive', type: 'boolean', defaultValue: 'false', description: 'hover 효과 적용 여부' },
              { name: 'onClick', type: '() => void', description: '클릭 핸들러 (있으면 button 태그로 렌더링)' },
              { name: 'children', type: 'ReactNode', required: true, description: '카드 내용' },
              { name: 'className', type: 'string', description: '추가 클래스' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/tds'

// 기본 카드
<Card>
  <CardHeader>
    <CardTitle>토스뱅크 통장</CardTitle>
    <CardDescription>입출금 자유</CardDescription>
  </CardHeader>
  <p className="text-2xl font-bold">1,234,567원</p>
</Card>

// 인터랙티브 카드 (클릭 가능)
<Card interactive onClick={() => router.push('/account/123')}>
  <CardTitle>계좌 상세 보기</CardTitle>
</Card>

// 푸터 포함
<Card variant="elevated">
  <CardHeader>
    <CardTitle>토스 머니</CardTitle>
  </CardHeader>
  <p className="text-xl font-bold">50,000원</p>
  <CardFooter>
    <Button size="sm">충전하기</Button>
  </CardFooter>
</Card>`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '관련 정보 묶기', description: '같은 주제의 정보를 하나의 Card로 묶어 시각적 그룹을 만듭니다.' },
              { label: 'elevated는 중요한 카드에', description: '그림자로 강조되는 elevated는 잔액 카드, 핵심 액션 등 중요도 높은 콘텐츠에만 사용합니다.' },
            ]}
            donts={[
              { label: '카드 속 카드', description: 'Card 안에 또 다른 Card를 중첩하지 마세요. 계층이 복잡해집니다.' },
              { label: '클릭 가능 여부 불명확', description: 'onClick이 있으면 반드시 interactive prop을 함께 줘서 사용자가 클릭 가능 여부를 알 수 있게 합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
