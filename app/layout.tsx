import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: { default: 'Finance Design System Guide', template: '%s | FDS Guide' },
  description: '토스 디자인 시스템 개발자 가이드 — 컴포넌트, 토큰, 원칙을 한눈에',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex pt-[var(--header-height)]">
            <Sidebar />
            <main
              className="flex-1 min-h-[calc(100vh-var(--header-height))]"
              style={{ marginLeft: 'var(--sidebar-width)' }}
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
