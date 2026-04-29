export interface NavItem {
  title: string
  href: string
  badge?: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
  },
  {
    title: '디자인 원칙',
    href: '/principles',
  },
  {
    title: 'Foundation',
    href: '/foundations/color',
    children: [
      { title: '색상 (Color)', href: '/foundations/color' },
      { title: '타이포그래피 (Typography)', href: '/foundations/typography' },
      { title: '간격 (Spacing)', href: '/foundations/spacing' },
      { title: '모션 (Motion)', href: '/foundations/motion' },
      { title: '레이아웃 (Layout)', href: '/foundations/layout' },
      { title: '아이콘 (Icons)', href: '/foundations/icons' },
    ],
  },
  {
    title: '컴포넌트',
    href: '/components/button',
    children: [
      { title: 'Button', href: '/components/button' },
      { title: 'Input', href: '/components/input' },
      { title: 'Textarea', href: '/components/textarea' },
      { title: 'Select', href: '/components/select' },
      { title: 'Radio', href: '/components/radio' },
      { title: 'Checkbox', href: '/components/checkbox' },
      { title: 'Toggle', href: '/components/toggle' },
      { title: 'Chip', href: '/components/chip' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Avatar', href: '/components/avatar' },
      { title: 'Card', href: '/components/card' },
      { title: 'Tabs', href: '/components/tabs' },
      { title: 'Accordion', href: '/components/accordion' },
      { title: 'Divider', href: '/components/divider' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Spinner', href: '/components/spinner' },
      { title: 'Skeleton', href: '/components/skeleton' },
      { title: 'Tooltip', href: '/components/tooltip' },
      { title: 'Modal', href: '/components/modal' },
      { title: 'BottomSheet', href: '/components/bottomsheet' },
      { title: 'Toast', href: '/components/toast' },
    ],
  },
  {
    title: '패턴',
    href: '/patterns/form',
    children: [
      { title: 'Form 패턴', href: '/patterns/form' },
      { title: 'Empty State', href: '/patterns/empty-state' },
      { title: 'Error State', href: '/patterns/error-state' },
      { title: 'Loading State', href: '/patterns/loading-state' },
    ],
  },
  {
    title: 'Changelog',
    href: '/changelog',
  },
]

export function flattenNavigation(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => [
    item,
    ...(item.children ? flattenNavigation(item.children) : []),
  ])
}
