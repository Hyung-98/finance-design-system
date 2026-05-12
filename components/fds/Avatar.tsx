import { cn } from '@/lib/cn'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  className?: string
}

const sizeStyles = {
  xs: 'w-6 h-6 text-[10px]',
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

const colors = [
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-purple-100 text-purple-700',
  'bg-orange-100 text-orange-700',
  'bg-pink-100 text-pink-700',
  'bg-teal-100 text-teal-700',
]

function getColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export function Avatar({ src, alt, name, size = 'md', shape = 'circle', className }: AvatarProps) {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-[var(--fds-radius-lg)]'
  const sizeClass = sizeStyles[size]

  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? name ?? ''}
        className={cn('object-cover shrink-0', sizeClass, shapeClass, className)}
      />
    )
  }

  if (name) {
    return (
      <div
        className={cn(
          'flex items-center justify-center font-semibold shrink-0 select-none',
          sizeClass,
          shapeClass,
          getColor(name),
          className
        )}
        aria-label={name}
      >
        {getInitials(name)}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center bg-[var(--fds-color-bg-elevated)] shrink-0',
        sizeClass,
        shapeClass,
        className
      )}
      aria-hidden="true"
    >
      <svg className="w-1/2 h-1/2 text-[var(--fds-color-text-tertiary)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
  )
}

export interface AvatarGroupProps {
  avatars: AvatarProps[]
  max?: number
  size?: AvatarProps['size']
}

export function AvatarGroup({ avatars, max = 4, size = 'md' }: AvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const overflow = avatars.length - max

  return (
    <div className="flex -space-x-2">
      {visible.map((avatar, i) => (
        <Avatar
          key={i}
          {...avatar}
          size={size}
          className={cn('ring-2 ring-[var(--fds-color-bg-base)]', avatar.className)}
        />
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            'flex items-center justify-center ring-2 ring-[var(--fds-color-bg-base)] rounded-full',
            'bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-secondary)] font-medium shrink-0',
            sizeStyles[size]
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}
