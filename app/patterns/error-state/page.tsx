'use client'

import { TableOfContents } from '@/components/layout/TableOfContents'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Button } from '@/components/tds/Button'
import { CodeBlock } from '@/components/docs/CodeBlock'

function ErrorCard({
  icon,
  title,
  description,
  primary,
  secondary,
  variant = 'default',
}: {
  icon: React.ReactNode
  title: string
  description: string
  primary?: string
  secondary?: string
  variant?: 'default' | 'danger'
}) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 max-w-xs">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
        variant === 'danger'
          ? 'bg-[var(--tds-color-danger-subtle)] text-[var(--tds-color-danger)]'
          : 'bg-[var(--tds-color-bg-elevated)] text-[var(--tds-color-text-tertiary)]'
      }`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-[var(--tds-color-text-primary)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--tds-color-text-secondary)] leading-relaxed mb-5">{description}</p>
      <div className="flex flex-col gap-2 w-full">
        {primary && <Button size="sm" fullWidth>{primary}</Button>}
        {secondary && <Button size="sm" variant="ghost" fullWidth>{secondary}</Button>}
      </div>
    </div>
  )
}

const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
)

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function ErrorStatePage() {
  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-3xl px-8 py-10">
        <div className="mb-2 text-sm text-[var(--tds-color-text-tertiary)] font-medium">패턴</div>
        <h1 className="text-4xl font-bold text-[var(--tds-color-text-primary)] mb-3">Error State</h1>
        <p className="text-lg text-[var(--tds-color-text-secondary)] mb-10 leading-relaxed">
          오류가 발생했을 때 표시하는 화면입니다. 오류 유형에 따라
          적절한 메시지와 복구 액션을 제공합니다.
        </p>

        <section id="types">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">오류 유형별 예시</h2>
          <ComponentPreview label="네트워크 오류">
            <ErrorCard
              icon={<NetworkIcon />}
              title="인터넷 연결을 확인해주세요"
              description="네트워크 상태가 불안정합니다. Wi-Fi 또는 모바일 데이터 연결을 확인하고 다시 시도해주세요."
              primary="다시 시도"
            />
          </ComponentPreview>
          <ComponentPreview label="서버 오류 (500)">
            <ErrorCard
              icon={<ServerIcon />}
              title="일시적인 오류가 발생했어요"
              description="서버에 일시적인 문제가 있습니다. 잠시 후 다시 시도해주세요. 문제가 계속되면 고객센터에 문의해주세요."
              primary="다시 시도"
              secondary="고객센터 문의"
            />
          </ComponentPreview>
          <ComponentPreview label="권한 오류 (403)">
            <ErrorCard
              icon={<LockIcon />}
              title="접근 권한이 없어요"
              description="이 기능을 사용하려면 본인 인증이 필요합니다."
              primary="본인 인증하기"
              secondary="이전으로"
              variant="danger"
            />
          </ComponentPreview>
        </section>

        <section id="decision" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">오류 유형별 대응</h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--tds-color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--tds-color-bg-elevated)] border-b border-[var(--tds-color-border)]">
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">오류 유형</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">HTTP</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--tds-color-text-primary)]">주요 CTA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--tds-color-border)]">
                {[
                  ['네트워크 없음', '—', '다시 시도'],
                  ['인증 만료', '401', '로그인 → 재시도'],
                  ['권한 없음', '403', '인증 / 이전으로'],
                  ['찾을 수 없음', '404', '홈으로 / 검색'],
                  ['서버 오류', '500', '다시 시도 / 고객센터'],
                  ['점검 중', '503', '점검 일정 안내'],
                ].map(([type, code, cta]) => (
                  <tr key={type}>
                    <td className="px-4 py-3 font-medium text-[var(--tds-color-text-primary)]">{type}</td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-tertiary)]"><code className="text-xs font-mono">{code}</code></td>
                    <td className="px-4 py-3 text-[var(--tds-color-text-secondary)]">{cta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="code" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">코드 예시</h2>
          <CodeBlock
            code={`// 오류 경계 + Error State 패턴
function DataSection() {
  const { data, error, isLoading, refetch } = useQuery(...)

  if (isLoading) return <SkeletonCard />

  if (error) {
    const isNetwork = !navigator.onLine
    return (
      <ErrorState
        icon={isNetwork ? <NetworkIcon /> : <ServerIcon />}
        title={isNetwork ? '인터넷 연결을 확인해주세요' : '일시적인 오류가 발생했어요'}
        description={isNetwork
          ? 'Wi-Fi 또는 모바일 데이터를 확인해주세요.'
          : '잠시 후 다시 시도해주세요.'}
        action={{ label: '다시 시도', onClick: refetch }}
      />
    )
  }

  return <DataList items={data} />
}`}
            language="tsx"
          />
        </section>

        <section id="dos-donts" className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--tds-color-text-primary)] mb-4">Do / Don't</h2>
          <DosDonts
            dos={[
              { label: '복구 방법 제시', description: '"다시 시도" 버튼으로 사용자가 스스로 복구할 수 있게 합니다. 가능하면 자동 재시도도 구현합니다.' },
              { label: '기술적 오류 코드 숨기기', description: '"500 Internal Server Error" 대신 사용자가 이해할 수 있는 언어로 설명합니다. 오류 코드는 개발자 콘솔에만 기록합니다.' },
            ]}
            donts={[
              { label: '"오류가 발생했습니다"만 표시', description: '원인과 해결 방법 없이 단순 오류 메시지만 표시하면 사용자가 당황합니다.' },
              { label: '전체 페이지를 오류로 대체', description: '일부 기능의 오류라면 해당 섹션만 오류 상태로 표시하고 나머지는 정상 작동해야 합니다.' },
            ]}
          />
        </section>
      </article>
      <TableOfContents />
    </div>
  )
}
