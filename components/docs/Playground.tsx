'use client'

import { useState } from 'react'
import { CodeBlock } from './CodeBlock'

type PropControl =
  | { type: 'boolean'; default: boolean }
  | { type: 'string'; default: string }
  | { type: 'select'; options: string[]; default: string }
  | { type: 'number'; min?: number; max?: number; default: number }

export interface PlaygroundConfig {
  [key: string]: PropControl
}

interface PlaygroundProps {
  config: PlaygroundConfig
  render: (props: Record<string, unknown>) => React.ReactNode
  codeTemplate: (props: Record<string, unknown>) => string
}

export function Playground({ config, render, codeTemplate }: PlaygroundProps) {
  const initial = Object.fromEntries(
    Object.entries(config).map(([key, ctrl]) => [key, ctrl.default])
  )
  const [values, setValues] = useState<Record<string, unknown>>(initial)

  const set = (key: string, value: unknown) =>
    setValues((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="rounded-xl border border-[var(--tds-color-border)] overflow-hidden my-6">
      {/* Preview area */}
      <div
        className="min-h-[160px] flex items-center justify-center p-8
          bg-[radial-gradient(var(--tds-color-gray-200)_1px,transparent_1px)]
          dark:bg-[radial-gradient(var(--tds-color-border)_1px,transparent_1px)]
          [background-size:20px_20px] bg-[var(--tds-color-bg-base)]"
      >
        {render(values)}
      </div>

      {/* Controls + Code */}
      <div className="border-t border-[var(--tds-color-border)] grid grid-cols-1 md:grid-cols-[240px_1fr]">
        {/* Controls */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-[var(--tds-color-border)] bg-[var(--tds-color-bg-elevated)] space-y-4">
          <p className="text-xs font-semibold text-[var(--tds-color-text-tertiary)] uppercase tracking-wider">
            Props
          </p>
          {Object.entries(config).map(([key, ctrl]) => (
            <div key={key}>
              <label className="text-xs font-medium text-[var(--tds-color-text-secondary)] mb-1 block font-mono">
                {key}
              </label>
              {ctrl.type === 'boolean' && (
                <button
                  role="switch"
                  aria-checked={!!values[key]}
                  onClick={() => set(key, !values[key])}
                  className="relative w-10 h-5 rounded-full transition-colors"
                  style={{
                    background: values[key] ? 'var(--tds-color-primary)' : 'var(--tds-color-border-strong)',
                  }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
                    style={{ transform: values[key] ? 'translateX(20px)' : 'translateX(0)' }}
                  />
                </button>
              )}
              {ctrl.type === 'string' && (
                <input
                  type="text"
                  value={String(values[key])}
                  onChange={(e) => set(key, e.target.value)}
                  className="w-full px-2.5 py-1.5 text-sm rounded-lg border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)] text-[var(--tds-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--tds-color-primary)]"
                />
              )}
              {ctrl.type === 'select' && (
                <select
                  value={String(values[key])}
                  onChange={(e) => set(key, e.target.value)}
                  className="w-full px-2.5 py-1.5 text-sm rounded-lg border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)] text-[var(--tds-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--tds-color-primary)]"
                >
                  {ctrl.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}
              {ctrl.type === 'number' && (
                <input
                  type="number"
                  value={Number(values[key])}
                  min={ctrl.min}
                  max={ctrl.max}
                  onChange={(e) => set(key, Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 text-sm rounded-lg border border-[var(--tds-color-border)] bg-[var(--tds-color-bg-base)] text-[var(--tds-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--tds-color-primary)]"
                />
              )}
            </div>
          ))}
        </div>

        {/* Generated code */}
        <div className="p-0 overflow-hidden">
          <CodeBlock code={codeTemplate(values)} language="tsx" />
        </div>
      </div>
    </div>
  )
}
