import { cn } from '@/lib/cn'
import { type InputHTMLAttributes, forwardRef, useState } from 'react'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, disabled, className, ...props }, ref) => {
    return (
      <label className={cn('flex items-start gap-3 cursor-pointer', disabled && 'opacity-40 cursor-not-allowed')}>
        <div className="relative mt-0.5 shrink-0">
          <input ref={ref} type="radio" disabled={disabled} className="sr-only peer" {...props} />
          <div className={cn(
            'w-5 h-5 rounded-full border-2 transition-all',
            'border-[var(--fds-color-border-strong)]',
            'peer-checked:border-[var(--fds-color-primary)]',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--fds-color-primary)] peer-focus-visible:ring-offset-2',
            className
          )} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--fds-color-primary)] scale-0 peer-checked:scale-100 transition-transform" />
          </div>
        </div>
        {(label || description) && (
          <div>
            {label && <p className="text-sm font-medium text-[var(--fds-color-text-primary)]">{label}</p>}
            {description && <p className="text-sm text-[var(--fds-color-text-secondary)] mt-0.5">{description}</p>}
          </div>
        )}
      </label>
    )
  }
)
Radio.displayName = 'Radio'

export interface RadioGroupProps {
  name: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  options: { value: string; label: string; description?: string; disabled?: boolean }[]
  label?: string
  direction?: 'vertical' | 'horizontal'
}

export function RadioGroup({ name, value: controlled, defaultValue, onChange, options, label, direction = 'vertical' }: RadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const value = controlled !== undefined ? controlled : internal

  const handleChange = (v: string) => {
    if (controlled === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <fieldset>
      {label && (
        <legend className="text-sm font-medium text-[var(--fds-color-text-primary)] mb-3">{label}</legend>
      )}
      <div className={cn('flex gap-3', direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap')}>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            description={opt.description}
            disabled={opt.disabled}
            checked={value === opt.value}
            onChange={() => handleChange(opt.value)}
          />
        ))}
      </div>
    </fieldset>
  )
}
