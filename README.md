# Finance Design System Guide

토스(Toss)의 디자인 철학과 UI 패턴을 참고하여 제작한 **개발자용 디자인 시스템 가이드**입니다.
Next.js 14 App Router 기반으로 구축되었으며, 인터랙티브 Playground와 실제 동작하는 컴포넌트 예시를 제공합니다.

> **고지사항**: 이 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.
> 토스(Viva Republica)의 공식 라이브러리나 제품이 아닙니다.
> 토스의 디자인 원칙과 UI 패턴을 *참고*하여 독립적으로 구현하였습니다.

---

## 주요 기능

- **Foundation** — 색상 토큰, 타이포그래피, 간격, 모션, 레이아웃, 아이콘
- **컴포넌트 21종** — Button, Input, Select, Radio, Checkbox, Toggle, Chip, Badge, Avatar, Card, Tabs, Accordion, Divider, Progress, Spinner, Skeleton, Tooltip, Modal, BottomSheet, Toast, Textarea
- **패턴** — Form, Empty State, Error State, Loading State
- **인터랙티브 Playground** — Props를 실시간으로 조작하며 미리보기
- **Cmd+K 전역 검색** — 키보드 기반 빠른 탐색
- **다크모드** — next-themes 기반 라이트/다크 전환
- **Do / Don't** — 각 컴포넌트별 사용 가이드라인

---

## 기술 스택

| 항목 | 사용 기술 |
|------|-----------|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS + CSS Variables |
| 다크모드 | next-themes |
| 코드 하이라이팅 | Shiki |
| 유틸리티 | clsx + tailwind-merge |

---

## 시작하기

### 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/[your-username]/finance-design-system.git
cd finance-design-system

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
npm run build
npm start
```

---

## 프로젝트 구조

```
├── app/
│   ├── foundations/       # 색상, 타이포, 간격, 모션, 레이아웃, 아이콘
│   ├── components/        # 컴포넌트별 문서 페이지
│   ├── patterns/          # Form, Empty/Error/Loading State 패턴
│   └── changelog/         # 변경 이력
├── components/
│   ├── fds/               # 디자인 시스템 컴포넌트 구현체
│   ├── docs/              # 문서용 컴포넌트 (Playground, PropsTable 등)
│   └── layout/            # 헤더, 사이드바, TOC, 검색
├── lib/
│   ├── tokens.ts          # 디자인 토큰 정의
│   ├── navigation.ts      # 사이드바 네비게이션 구조
│   └── cn.ts              # clsx + tailwind-merge 유틸
└── styles/
    └── globals.css        # CSS 변수 토큰 (라이트/다크)
```

---

## 디자인 토큰 시스템

CSS 변수 기반의 2레이어 토큰 구조를 사용합니다.

```css
/* Primitive 토큰 — 원시 값 */
--fds-color-blue-500: #3182F6;

/* Semantic 토큰 — 의미 기반 */
--fds-color-primary: var(--fds-color-blue-500);
--fds-color-bg-base: #FFFFFF;        /* 라이트 */
--fds-color-bg-base: #111111;        /* 다크 */
```

---

## 라이선스

MIT License — 자유롭게 사용, 수정, 배포 가능합니다.

---

## 참고

- 디자인 철학 참고: [Toss Design](https://toss.im)
- 컴포넌트 구현: 모두 독립적으로 직접 작성
- 외부 UI 라이브러리 미사용 (Radix, shadcn 등 없이 순수 구현)
