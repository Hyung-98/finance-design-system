interface Prop {
  name: string
  type: string
  defaultValue?: string
  required?: boolean
  description: string
}

interface PropsTableProps {
  props: Prop[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--fds-color-border)] my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--fds-color-bg-elevated)] border-b border-[var(--fds-color-border)]">
            <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">Prop</th>
            <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">Type</th>
            <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">Default</th>
            <th className="text-left px-4 py-3 font-semibold text-[var(--fds-color-text-primary)]">설명</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={i < props.length - 1 ? 'border-b border-[var(--fds-color-border)]' : ''}
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="text-[var(--fds-color-primary)] font-mono text-[13px] font-medium">
                    {prop.name}
                  </code>
                  {prop.required && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--fds-color-danger-subtle)] text-[var(--fds-color-danger)] font-medium">
                      필수
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-[var(--fds-color-text-secondary)] bg-[var(--fds-color-bg-elevated)] px-1.5 py-0.5 rounded">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 text-[var(--fds-color-text-tertiary)]">
                {prop.defaultValue ? (
                  <code className="text-xs font-mono">{prop.defaultValue}</code>
                ) : (
                  '—'
                )}
              </td>
              <td className="px-4 py-3 text-[var(--fds-color-text-secondary)]">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
