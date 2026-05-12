import type { Metadata } from 'next'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { DosDonts } from '@/components/docs/DosDonts'
import { Button } from '@/components/fds/Button'

export const metadata: Metadata = { title: '디자인 원칙' }

export default function PrinciplesPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">원칙</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">디자인 원칙</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          토스의 디자인 철학과 개발자가 UI를 구성할 때 따라야 할 핵심 원칙을 정리합니다.
        </p>

        {/* Core Principles */}
        <section id="core-values">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">핵심 가치</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                emoji: '🎯',
                title: '명확성 (Clarity)',
                desc: '사용자가 다음에 무엇을 해야 할지 즉시 알 수 있어야 합니다. 모호한 레이블, 복잡한 흐름, 불필요한 정보를 제거하세요.',
              },
              {
                emoji: '🔄',
                title: '일관성 (Consistency)',
                desc: '동일한 패턴을 반복 사용해 사용자가 학습 비용 없이 새로운 기능을 이해할 수 있어야 합니다.',
              },
              {
                emoji: '⚡',
                title: '효율성 (Efficiency)',
                desc: '사용자의 목표 달성까지 걸리는 단계를 최소화합니다. 불필요한 확인 단계나 중간 화면을 줄이세요.',
              },
              {
                emoji: '♿',
                title: '접근성 (Accessibility)',
                desc: '모든 사용자가 동등하게 서비스를 이용할 수 있어야 합니다. WCAG 2.1 AA 기준을 기본으로 합니다.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-[var(--fds-radius-xl)] border border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)]"
              >
                <div className="text-2xl mb-2">{p.emoji}</div>
                <h3 className="text-base font-bold text-[var(--fds-color-text-primary)] mb-1">{p.title}</h3>
                <p className="text-sm text-[var(--fds-color-text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Design */}
        <section id="cta-design">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">CTA 설계 원칙</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-6">
            화면당 하나의 주요 액션(Primary CTA)을 두고, 보조 액션은 Secondary 버튼으로 표현합니다.
          </p>
          <DosDonts
            dos={[
              {
                label: '하나의 명확한 CTA',
                description: '한 화면에 Primary 버튼은 하나만 사용하여 사용자의 다음 행동을 명확히 안내합니다.',
                preview: (
                  <div className="flex flex-col gap-2 w-full max-w-[240px]">
                    <Button variant="secondary" size="md" fullWidth>나중에</Button>
                    <Button variant="primary" size="md" fullWidth>동의하고 시작하기</Button>
                  </div>
                ),
              },
            ]}
            donts={[
              {
                label: '복수의 Primary CTA',
                description: '여러 Primary 버튼이 나란히 있으면 사용자가 어디를 눌러야 할지 혼란스러워집니다.',
                preview: (
                  <div className="flex flex-col gap-2 w-full max-w-[240px]">
                    <Button variant="primary" size="md" fullWidth>가입하기</Button>
                    <Button variant="primary" size="md" fullWidth>로그인하기</Button>
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">접근성 (A11y)</h2>
          <p className="text-[var(--fds-color-text-secondary)] mb-6">
            토스는 WCAG 2.1 AA 기준을 모든 컴포넌트에 적용합니다.
          </p>
          <div className="space-y-4">
            {[
              {
                title: '색상 대비',
                desc: '텍스트와 배경의 색상 대비 비율: 일반 텍스트 4.5:1 이상, 큰 텍스트 3:1 이상',
                badge: 'WCAG 1.4.3',
              },
              {
                title: '키보드 네비게이션',
                desc: '모든 인터랙티브 요소는 Tab 키로 접근 가능하며, Enter/Space로 활성화할 수 있습니다.',
                badge: 'WCAG 2.1.1',
              },
              {
                title: '포커스 인디케이터',
                desc: '포커스 상태를 명확히 시각화합니다. outline을 임의로 제거하지 마세요.',
                badge: 'WCAG 2.4.7',
              },
              {
                title: 'ARIA 레이블',
                desc: '아이콘 버튼, 닫기 버튼 등 시각적 의미만 있는 요소에는 aria-label을 필수 지정합니다.',
                badge: 'WCAG 4.1.2',
              },
              {
                title: '오류 안내',
                desc: '폼 오류는 색상만으로 전달하지 않고, 텍스트 메시지를 함께 제공합니다.',
                badge: 'WCAG 1.4.1',
              },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-4 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)]">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[var(--fds-color-text-primary)]">{a.title}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--fds-color-primary-subtle)] text-[var(--fds-color-primary)] font-mono font-medium">
                      {a.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--fds-color-text-secondary)]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">문구 작성 원칙</h2>
          <DosDonts
            dos={[
              {
                label: '동작 중심 레이블 사용',
                description: '버튼과 링크는 무엇을 할지 명확히 표현합니다.',
              },
              {
                label: '간결하고 직접적인 표현',
                description: '사용자의 시간을 아끼는 짧고 명확한 문구를 사용합니다.',
              },
            ]}
            donts={[
              {
                label: '"확인", "OK" 같은 모호한 레이블',
                description: '어떤 동작이 일어나는지 알 수 없는 레이블은 혼란을 줍니다.',
              },
              {
                label: '기술 용어나 내부 용어 사용',
                description: '사용자에게 친숙하지 않은 전문 용어는 사용하지 않습니다.',
              },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
