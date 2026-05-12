interface DoDontItem {
  label: string
  description: string
  preview?: React.ReactNode
}

interface DosDontsProps {
  dos: DoDontItem[]
  donts: DoDontItem[]
}

function Card({
  item,
  type,
}: {
  item: DoDontItem
  type: 'do' | 'dont'
}) {
  const isDo = type === 'do'
  return (
    <div className="flex-1 min-w-[240px]">
      <div
        className="rounded-xl border-2 overflow-hidden"
        style={{
          borderColor: isDo ? 'var(--fds-color-success)' : 'var(--fds-color-danger)',
        }}
      >
        {item.preview && (
          <div className="p-6 bg-[var(--fds-color-bg-elevated)] flex items-center justify-center min-h-[100px]">
            {item.preview}
          </div>
        )}
        <div
          className="px-4 py-3"
          style={{
            background: isDo ? 'var(--fds-color-success-subtle)' : 'var(--fds-color-danger-subtle)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: isDo ? 'var(--fds-color-success)' : 'var(--fds-color-danger)' }}
            >
              {isDo ? '✓ Do' : '✗ Don\'t'}
            </span>
          </div>
          <p className="text-sm font-medium text-[var(--fds-color-text-primary)]">{item.label}</p>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mt-0.5">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      {dos.map((item, i) => (
        <Card key={i} item={item} type="do" />
      ))}
      {donts.map((item, i) => (
        <Card key={i} item={item} type="dont" />
      ))}
    </div>
  )
}
