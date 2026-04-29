'use client'

import { useState } from 'react'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { colorTokens } from '@/lib/tokens'

function ColorSwatch({
  name,
  token,
}: {
  name: string
  token: { value: string; variable: string; description?: string }
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token.variable)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="group text-left w-full rounded-xl overflow-hidden border border-[var(--tds-color-border)] hover:shadow-[var(--tds-shadow-md)] transition-all"
      title={`${token.variable} 복사`}
    >
      <div
        className="h-14"
        style={{ backgroundColor: token.value.startsWith('var(') ? undefined : token.value, background: token.value.startsWith('var(') ? token.value : undefined }}
      />
      <div className="px-3 py-2 bg-[var(--tds-color-bg-base)]">
        <p className="text-xs font-semibold text-[var(--tds-color-text-primary)]">{name}</p>
        <p className="text-[11px] font-mono text-[var(--tds-color-text-tertiary)] mt-0.5">
          {copied ? '복사됨 ✓' : token.value.startsWith('var(') ? token.variable : token.value}
        </p>
      </div>
    </button>
  )
}

export default function ColorPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">Foundation</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">색상 (Color)</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          토스의 색상 시스템은 Primitive 토큰과 Semantic 토큰 두 레이어로 구성됩니다.
          스와치를 클릭하면 CSS 변수명이 복사됩니다.
        </p>

        <section id="primitive">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-6">Primitive 토큰</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-4 text-sm">
            원시 색상 값입니다. 직접 사용보다는 Semantic 토큰을 통해 참조하는 것을 권장합니다.
          </p>

          {Object.entries(colorTokens.primitive).map(([colorName, shades]) => (
            <div key={colorName} className="mb-8">
              <h3 className="text-base font-semibold text-[var(--tds-color-text-primary)] capitalize mb-3">
                {colorName}
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(shades).map(([shade, token]) => (
                  <ColorSwatch key={shade} name={`${colorName}-${shade}`} token={token} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="semantic" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-6">Semantic 토큰</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-4 text-sm">
            사용 목적에 따라 명명된 토큰입니다. 컴포넌트와 UI에서는 항상 Semantic 토큰을 사용하세요.
          </p>
          <div className="rounded-xl border border-[var(--tds-color-border)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">미리보기</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">토큰</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">설명</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(colorTokens.semantic).map(([name, token], i, arr) => (
                  <tr key={name} className={i < arr.length - 1 ? 'border-b border-[var(--tds-color-border)]' : ''}>
                    <td className="px-4 py-3">
                      <div
                        className="w-8 h-8 rounded-[var(--tds-radius-md)] border border-[var(--tds-color-border)]"
                        style={{ background: token.value }}
                      />
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-[var(--tds-color-primary)]">
                      {token.variable}
                    </td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="usage" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">사용법</h2>
          <p className="text-[var(--tds-color-text-secondary)] mb-3">
            CSS 변수를 직접 사용하거나 Tailwind 클래스를 활용합니다.
          </p>
          <div className="rounded-xl overflow-hidden border border-[var(--tds-color-border)]">
            <pre className="p-4 bg-[var(--tds-color-gray-900)] text-sm text-[var(--tds-color-gray-100)] overflow-x-auto">
              <code>{`/* CSS Variables */
.button {
  background-color: var(--tds-color-primary);
  color: var(--tds-color-text-inverse);
}

/* Inline styles in React */
<div style={{ color: 'var(--tds-color-text-secondary)' }}>
  설명 텍스트
</div>`}</code>
            </pre>
          </div>
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
