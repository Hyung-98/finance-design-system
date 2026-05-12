export const colorTokens = {
  primitive: {
    blue: {
      '50': { value: '#EEF4FF', variable: '--fds-color-blue-50' },
      '100': { value: '#D6E8FF', variable: '--fds-color-blue-100' },
      '200': { value: '#ADD1FF', variable: '--fds-color-blue-200' },
      '300': { value: '#84BAFF', variable: '--fds-color-blue-300' },
      '400': { value: '#5BA3FF', variable: '--fds-color-blue-400' },
      '500': { value: '#3182F6', variable: '--fds-color-blue-500' },
      '600': { value: '#1B64DA', variable: '--fds-color-blue-600' },
      '700': { value: '#1250AF', variable: '--fds-color-blue-700' },
      '800': { value: '#0C3D85', variable: '--fds-color-blue-800' },
      '900': { value: '#082C61', variable: '--fds-color-blue-900' },
    },
    gray: {
      '50': { value: '#F9FAFB', variable: '--fds-color-gray-50' },
      '100': { value: '#F2F4F6', variable: '--fds-color-gray-100' },
      '200': { value: '#E5E8EB', variable: '--fds-color-gray-200' },
      '300': { value: '#D1D6DB', variable: '--fds-color-gray-300' },
      '400': { value: '#B0B8C1', variable: '--fds-color-gray-400' },
      '500': { value: '#8B95A1', variable: '--fds-color-gray-500' },
      '600': { value: '#6B7684', variable: '--fds-color-gray-600' },
      '700': { value: '#4E5968', variable: '--fds-color-gray-700' },
      '800': { value: '#333D4B', variable: '--fds-color-gray-800' },
      '900': { value: '#191F28', variable: '--fds-color-gray-900' },
    },
    red: {
      '50': { value: '#FFF3F0', variable: '--fds-color-red-50' },
      '100': { value: '#FFE0D9', variable: '--fds-color-red-100' },
      '500': { value: '#F04452', variable: '--fds-color-red-500' },
      '600': { value: '#D03042', variable: '--fds-color-red-600' },
    },
    green: {
      '50': { value: '#EDFBF2', variable: '--fds-color-green-50' },
      '100': { value: '#C7F2D8', variable: '--fds-color-green-100' },
      '500': { value: '#00C471', variable: '--fds-color-green-500' },
      '600': { value: '#009E5E', variable: '--fds-color-green-600' },
    },
    yellow: {
      '50': { value: '#FFFBEC', variable: '--fds-color-yellow-50' },
      '100': { value: '#FFF3C4', variable: '--fds-color-yellow-100' },
      '500': { value: '#F5B100', variable: '--fds-color-yellow-500' },
    },
  },
  semantic: {
    primary: { value: 'var(--fds-color-blue-500)', variable: '--fds-color-primary', description: '주요 인터랙션, CTA 버튼' },
    primaryHover: { value: 'var(--fds-color-blue-600)', variable: '--fds-color-primary-hover', description: '버튼 호버 상태' },
    secondary: { value: 'var(--fds-color-gray-100)', variable: '--fds-color-secondary', description: '보조 버튼, 배경 강조' },
    textPrimary: { value: 'var(--fds-color-gray-900)', variable: '--fds-color-text-primary', description: '본문, 제목 텍스트' },
    textSecondary: { value: 'var(--fds-color-gray-600)', variable: '--fds-color-text-secondary', description: '부가 설명, 레이블' },
    textTertiary: { value: 'var(--fds-color-gray-400)', variable: '--fds-color-text-tertiary', description: '비활성, 힌트 텍스트' },
    textInverse: { value: '#FFFFFF', variable: '--fds-color-text-inverse', description: '어두운 배경 위 텍스트' },
    bgBase: { value: '#FFFFFF', variable: '--fds-color-bg-base', description: '기본 배경' },
    bgElevated: { value: 'var(--fds-color-gray-50)', variable: '--fds-color-bg-elevated', description: '카드, 시트 배경' },
    bgOverlay: { value: 'var(--fds-color-gray-100)', variable: '--fds-color-bg-overlay', description: '오버레이, 모달 배경' },
    border: { value: 'var(--fds-color-gray-200)', variable: '--fds-color-border', description: '기본 테두리' },
    borderStrong: { value: 'var(--fds-color-gray-300)', variable: '--fds-color-border-strong', description: '강조 테두리' },
    danger: { value: 'var(--fds-color-red-500)', variable: '--fds-color-danger', description: '오류, 경고' },
    success: { value: 'var(--fds-color-green-500)', variable: '--fds-color-success', description: '성공, 완료' },
    warning: { value: 'var(--fds-color-yellow-500)', variable: '--fds-color-warning', description: '주의, 알림' },
  },
}

export const spacingTokens = {
  '1': { value: '4px', variable: '--fds-spacing-1' },
  '2': { value: '8px', variable: '--fds-spacing-2' },
  '3': { value: '12px', variable: '--fds-spacing-3' },
  '4': { value: '16px', variable: '--fds-spacing-4' },
  '5': { value: '20px', variable: '--fds-spacing-5' },
  '6': { value: '24px', variable: '--fds-spacing-6' },
  '7': { value: '28px', variable: '--fds-spacing-7' },
  '8': { value: '32px', variable: '--fds-spacing-8' },
  '10': { value: '40px', variable: '--fds-spacing-10' },
  '12': { value: '48px', variable: '--fds-spacing-12' },
  '14': { value: '56px', variable: '--fds-spacing-14' },
  '16': { value: '64px', variable: '--fds-spacing-16' },
  '20': { value: '80px', variable: '--fds-spacing-20' },
  '24': { value: '96px', variable: '--fds-spacing-24' },
}

export const typographyTokens = {
  scale: {
    'xs': { fontSize: '11px', lineHeight: '16px', variable: '--fds-text-xs' },
    'sm': { fontSize: '13px', lineHeight: '20px', variable: '--fds-text-sm' },
    'base': { fontSize: '15px', lineHeight: '24px', variable: '--fds-text-base' },
    'lg': { fontSize: '17px', lineHeight: '26px', variable: '--fds-text-lg' },
    'xl': { fontSize: '20px', lineHeight: '28px', variable: '--fds-text-xl' },
    '2xl': { fontSize: '24px', lineHeight: '32px', variable: '--fds-text-2xl' },
    '3xl': { fontSize: '28px', lineHeight: '36px', variable: '--fds-text-3xl' },
    '4xl': { fontSize: '32px', lineHeight: '40px', variable: '--fds-text-4xl' },
    '5xl': { fontSize: '40px', lineHeight: '48px', variable: '--fds-text-5xl' },
  },
  weight: {
    regular: { value: '400', variable: '--fds-font-weight-regular' },
    medium: { value: '500', variable: '--fds-font-weight-medium' },
    semibold: { value: '600', variable: '--fds-font-weight-semibold' },
    bold: { value: '700', variable: '--fds-font-weight-bold' },
  },
}

export const radiusTokens = {
  sm: { value: '4px', variable: '--fds-radius-sm' },
  md: { value: '8px', variable: '--fds-radius-md' },
  lg: { value: '12px', variable: '--fds-radius-lg' },
  xl: { value: '16px', variable: '--fds-radius-xl' },
  '2xl': { value: '20px', variable: '--fds-radius-2xl' },
  full: { value: '9999px', variable: '--fds-radius-full' },
}

export const shadowTokens = {
  sm: { value: '0 1px 2px rgba(0,0,0,0.06)', variable: '--fds-shadow-sm' },
  md: { value: '0 4px 16px rgba(0,0,0,0.08)', variable: '--fds-shadow-md' },
  lg: { value: '0 8px 32px rgba(0,0,0,0.12)', variable: '--fds-shadow-lg' },
  xl: { value: '0 16px 48px rgba(0,0,0,0.16)', variable: '--fds-shadow-xl' },
}

export const motionTokens = {
  duration: {
    instant: { value: '0ms', variable: '--fds-duration-instant', description: '즉각 반응 (피드백 없이 전환)' },
    fast: { value: '150ms', variable: '--fds-duration-fast', description: '빠른 마이크로 인터랙션 (버튼, 토글)' },
    normal: { value: '250ms', variable: '--fds-duration-normal', description: '일반 전환 (모달 열기, 페이드)' },
    slow: { value: '400ms', variable: '--fds-duration-slow', description: '복잡한 전환 (시트 슬라이드, 페이지 전환)' },
  },
  easing: {
    easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)', variable: '--fds-easing-ease-in', description: '요소가 사라질 때 (exit)' },
    easeOut: { value: 'cubic-bezier(0, 0, 0.2, 1)', variable: '--fds-easing-ease-out', description: '요소가 나타날 때 (enter)' },
    easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)', variable: '--fds-easing-ease-in-out', description: '위치 이동, 크기 변경' },
    spring: { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', variable: '--fds-easing-spring', description: '탄성 효과 (알림, 강조)' },
  },
}

export const zIndexTokens = {
  base: { value: '0', variable: '--fds-z-base', description: '기본 콘텐츠' },
  raised: { value: '10', variable: '--fds-z-raised', description: '카드, 부유 요소' },
  dropdown: { value: '100', variable: '--fds-z-dropdown', description: '드롭다운, 셀렉트 옵션' },
  sticky: { value: '200', variable: '--fds-z-sticky', description: 'Sticky 헤더, 하단 바' },
  modal: { value: '300', variable: '--fds-z-modal', description: '모달, 다이얼로그' },
  toast: { value: '400', variable: '--fds-z-toast', description: '토스트 알림' },
  tooltip: { value: '500', variable: '--fds-z-tooltip', description: '툴팁, 팝오버' },
}

export const breakpointTokens = {
  sm: { value: '375px', variable: '--fds-bp-sm', description: '모바일 (iPhone SE 이상)' },
  md: { value: '768px', variable: '--fds-bp-md', description: '태블릿' },
  lg: { value: '1024px', variable: '--fds-bp-lg', description: '소형 데스크톱' },
  xl: { value: '1280px', variable: '--fds-bp-xl', description: '일반 데스크톱' },
  '2xl': { value: '1536px', variable: '--fds-bp-2xl', description: '대형 화면' },
}

export const iconList = [
  { name: 'ChevronRight', description: '오른쪽 화살표' },
  { name: 'ChevronLeft', description: '왼쪽 화살표' },
  { name: 'ChevronDown', description: '아래쪽 화살표' },
  { name: 'ChevronUp', description: '위쪽 화살표' },
  { name: 'Close', description: '닫기' },
  { name: 'Check', description: '체크' },
  { name: 'Search', description: '검색' },
  { name: 'Home', description: '홈' },
  { name: 'User', description: '사용자' },
  { name: 'Settings', description: '설정' },
  { name: 'Bell', description: '알림' },
  { name: 'Heart', description: '좋아요' },
  { name: 'Share', description: '공유' },
  { name: 'Edit', description: '편집' },
  { name: 'Trash', description: '삭제' },
  { name: 'Plus', description: '추가' },
  { name: 'Minus', description: '빼기' },
  { name: 'Info', description: '정보' },
  { name: 'Warning', description: '경고' },
  { name: 'Error', description: '오류' },
  { name: 'Copy', description: '복사' },
  { name: 'Download', description: '다운로드' },
  { name: 'Upload', description: '업로드' },
  { name: 'Link', description: '링크' },
  { name: 'Lock', description: '잠금' },
  { name: 'Unlock', description: '잠금 해제' },
  { name: 'Eye', description: '보기' },
  { name: 'EyeOff', description: '숨기기' },
  { name: 'Calendar', description: '캘린더' },
  { name: 'Clock', description: '시간' },
  { name: 'Mail', description: '메일' },
  { name: 'Phone', description: '전화' },
]
