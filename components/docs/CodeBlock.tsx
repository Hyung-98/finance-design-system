'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'tsx', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--tds-color-border)] my-4">
      {filename && (
        <div className="px-4 py-2 bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)] flex items-center gap-2">
          <span className="text-xs text-[var(--tds-color-text-secondary)] font-mono">{filename}</span>
        </div>
      )}
      <div className="relative group">
        <pre className="p-4 overflow-x-auto bg-[var(--tds-color-gray-900)] dark:bg-[#0d1117] text-sm leading-relaxed">
          <code className={`language-${language} text-[var(--tds-color-gray-100)]`}>
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-medium transition-all
            bg-[var(--tds-color-gray-700)] text-[var(--tds-color-gray-200)] hover:bg-[var(--tds-color-gray-600)]
            opacity-0 group-hover:opacity-100"
          aria-label="코드 복사"
        >
          {copied ? '복사됨 ✓' : '복사'}
        </button>
      </div>
    </div>
  )
}
