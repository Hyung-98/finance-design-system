import {
  cn
} from "./chunk-7BOVFQBS.mjs";

// lib/tokens.ts
var colorTokens = {
  primitive: {
    blue: {
      "50": { value: "#EEF4FF", variable: "--fds-color-blue-50" },
      "100": { value: "#D6E8FF", variable: "--fds-color-blue-100" },
      "200": { value: "#ADD1FF", variable: "--fds-color-blue-200" },
      "300": { value: "#84BAFF", variable: "--fds-color-blue-300" },
      "400": { value: "#5BA3FF", variable: "--fds-color-blue-400" },
      "500": { value: "#3182F6", variable: "--fds-color-blue-500" },
      "600": { value: "#1B64DA", variable: "--fds-color-blue-600" },
      "700": { value: "#1250AF", variable: "--fds-color-blue-700" },
      "800": { value: "#0C3D85", variable: "--fds-color-blue-800" },
      "900": { value: "#082C61", variable: "--fds-color-blue-900" }
    },
    gray: {
      "50": { value: "#F9FAFB", variable: "--fds-color-gray-50" },
      "100": { value: "#F2F4F6", variable: "--fds-color-gray-100" },
      "200": { value: "#E5E8EB", variable: "--fds-color-gray-200" },
      "300": { value: "#D1D6DB", variable: "--fds-color-gray-300" },
      "400": { value: "#B0B8C1", variable: "--fds-color-gray-400" },
      "500": { value: "#8B95A1", variable: "--fds-color-gray-500" },
      "600": { value: "#6B7684", variable: "--fds-color-gray-600" },
      "700": { value: "#4E5968", variable: "--fds-color-gray-700" },
      "800": { value: "#333D4B", variable: "--fds-color-gray-800" },
      "900": { value: "#191F28", variable: "--fds-color-gray-900" }
    },
    red: {
      "50": { value: "#FFF3F0", variable: "--fds-color-red-50" },
      "100": { value: "#FFE0D9", variable: "--fds-color-red-100" },
      "500": { value: "#F04452", variable: "--fds-color-red-500" },
      "600": { value: "#D03042", variable: "--fds-color-red-600" }
    },
    green: {
      "50": { value: "#EDFBF2", variable: "--fds-color-green-50" },
      "100": { value: "#C7F2D8", variable: "--fds-color-green-100" },
      "500": { value: "#00C471", variable: "--fds-color-green-500" },
      "600": { value: "#009E5E", variable: "--fds-color-green-600" }
    },
    yellow: {
      "50": { value: "#FFFBEC", variable: "--fds-color-yellow-50" },
      "100": { value: "#FFF3C4", variable: "--fds-color-yellow-100" },
      "500": { value: "#F5B100", variable: "--fds-color-yellow-500" }
    }
  },
  semantic: {
    primary: { value: "var(--fds-color-blue-500)", variable: "--fds-color-primary", description: "\uC8FC\uC694 \uC778\uD130\uB799\uC158, CTA \uBC84\uD2BC" },
    primaryHover: { value: "var(--fds-color-blue-600)", variable: "--fds-color-primary-hover", description: "\uBC84\uD2BC \uD638\uBC84 \uC0C1\uD0DC" },
    secondary: { value: "var(--fds-color-gray-100)", variable: "--fds-color-secondary", description: "\uBCF4\uC870 \uBC84\uD2BC, \uBC30\uACBD \uAC15\uC870" },
    textPrimary: { value: "var(--fds-color-gray-900)", variable: "--fds-color-text-primary", description: "\uBCF8\uBB38, \uC81C\uBAA9 \uD14D\uC2A4\uD2B8" },
    textSecondary: { value: "var(--fds-color-gray-600)", variable: "--fds-color-text-secondary", description: "\uBD80\uAC00 \uC124\uBA85, \uB808\uC774\uBE14" },
    textTertiary: { value: "var(--fds-color-gray-400)", variable: "--fds-color-text-tertiary", description: "\uBE44\uD65C\uC131, \uD78C\uD2B8 \uD14D\uC2A4\uD2B8" },
    textInverse: { value: "#FFFFFF", variable: "--fds-color-text-inverse", description: "\uC5B4\uB450\uC6B4 \uBC30\uACBD \uC704 \uD14D\uC2A4\uD2B8" },
    bgBase: { value: "#FFFFFF", variable: "--fds-color-bg-base", description: "\uAE30\uBCF8 \uBC30\uACBD" },
    bgElevated: { value: "var(--fds-color-gray-50)", variable: "--fds-color-bg-elevated", description: "\uCE74\uB4DC, \uC2DC\uD2B8 \uBC30\uACBD" },
    bgOverlay: { value: "var(--fds-color-gray-100)", variable: "--fds-color-bg-overlay", description: "\uC624\uBC84\uB808\uC774, \uBAA8\uB2EC \uBC30\uACBD" },
    border: { value: "var(--fds-color-gray-200)", variable: "--fds-color-border", description: "\uAE30\uBCF8 \uD14C\uB450\uB9AC" },
    borderStrong: { value: "var(--fds-color-gray-300)", variable: "--fds-color-border-strong", description: "\uAC15\uC870 \uD14C\uB450\uB9AC" },
    danger: { value: "var(--fds-color-red-500)", variable: "--fds-color-danger", description: "\uC624\uB958, \uACBD\uACE0" },
    success: { value: "var(--fds-color-green-500)", variable: "--fds-color-success", description: "\uC131\uACF5, \uC644\uB8CC" },
    warning: { value: "var(--fds-color-yellow-500)", variable: "--fds-color-warning", description: "\uC8FC\uC758, \uC54C\uB9BC" }
  }
};
var spacingTokens = {
  "1": { value: "4px", variable: "--fds-spacing-1" },
  "2": { value: "8px", variable: "--fds-spacing-2" },
  "3": { value: "12px", variable: "--fds-spacing-3" },
  "4": { value: "16px", variable: "--fds-spacing-4" },
  "5": { value: "20px", variable: "--fds-spacing-5" },
  "6": { value: "24px", variable: "--fds-spacing-6" },
  "7": { value: "28px", variable: "--fds-spacing-7" },
  "8": { value: "32px", variable: "--fds-spacing-8" },
  "10": { value: "40px", variable: "--fds-spacing-10" },
  "12": { value: "48px", variable: "--fds-spacing-12" },
  "14": { value: "56px", variable: "--fds-spacing-14" },
  "16": { value: "64px", variable: "--fds-spacing-16" },
  "20": { value: "80px", variable: "--fds-spacing-20" },
  "24": { value: "96px", variable: "--fds-spacing-24" }
};
var typographyTokens = {
  scale: {
    "xs": { fontSize: "11px", lineHeight: "16px", variable: "--fds-text-xs" },
    "sm": { fontSize: "13px", lineHeight: "20px", variable: "--fds-text-sm" },
    "base": { fontSize: "15px", lineHeight: "24px", variable: "--fds-text-base" },
    "lg": { fontSize: "17px", lineHeight: "26px", variable: "--fds-text-lg" },
    "xl": { fontSize: "20px", lineHeight: "28px", variable: "--fds-text-xl" },
    "2xl": { fontSize: "24px", lineHeight: "32px", variable: "--fds-text-2xl" },
    "3xl": { fontSize: "28px", lineHeight: "36px", variable: "--fds-text-3xl" },
    "4xl": { fontSize: "32px", lineHeight: "40px", variable: "--fds-text-4xl" },
    "5xl": { fontSize: "40px", lineHeight: "48px", variable: "--fds-text-5xl" }
  },
  weight: {
    regular: { value: "400", variable: "--fds-font-weight-regular" },
    medium: { value: "500", variable: "--fds-font-weight-medium" },
    semibold: { value: "600", variable: "--fds-font-weight-semibold" },
    bold: { value: "700", variable: "--fds-font-weight-bold" }
  }
};
var radiusTokens = {
  sm: { value: "4px", variable: "--fds-radius-sm" },
  md: { value: "8px", variable: "--fds-radius-md" },
  lg: { value: "12px", variable: "--fds-radius-lg" },
  xl: { value: "16px", variable: "--fds-radius-xl" },
  "2xl": { value: "20px", variable: "--fds-radius-2xl" },
  full: { value: "9999px", variable: "--fds-radius-full" }
};
var shadowTokens = {
  sm: { value: "0 1px 2px rgba(0,0,0,0.06)", variable: "--fds-shadow-sm" },
  md: { value: "0 4px 16px rgba(0,0,0,0.08)", variable: "--fds-shadow-md" },
  lg: { value: "0 8px 32px rgba(0,0,0,0.12)", variable: "--fds-shadow-lg" },
  xl: { value: "0 16px 48px rgba(0,0,0,0.16)", variable: "--fds-shadow-xl" }
};
var motionTokens = {
  duration: {
    instant: { value: "0ms", variable: "--fds-duration-instant", description: "\uC989\uAC01 \uBC18\uC751 (\uD53C\uB4DC\uBC31 \uC5C6\uC774 \uC804\uD658)" },
    fast: { value: "150ms", variable: "--fds-duration-fast", description: "\uBE60\uB978 \uB9C8\uC774\uD06C\uB85C \uC778\uD130\uB799\uC158 (\uBC84\uD2BC, \uD1A0\uAE00)" },
    normal: { value: "250ms", variable: "--fds-duration-normal", description: "\uC77C\uBC18 \uC804\uD658 (\uBAA8\uB2EC \uC5F4\uAE30, \uD398\uC774\uB4DC)" },
    slow: { value: "400ms", variable: "--fds-duration-slow", description: "\uBCF5\uC7A1\uD55C \uC804\uD658 (\uC2DC\uD2B8 \uC2AC\uB77C\uC774\uB4DC, \uD398\uC774\uC9C0 \uC804\uD658)" }
  },
  easing: {
    easeIn: { value: "cubic-bezier(0.4, 0, 1, 1)", variable: "--fds-easing-ease-in", description: "\uC694\uC18C\uAC00 \uC0AC\uB77C\uC9C8 \uB54C (exit)" },
    easeOut: { value: "cubic-bezier(0, 0, 0.2, 1)", variable: "--fds-easing-ease-out", description: "\uC694\uC18C\uAC00 \uB098\uD0C0\uB0A0 \uB54C (enter)" },
    easeInOut: { value: "cubic-bezier(0.4, 0, 0.2, 1)", variable: "--fds-easing-ease-in-out", description: "\uC704\uCE58 \uC774\uB3D9, \uD06C\uAE30 \uBCC0\uACBD" },
    spring: { value: "cubic-bezier(0.34, 1.56, 0.64, 1)", variable: "--fds-easing-spring", description: "\uD0C4\uC131 \uD6A8\uACFC (\uC54C\uB9BC, \uAC15\uC870)" }
  }
};
var zIndexTokens = {
  base: { value: "0", variable: "--fds-z-base", description: "\uAE30\uBCF8 \uCF58\uD150\uCE20" },
  raised: { value: "10", variable: "--fds-z-raised", description: "\uCE74\uB4DC, \uBD80\uC720 \uC694\uC18C" },
  dropdown: { value: "100", variable: "--fds-z-dropdown", description: "\uB4DC\uB86D\uB2E4\uC6B4, \uC140\uB809\uD2B8 \uC635\uC158" },
  sticky: { value: "200", variable: "--fds-z-sticky", description: "Sticky \uD5E4\uB354, \uD558\uB2E8 \uBC14" },
  modal: { value: "300", variable: "--fds-z-modal", description: "\uBAA8\uB2EC, \uB2E4\uC774\uC5BC\uB85C\uADF8" },
  toast: { value: "400", variable: "--fds-z-toast", description: "\uD1A0\uC2A4\uD2B8 \uC54C\uB9BC" },
  tooltip: { value: "500", variable: "--fds-z-tooltip", description: "\uD234\uD301, \uD31D\uC624\uBC84" }
};
var breakpointTokens = {
  sm: { value: "375px", variable: "--fds-bp-sm", description: "\uBAA8\uBC14\uC77C (iPhone SE \uC774\uC0C1)" },
  md: { value: "768px", variable: "--fds-bp-md", description: "\uD0DC\uBE14\uB9BF" },
  lg: { value: "1024px", variable: "--fds-bp-lg", description: "\uC18C\uD615 \uB370\uC2A4\uD06C\uD1B1" },
  xl: { value: "1280px", variable: "--fds-bp-xl", description: "\uC77C\uBC18 \uB370\uC2A4\uD06C\uD1B1" },
  "2xl": { value: "1536px", variable: "--fds-bp-2xl", description: "\uB300\uD615 \uD654\uBA74" }
};
export {
  breakpointTokens,
  cn,
  colorTokens,
  motionTokens,
  radiusTokens,
  shadowTokens,
  spacingTokens,
  typographyTokens,
  zIndexTokens
};
//# sourceMappingURL=utils.mjs.map