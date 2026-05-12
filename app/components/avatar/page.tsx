'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { PropsTable } from '@/components/docs/PropsTable'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Avatar, AvatarGroup } from '@/components/fds/Avatar'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function AvatarPage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--fds-color-text-tertiary)] font-medium">컴포넌트</div>
        <h1 className="text-4xl font-bold text-[var(--fds-color-text-primary)] mb-3">Avatar</h1>
        <p className="text-lg text-[var(--fds-color-text-secondary)] mb-10 leading-relaxed">
          사용자 프로필 이미지를 표시하는 컴포넌트입니다.
          이미지가 없을 경우 이름 이니셜을 자동으로 표시합니다.
        </p>

        <section id="sizes">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Sizes</h2>
          <ComponentPreview label="xs / sm / md / lg / xl">
            <Avatar size="xs" name="홍길동" />
            <Avatar size="sm" name="홍길동" />
            <Avatar size="md" name="홍길동" />
            <Avatar size="lg" name="홍길동" />
            <Avatar size="xl" name="홍길동" />
          </ComponentPreview>
        </section>

        <section id="fallback" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">이니셜 폴백</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            src 없이 name만 전달하면 이니셜과 색상이 자동 생성됩니다. 색상은 이름 기반으로 결정적(deterministic)으로 배정됩니다.
          </p>
          <ComponentPreview label="다양한 이름">
            <Avatar name="홍길동" />
            <Avatar name="김철수" />
            <Avatar name="이영희" />
            <Avatar name="박민준" />
            <Avatar name="John Doe" />
          </ComponentPreview>
        </section>

        <section id="placeholder" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">플레이스홀더</h2>
          <ComponentPreview label="이름 없을 때 기본 아이콘">
            <Avatar size="sm" />
            <Avatar size="md" />
            <Avatar size="lg" />
          </ComponentPreview>
        </section>

        <section id="shape" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Shape</h2>
          <ComponentPreview label="circle (기본) / square">
            <Avatar name="홍길동" shape="circle" />
            <Avatar name="홍길동" shape="square" />
          </ComponentPreview>
        </section>

        <section id="group" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">AvatarGroup</h2>
          <p className="text-sm text-[var(--fds-color-text-secondary)] mb-4">
            여러 사용자를 겹쳐서 표시합니다. max를 초과하는 수는 숫자로 표시됩니다.
          </p>
          <ComponentPreview label="최대 4명 + 초과 표시">
            <AvatarGroup
              avatars={[
                { name: '홍길동' },
                { name: '김철수' },
                { name: '이영희' },
                { name: '박민준' },
                { name: '최지우' },
                { name: '정우성' },
              ]}
              max={4}
            />
          </ComponentPreview>
        </section>

        <section id="props" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Props</h2>
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3">Avatar</h3>
          <PropsTable
            props={[
              { name: 'src', type: 'string', description: '이미지 URL' },
              { name: 'alt', type: 'string', description: '이미지 대체 텍스트' },
              { name: 'name', type: 'string', description: '이름 (이니셜 + 색상 자동 생성)' },
              { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: '아바타 크기' },
              { name: 'shape', type: "'circle' | 'square'", defaultValue: "'circle'", description: '모양' },
            ]}
          />
          <h3 className="text-base font-semibold text-[var(--fds-color-text-primary)] mb-3 mt-6">AvatarGroup</h3>
          <PropsTable
            props={[
              { name: 'avatars', type: 'AvatarProps[]', required: true, description: '아바타 데이터 배열' },
              { name: 'max', type: 'number', defaultValue: '4', description: '표시할 최대 개수' },
              { name: 'size', type: 'AvatarProps[\'size\']', defaultValue: "'md'", description: '아바타 크기' },
            ]}
          />
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`import { Avatar, AvatarGroup } from '@/components/fds'

// 이미지
<Avatar src="/profile.jpg" alt="홍길동" size="md" />

// 이니셜 폴백
<Avatar name="홍길동" size="lg" />

// 그룹
<AvatarGroup
  avatars={users.map(u => ({ name: u.name, src: u.avatar }))}
  max={4}
/>`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--fds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: 'alt 텍스트 제공', description: '이미지 아바타에는 사용자 이름을 alt로 제공하세요.' },
              { label: '크기 일관성 유지', description: '같은 목록 내 아바타는 동일한 size를 사용합니다.' },
            ]}
            donts={[
              { label: '너무 작은 아바타에 이미지', description: 'xs 크기에서는 이미지 디테일이 보이지 않으므로 이니셜을 우선합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
