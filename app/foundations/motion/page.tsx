'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { DosDonts } from '@/components/docs/DosDonts'
import { motionTokens } from '@/lib/tokens'

function DemoBox({ label, duration, easing }: { label: string; duration: string; easing: string }) {
  const [active, setActive] = useState(false)
  return (
    <button
      onClick={() => setActive(v => !v)}
      className="w-full flex flex-col gap-3 p-4 rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)] hover:bg-[var(--fds-color-bg-elevated)] text-left"
    >
      <span className="text-xs font-mono text-[var(--fds-color-text-secondary)]">{label}</span>
      <div className="relative h-8 bg-[var(--fds-color-bg-elevated)] rounded-[var(--fds-radius-md)] overflow-hidden">
        <div
          className="absolute top-1 bottom-1 left-1 w-6 rounded-[var(--fds-radius-sm)] bg-[var(--fds-color-primary)]"
          style={{
            transform: active ? 'translateX(calc(100% + 8px))' : 'translateX(0)',
            transition: `transform ${duration} ${easing}`,
            width: 'calc(50% - 8px)',
          }}
        />
      </div>
      <span className="text-xs text-[var(--fds-color-text-tertiary)]">클릭하여 재생</span>
    </button>
  )
}

export default function MotionPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">Foundation</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">모션 (Motion)</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          토스의 인터랙션은 빠르고 자연스러워야 합니다. 지속시간과 이징 토큰으로
          일관된 움직임을 구현하세요.
        </p>

        <section id="duration">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">Duration (지속시간)</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries(motionTokens.duration).map(([name, token]) => (
              <DemoBox
                key={name}
                label={`${token.variable} — ${token.value}`}
                duration={token.value}
                easing="cubic-bezier(0, 0, 0.2, 1)"
              />
            ))}
          </div>
          <div className="rounded-xl border border-[var(--fds-color-border)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">토큰</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">값</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">사용 상황</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(motionTokens.duration).map(([name, token], i, arr) => (
                  <tr key={name} className={i < arr.length - 1 ? 'border-b border-[var(--fds-color-border)]' : ''}>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleCopy(token.variable, `d-${name}`)}
                        className="font-mono text-xs text-[var(--fds-color-primary)] hover:underline"
                      >
                        {copied === `d-${name}` ? '복사됨 ✓' : token.variable}
                      </button>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-[var(--fds-color-text-secondary)]">{token.value}</td>
                    <td className="px-4 py-3 text-[var(--fds-color-text-secondary)]">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="easing" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">Easing (이징)</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries(motionTokens.easing).map(([name, token]) => (
              <DemoBox
                key={name}
                label={`${name} — ${token.value.slice(0, 28)}...`}
                duration="400ms"
                easing={token.value}
              />
            ))}
          </div>
          <div className="rounded-xl border border-[var(--fds-color-border)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">토큰</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">값</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">사용 상황</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(motionTokens.easing).map(([name, token], i, arr) => (
                  <tr key={name} className={i < arr.length - 1 ? 'border-b border-[var(--fds-color-border)]' : ''}>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleCopy(token.variable, `e-${name}`)}
                        className="font-mono text-xs text-[var(--fds-color-primary)] hover:underline"
                      >
                        {copied === `e-${name}` ? '복사됨 ✓' : token.variable}
                      </button>
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] text-[var(--fds-color-text-secondary)] break-all">{token.value}</td>
                    <td className="px-4 py-3 text-[var(--fds-color-text-secondary)]">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="principles" className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-6">모션 원칙</h2>
          <DosDonts
            dos={[
              { label: '목적 있는 애니메이션', description: '사용자의 주의를 유도하거나 상태 변화를 전달할 때만 모션을 사용합니다.' },
              { label: '빠른 응답', description: '대부분의 인터랙션은 fast(150ms) ~ normal(250ms) 이내로 처리합니다.' },
            ]}
            donts={[
              { label: '장식용 애니메이션 금지', description: '콘텐츠 전달에 기여하지 않는 반복 애니메이션은 사용하지 않습니다.' },
              { label: '느린 전환 금지', description: '400ms 이상의 transition은 사용자를 기다리게 합니다. 꼭 필요한 경우(BottomSheet 등)만 사용하세요.' },
            ]}
          />
        </section>

        <section id="usage" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">사용법</h2>
          <div className="rounded-xl overflow-hidden border border-[var(--fds-color-border)]">
            <pre className="p-4 bg-[var(--fds-color-gray-900)] text-sm text-[var(--fds-color-gray-100)] overflow-x-auto">
              <code>{`/* CSS */
.button {
  transition: background-color var(--fds-duration-fast) var(--fds-easing-ease-out);
}

.modal {
  transition: opacity var(--fds-duration-normal) var(--fds-easing-ease-out),
              transform var(--fds-duration-normal) var(--fds-easing-ease-out);
}

/* Tailwind (inline style) */
<div style={{
  transition: \`transform \${duration} \${easing}\`
}} />`}</code>
            </pre>
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
