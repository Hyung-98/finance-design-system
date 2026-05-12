"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/fds/index.ts
var fds_exports = {};
__export(fds_exports, {
  Accordion: () => Accordion,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  BellIcon: () => BellIcon,
  BottomSheet: () => BottomSheet,
  Button: () => Button,
  CalendarIcon: () => CalendarIcon,
  Card: () => Card,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  CheckIcon: () => CheckIcon,
  Checkbox: () => Checkbox,
  ChevronDownIcon: () => ChevronDownIcon,
  ChevronLeftIcon: () => ChevronLeftIcon,
  ChevronRightIcon: () => ChevronRightIcon,
  ChevronUpIcon: () => ChevronUpIcon,
  Chip: () => Chip,
  ChipGroup: () => ChipGroup,
  ClockIcon: () => ClockIcon,
  CloseIcon: () => CloseIcon,
  CopyIcon: () => CopyIcon,
  Divider: () => Divider,
  DownloadIcon: () => DownloadIcon,
  EditIcon: () => EditIcon,
  ErrorIcon: () => ErrorIcon,
  EyeIcon: () => EyeIcon,
  EyeOffIcon: () => EyeOffIcon,
  HeartIcon: () => HeartIcon,
  HomeIcon: () => HomeIcon,
  InfoIcon: () => InfoIcon,
  Input: () => Input,
  LinkIcon: () => LinkIcon,
  LockIcon: () => LockIcon,
  MailIcon: () => MailIcon,
  MinusIcon: () => MinusIcon,
  Modal: () => Modal,
  PhoneIcon: () => PhoneIcon,
  PlusIcon: () => PlusIcon,
  Progress: () => Progress,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  SearchIcon: () => SearchIcon,
  Select: () => Select,
  SettingsIcon: () => SettingsIcon,
  ShareIcon: () => ShareIcon,
  Skeleton: () => Skeleton,
  SkeletonCard: () => SkeletonCard,
  SkeletonText: () => SkeletonText,
  Spinner: () => Spinner,
  StepProgress: () => StepProgress,
  Tabs: () => Tabs,
  Textarea: () => Textarea,
  Toast: () => Toast,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  TrashIcon: () => TrashIcon,
  UnlockIcon: () => UnlockIcon,
  UploadIcon: () => UploadIcon,
  UserIcon: () => UserIcon,
  WarningIcon: () => WarningIcon,
  iconComponents: () => iconComponents
});
module.exports = __toCommonJS(fds_exports);

// components/fds/Accordion.tsx
var import_react = require("react");

// lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// components/fds/Accordion.tsx
function Accordion({ items, type = "single", defaultValue, className }) {
  const uid = (0, import_react.useId)();
  const containerRef = (0, import_react.useRef)(null);
  const init = defaultValue ? Array.isArray(defaultValue) ? defaultValue : [defaultValue] : [];
  const [open, setOpen] = (0, import_react.useState)(init);
  const getTriggerId = (value) => `${uid}-trigger-${value}`;
  const getPanelId = (value) => `${uid}-panel-${value}`;
  const toggle = (value) => {
    if (type === "single") {
      setOpen((prev) => prev.includes(value) ? [] : [value]);
    } else {
      setOpen((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
    }
  };
  const handleKeyDown = (e, currentValue) => {
    var _a, _b;
    const enabledItems = items.filter((i) => !i.disabled);
    const currentIdx = enabledItems.findIndex((i) => i.value === currentValue);
    let nextIdx = -1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      nextIdx = (currentIdx + 1) % enabledItems.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      nextIdx = (currentIdx - 1 + enabledItems.length) % enabledItems.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = enabledItems.length - 1;
    }
    if (nextIdx >= 0) {
      (_b = (_a = containerRef.current) == null ? void 0 : _a.querySelector(`[id="${getTriggerId(enabledItems[nextIdx].value)}"]`)) == null ? void 0 : _b.focus();
    }
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: containerRef,
      className: cn("divide-y divide-[var(--fds-color-border)] border border-[var(--fds-color-border)] rounded-[var(--fds-radius-xl)] overflow-hidden", className)
    },
    items.map((item) => {
      const isOpen = open.includes(item.value);
      return /* @__PURE__ */ React.createElement("div", { key: item.value }, /* @__PURE__ */ React.createElement(
        "button",
        {
          id: getTriggerId(item.value),
          type: "button",
          disabled: item.disabled,
          "aria-expanded": isOpen,
          "aria-controls": getPanelId(item.value),
          onClick: () => !item.disabled && toggle(item.value),
          onKeyDown: (e) => handleKeyDown(e, item.value),
          className: cn(
            "w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-left",
            "text-[var(--fds-color-text-primary)] bg-[var(--fds-color-bg-base)]",
            "hover:bg-[var(--fds-color-bg-elevated)] transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--fds-color-primary)]",
            item.disabled && "opacity-40 cursor-not-allowed"
          )
        },
        /* @__PURE__ */ React.createElement("span", null, item.trigger),
        /* @__PURE__ */ React.createElement(
          "svg",
          {
            "aria-hidden": "true",
            className: cn("w-4 h-4 text-[var(--fds-color-text-tertiary)] transition-transform duration-200 shrink-0", isOpen && "rotate-180"),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2
          },
          /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 9l6 6 6-6" })
        )
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          id: getPanelId(item.value),
          role: "region",
          "aria-labelledby": getTriggerId(item.value),
          hidden: !isOpen,
          className: "px-5 pb-4 pt-1 text-sm text-[var(--fds-color-text-secondary)] bg-[var(--fds-color-bg-base)] leading-relaxed"
        },
        item.content
      ));
    })
  );
}

// components/fds/Avatar.tsx
var sizeStyles = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
};
function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}
var colors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-teal-100 text-teal-700"
];
function getColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}
function Avatar({ src, alt, name, size = "md", shape = "circle", className }) {
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-[var(--fds-radius-lg)]";
  const sizeClass = sizeStyles[size];
  if (src) {
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        src,
        alt: alt ?? name ?? "",
        className: cn("object-cover shrink-0", sizeClass, shapeClass, className)
      }
    );
  }
  if (name) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "flex items-center justify-center font-semibold shrink-0 select-none",
          sizeClass,
          shapeClass,
          getColor(name),
          className
        ),
        "aria-label": name
      },
      getInitials(name)
    );
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "flex items-center justify-center bg-[var(--fds-color-bg-elevated)] shrink-0",
        sizeClass,
        shapeClass,
        className
      ),
      "aria-hidden": "true"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-1/2 h-1/2 text-[var(--fds-color-text-tertiary)]", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" }))
  );
}
function AvatarGroup({ avatars, max = 4, size = "md" }) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  return /* @__PURE__ */ React.createElement("div", { className: "flex -space-x-2" }, visible.map((avatar, i) => /* @__PURE__ */ React.createElement(
    Avatar,
    {
      key: i,
      ...avatar,
      size,
      className: cn("ring-2 ring-[var(--fds-color-bg-base)]", avatar.className)
    }
  )), overflow > 0 && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "flex items-center justify-center ring-2 ring-[var(--fds-color-bg-base)] rounded-full",
        "bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-secondary)] font-medium shrink-0",
        sizeStyles[size]
      )
    },
    "+",
    overflow
  ));
}

// components/fds/Badge.tsx
var variantStyles = {
  primary: "bg-[var(--fds-color-primary-subtle)] text-[var(--fds-color-primary)]",
  secondary: "bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-secondary)]",
  success: "bg-[var(--fds-color-success-subtle)] text-[var(--fds-color-success)]",
  danger: "bg-[var(--fds-color-danger-subtle)] text-[var(--fds-color-danger)]",
  warning: "bg-[var(--fds-color-warning-subtle)] text-[var(--fds-color-warning)]",
  outline: "border border-[var(--fds-color-border-strong)] text-[var(--fds-color-text-secondary)]"
};
var sizeStyles2 = {
  sm: "text-xs px-2 py-0.5 rounded-[var(--fds-radius-sm)]",
  md: "text-sm px-2.5 py-1 rounded-[var(--fds-radius-md)]"
};
function Badge({ variant = "primary", size = "md", children, className }) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: cn(
        "inline-flex items-center font-medium",
        variantStyles[variant],
        sizeStyles2[size],
        className
      )
    },
    children
  );
}

// components/fds/BottomSheet.tsx
var import_react2 = require("react");
var FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function BottomSheet({ open, onClose, title, description, children, footer }) {
  const uid = (0, import_react2.useId)();
  const titleId = `${uid}-title`;
  const panelRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    if (!open) return;
    document.body.style.overflow = "hidden";
    const previouslyFocused = document.activeElement;
    const els = (_a = panelRef.current) == null ? void 0 : _a.querySelectorAll(FOCUSABLE);
    (_b = els == null ? void 0 : els[0]) == null ? void 0 : _b.focus();
    const handleKeyDown = (e) => {
      var _a2;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = Array.from(((_a2 = panelRef.current) == null ? void 0 : _a2.querySelectorAll(FOCUSABLE)) ?? []);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused == null ? void 0 : previouslyFocused.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex items-end justify-center", style: { zIndex: 300 } }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black/50", onClick: onClose, "aria-hidden": "true" }), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? titleId : void 0,
      className: cn(
        "relative w-full max-w-lg bg-[var(--fds-color-bg-base)]",
        "rounded-t-[var(--fds-radius-2xl)] shadow-[var(--fds-shadow-xl)]",
        "animate-in slide-in-from-bottom duration-300"
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex justify-center pt-3 pb-1", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-1 rounded-full bg-[var(--fds-color-border-strong)]" })),
    (title || description) && /* @__PURE__ */ React.createElement("div", { className: "px-6 pt-3 pb-4" }, title && /* @__PURE__ */ React.createElement("h2", { id: titleId, className: "text-lg font-bold text-[var(--fds-color-text-primary)]" }, title), description && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--fds-color-text-secondary)] mt-1" }, description)),
    children && /* @__PURE__ */ React.createElement("div", { className: "px-6 pb-4 text-sm text-[var(--fds-color-text-secondary)]" }, children),
    footer && /* @__PURE__ */ React.createElement("div", { className: "px-6 pb-8 pt-2 flex flex-col gap-2" }, footer),
    !footer && /* @__PURE__ */ React.createElement("div", { className: "pb-6" })
  ));
}

// components/fds/Button.tsx
var import_react3 = require("react");
var variantStyles2 = {
  primary: "bg-[var(--fds-color-primary)] text-white hover:bg-[var(--fds-color-primary-hover)] active:scale-[0.98]",
  secondary: "bg-[var(--fds-color-gray-100)] dark:bg-[var(--fds-color-border)] text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-gray-200)] dark:hover:bg-[var(--fds-color-border-strong)]",
  outline: "bg-transparent border border-[var(--fds-color-border-strong)] text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)]",
  ghost: "bg-transparent text-[var(--fds-color-text-secondary)] hover:bg-[var(--fds-color-bg-elevated)] hover:text-[var(--fds-color-text-primary)]",
  danger: "bg-[var(--fds-color-danger)] text-white hover:opacity-90"
};
var sizeStyles3 = {
  sm: "h-8 px-3 text-sm rounded-[var(--fds-radius-md)] gap-1.5",
  md: "h-10 px-4 text-[15px] rounded-[var(--fds-radius-lg)] gap-2",
  lg: "h-12 px-6 text-base rounded-[var(--fds-radius-xl)] gap-2"
};
var Button = (0, import_react3.forwardRef)(
  ({ variant = "primary", size = "md", loading, fullWidth, disabled, className, children, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        ref,
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        className: cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)] focus-visible:ring-offset-2",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantStyles2[variant],
          sizeStyles3[size],
          fullWidth && "w-full",
          className
        ),
        ...props
      },
      loading && /* @__PURE__ */ React.createElement("svg", { "aria-hidden": "true", className: "animate-spin w-4 h-4", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })),
      children
    );
  }
);
Button.displayName = "Button";

// components/fds/Card.tsx
var variantStyles3 = {
  default: "bg-[var(--fds-color-bg-base)] border border-[var(--fds-color-border)]",
  elevated: "bg-[var(--fds-color-bg-base)] shadow-[var(--fds-shadow-md)]",
  outline: "bg-transparent border border-[var(--fds-color-border)]"
};
var paddingStyles = { none: "", sm: "p-4", md: "p-5", lg: "p-6" };
function Card({ children, variant = "default", padding = "md", interactive, className, onClick }) {
  const Tag = onClick ? "button" : "div";
  return /* @__PURE__ */ React.createElement(
    Tag,
    {
      onClick,
      className: cn(
        "rounded-[var(--fds-radius-xl)] w-full text-left",
        variantStyles3[variant],
        paddingStyles[padding],
        interactive && "cursor-pointer hover:shadow-[var(--fds-shadow-lg)] transition-shadow",
        onClick && "cursor-pointer hover:shadow-[var(--fds-shadow-lg)] transition-shadow active:scale-[0.99]",
        className
      )
    },
    children
  );
}
function CardHeader({ children, className }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn("mb-4", className) }, children);
}
function CardTitle({ children, className }) {
  return /* @__PURE__ */ React.createElement("h3", { className: cn("text-base font-bold text-[var(--fds-color-text-primary)]", className) }, children);
}
function CardDescription({ children, className }) {
  return /* @__PURE__ */ React.createElement("p", { className: cn("text-sm text-[var(--fds-color-text-secondary)] mt-1", className) }, children);
}
function CardFooter({ children, className }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn("mt-4 flex items-center gap-2", className) }, children);
}

// components/fds/Checkbox.tsx
var import_react4 = require("react");
var Checkbox = (0, import_react4.forwardRef)(
  ({ label, description, disabled, className, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "label",
      {
        className: cn(
          "flex items-start gap-3 cursor-pointer",
          disabled && "opacity-40 cursor-not-allowed"
        )
      },
      /* @__PURE__ */ React.createElement("div", { className: "relative mt-0.5 shrink-0" }, /* @__PURE__ */ React.createElement(
        "input",
        {
          ref,
          type: "checkbox",
          disabled,
          className: "sr-only peer",
          ...props
        }
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: cn(
            "w-5 h-5 rounded-[var(--fds-radius-sm)] border-2 transition-all",
            "border-[var(--fds-color-border-strong)]",
            "peer-checked:bg-[var(--fds-color-primary)] peer-checked:border-[var(--fds-color-primary)]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--fds-color-primary)] peer-focus-visible:ring-offset-2",
            className
          )
        }
      ), /* @__PURE__ */ React.createElement(
        "svg",
        {
          className: "absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none",
          fill: "none",
          viewBox: "0 0 20 20",
          stroke: "currentColor",
          strokeWidth: 2.5
        },
        /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 10l4 4 8-8" })
      )),
      (label || description) && /* @__PURE__ */ React.createElement("div", null, label && /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-[var(--fds-color-text-primary)]" }, label), description && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--fds-color-text-secondary)] mt-0.5" }, description))
    );
  }
);
Checkbox.displayName = "Checkbox";

// components/fds/Chip.tsx
function Chip({
  children,
  selected = false,
  disabled = false,
  onClick,
  onRemove,
  variant = "filter",
  size = "md",
  className
}) {
  const sizeStyles5 = {
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-sm px-3.5 py-1.5 gap-1.5"
  };
  const baseStyles = cn(
    "inline-flex items-center rounded-full font-medium transition-all border",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)] focus-visible:ring-offset-1",
    sizeStyles5[size],
    disabled && "opacity-40 cursor-not-allowed",
    className
  );
  const selectedStyles = selected ? "bg-[var(--fds-color-primary-subtle)] border-[var(--fds-color-primary)] text-[var(--fds-color-primary)]" : "bg-[var(--fds-color-bg-elevated)] border-[var(--fds-color-border)] text-[var(--fds-color-text-secondary)] hover:border-[var(--fds-color-border-strong)] hover:text-[var(--fds-color-text-primary)]";
  if (variant === "tag") {
    return /* @__PURE__ */ React.createElement("span", { className: cn(baseStyles, "bg-[var(--fds-color-bg-elevated)] border-[var(--fds-color-border)] text-[var(--fds-color-text-secondary)]") }, children, onRemove && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onRemove,
        disabled,
        "aria-label": "\uC81C\uAC70",
        className: "ml-0.5 rounded-full hover:text-[var(--fds-color-text-primary)] focus-visible:outline-none"
      },
      /* @__PURE__ */ React.createElement("svg", { className: "w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }))
    ));
  }
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      disabled,
      onClick: !disabled ? onClick : void 0,
      "aria-pressed": selected,
      className: cn(baseStyles, selectedStyles)
    },
    selected && /* @__PURE__ */ React.createElement("svg", { className: "w-3.5 h-3.5 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })),
    children
  );
}
function ChipGroup({ options, value = [], onChange, multiple = true, size = "md", className }) {
  const toggle = (v) => {
    if (!onChange) return;
    if (multiple) {
      onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
    } else {
      onChange(value.includes(v) ? [] : [v]);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("flex flex-wrap gap-2", className) }, options.map((opt) => /* @__PURE__ */ React.createElement(
    Chip,
    {
      key: opt.value,
      selected: value.includes(opt.value),
      disabled: opt.disabled,
      onClick: () => toggle(opt.value),
      size
    },
    opt.label
  )));
}

// components/fds/Divider.tsx
var spacingH = { none: "", sm: "my-3", md: "my-5", lg: "my-8" };
var spacingV = { none: "", sm: "mx-3", md: "mx-5", lg: "mx-8" };
function Divider({
  orientation = "horizontal",
  variant = "solid",
  spacing = "md",
  label,
  className
}) {
  const borderStyle = variant === "dashed" ? "border-dashed" : "border-solid";
  if (orientation === "vertical") {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        className: cn(
          "self-stretch w-px border-l border-[var(--fds-color-border)]",
          borderStyle,
          spacingV[spacing],
          className
        )
      }
    );
  }
  if (label) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("flex items-center gap-3", spacingH[spacing], className), role: "separator" }, /* @__PURE__ */ React.createElement("div", { className: cn("flex-1 border-t border-[var(--fds-color-border)]", borderStyle) }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[var(--fds-color-text-tertiary)] whitespace-nowrap" }, label), /* @__PURE__ */ React.createElement("div", { className: cn("flex-1 border-t border-[var(--fds-color-border)]", borderStyle) }));
  }
  return /* @__PURE__ */ React.createElement(
    "hr",
    {
      className: cn(
        "border-0 border-t border-[var(--fds-color-border)]",
        borderStyle,
        spacingH[spacing],
        className
      )
    }
  );
}

// components/fds/Input.tsx
var import_react5 = require("react");
var Input = (0, import_react5.forwardRef)(
  ({ label, helperText, errorText, status = "default", prefix, suffix, className, disabled, id, ...props }, ref) => {
    const uid = (0, import_react5.useId)();
    const inputId = id ?? uid;
    const descId = `${inputId}-desc`;
    const hasError = status === "error" || !!errorText;
    const hasSuccess = status === "success";
    const hasDesc = !!(errorText || helperText);
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1.5 w-full" }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: inputId, className: "text-sm font-medium text-[var(--fds-color-text-primary)]" }, label), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "flex items-center gap-2 px-3.5 rounded-[var(--fds-radius-lg)] border transition-all",
          "bg-[var(--fds-color-bg-base)]",
          "focus-within:ring-2 focus-within:ring-offset-0",
          hasError ? "border-[var(--fds-color-danger)] focus-within:ring-[var(--fds-color-danger)]" : hasSuccess ? "border-[var(--fds-color-success)] focus-within:ring-[var(--fds-color-success)]" : "border-[var(--fds-color-border)] focus-within:border-[var(--fds-color-primary)] focus-within:ring-[var(--fds-color-primary)]",
          disabled && "opacity-40 cursor-not-allowed bg-[var(--fds-color-bg-elevated)]"
        )
      },
      prefix && /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", className: "text-[var(--fds-color-text-tertiary)] shrink-0" }, prefix),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ref,
          id: inputId,
          disabled,
          "aria-invalid": hasError || void 0,
          "aria-describedby": hasDesc ? descId : void 0,
          className: cn(
            "flex-1 py-2.5 text-[15px] bg-transparent outline-none",
            "text-[var(--fds-color-text-primary)] placeholder:text-[var(--fds-color-text-tertiary)]",
            "disabled:cursor-not-allowed",
            className
          ),
          ...props
        }
      ),
      suffix && /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", className: "text-[var(--fds-color-text-tertiary)] shrink-0" }, suffix)
    ), hasDesc && /* @__PURE__ */ React.createElement(
      "p",
      {
        id: descId,
        role: hasError ? "alert" : void 0,
        className: cn(
          "text-sm",
          hasError ? "text-[var(--fds-color-danger)]" : "text-[var(--fds-color-text-secondary)]"
        )
      },
      errorText || helperText
    ));
  }
);
Input.displayName = "Input";

// components/fds/Modal.tsx
var import_react6 = require("react");
var sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg"
};
var FOCUSABLE2 = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function Modal({ open, onClose, title, description, children, footer, size = "md" }) {
  const uid = (0, import_react6.useId)();
  const titleId = `${uid}-title`;
  const panelRef = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const previouslyFocused = document.activeElement;
    const focusFirst = () => {
      var _a, _b;
      const els = (_a = panelRef.current) == null ? void 0 : _a.querySelectorAll(FOCUSABLE2);
      (_b = els == null ? void 0 : els[0]) == null ? void 0 : _b.focus();
    };
    focusFirst();
    const handleKeyDown = (e) => {
      var _a;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const els = Array.from(((_a = panelRef.current) == null ? void 0 : _a.querySelectorAll(FOCUSABLE2)) ?? []);
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused == null ? void 0 : previouslyFocused.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: { zIndex: 50 },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? titleId : void 0
    },
    /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black/50", onClick: onClose, "aria-hidden": "true" }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: panelRef,
        className: cn(
          "relative w-full bg-[var(--fds-color-bg-base)] rounded-[var(--fds-radius-2xl)] shadow-[var(--fds-shadow-xl)]",
          "animate-in fade-in zoom-in-95 duration-200",
          sizeMap[size]
        )
      },
      (title || description) && /* @__PURE__ */ React.createElement("div", { className: "px-6 pt-6 pb-4" }, title && /* @__PURE__ */ React.createElement("h2", { id: titleId, className: "text-lg font-bold text-[var(--fds-color-text-primary)]" }, title), description && /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-sm text-[var(--fds-color-text-secondary)]" }, description)),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: onClose,
          className: "absolute top-4 right-4 p-1.5 rounded-lg text-[var(--fds-color-text-tertiary)] hover:text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)]",
          "aria-label": "\uB2EB\uAE30"
        },
        /* @__PURE__ */ React.createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))
      ),
      children && /* @__PURE__ */ React.createElement("div", { className: "px-6 pb-4 text-sm text-[var(--fds-color-text-secondary)]" }, children),
      footer && /* @__PURE__ */ React.createElement("div", { className: "px-6 pb-6 flex gap-2 justify-end" }, footer)
    )
  );
}

// components/fds/Progress.tsx
var sizeStyles4 = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
var variantStyles4 = {
  primary: "bg-[var(--fds-color-primary)]",
  success: "bg-[var(--fds-color-success)]",
  warning: "bg-[var(--fds-color-warning)]",
  danger: "bg-[var(--fds-color-danger)]"
};
function Progress({
  value,
  max = 100,
  size = "md",
  variant = "primary",
  showLabel = false,
  label,
  className
}) {
  const percentage = Math.min(Math.max(value / max * 100, 0), 100);
  return /* @__PURE__ */ React.createElement("div", { className: cn("w-full", className) }, (showLabel || label) && /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-1.5" }, label && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[var(--fds-color-text-secondary)]" }, label), showLabel && /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-[var(--fds-color-text-primary)] ml-auto" }, Math.round(percentage), "%")), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "w-full rounded-full bg-[var(--fds-color-bg-elevated)] overflow-hidden",
        sizeStyles4[size]
      ),
      role: "progressbar",
      "aria-valuenow": value,
      "aria-valuemin": 0,
      "aria-valuemax": max
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn("h-full rounded-full transition-all duration-500", variantStyles4[variant]),
        style: { width: `${percentage}%` }
      }
    )
  ));
}
function StepProgress({ current, total, className }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn("flex items-center gap-1.5", className) }, Array.from({ length: total }, (_, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      className: cn(
        "h-1 flex-1 rounded-full transition-all duration-300",
        i < current ? "bg-[var(--fds-color-primary)]" : "bg-[var(--fds-color-bg-elevated)]"
      )
    }
  )));
}

// components/fds/Radio.tsx
var import_react7 = require("react");
var Radio = (0, import_react7.forwardRef)(
  ({ label, description, disabled, className, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement("label", { className: cn("flex items-start gap-3 cursor-pointer", disabled && "opacity-40 cursor-not-allowed") }, /* @__PURE__ */ React.createElement("div", { className: "relative mt-0.5 shrink-0" }, /* @__PURE__ */ React.createElement("input", { ref, type: "radio", disabled, className: "sr-only peer", ...props }), /* @__PURE__ */ React.createElement("div", { className: cn(
      "w-5 h-5 rounded-full border-2 transition-all",
      "border-[var(--fds-color-border-strong)]",
      "peer-checked:border-[var(--fds-color-primary)]",
      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--fds-color-primary)] peer-focus-visible:ring-offset-2",
      className
    ) }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "w-2.5 h-2.5 rounded-full bg-[var(--fds-color-primary)] scale-0 peer-checked:scale-100 transition-transform" }))), (label || description) && /* @__PURE__ */ React.createElement("div", null, label && /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-[var(--fds-color-text-primary)]" }, label), description && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--fds-color-text-secondary)] mt-0.5" }, description)));
  }
);
Radio.displayName = "Radio";
function RadioGroup({ name, value: controlled, defaultValue, onChange, options, label, direction = "vertical" }) {
  const [internal, setInternal] = (0, import_react7.useState)(defaultValue ?? "");
  const value = controlled !== void 0 ? controlled : internal;
  const handleChange = (v) => {
    if (controlled === void 0) setInternal(v);
    onChange == null ? void 0 : onChange(v);
  };
  return /* @__PURE__ */ React.createElement("fieldset", null, label && /* @__PURE__ */ React.createElement("legend", { className: "text-sm font-medium text-[var(--fds-color-text-primary)] mb-3" }, label), /* @__PURE__ */ React.createElement("div", { className: cn("flex gap-3", direction === "vertical" ? "flex-col" : "flex-row flex-wrap") }, options.map((opt) => /* @__PURE__ */ React.createElement(
    Radio,
    {
      key: opt.value,
      name,
      value: opt.value,
      label: opt.label,
      description: opt.description,
      disabled: opt.disabled,
      checked: value === opt.value,
      onChange: () => handleChange(opt.value)
    }
  ))));
}

// components/fds/Select.tsx
var import_react8 = require("react");
function Select({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = "\uC120\uD0DD\uD558\uC138\uC694",
  label,
  helperText,
  errorText,
  disabled,
  className
}) {
  const uid = (0, import_react8.useId)();
  const labelId = `${uid}-label`;
  const listboxId = `${uid}-listbox`;
  const descId = `${uid}-desc`;
  const [open, setOpen] = (0, import_react8.useState)(false);
  const [internalValue, setInternalValue] = (0, import_react8.useState)(defaultValue ?? "");
  const [focusedIndex, setFocusedIndex] = (0, import_react8.useState)(-1);
  const ref = (0, import_react8.useRef)(null);
  const triggerRef = (0, import_react8.useRef)(null);
  const value = controlledValue !== void 0 ? controlledValue : internalValue;
  const selected = options.find((o) => o.value === value);
  const hasError = !!errorText;
  const hasDesc = !!(errorText || helperText);
  const enabledOptions = options.filter((o) => !o.disabled);
  (0, import_react8.useEffect)(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  (0, import_react8.useEffect)(() => {
    if (!open) setFocusedIndex(-1);
    else {
      const idx = options.findIndex((o) => o.value === value);
      setFocusedIndex(idx >= 0 ? idx : 0);
    }
  }, [open]);
  const handleSelect = (opt) => {
    var _a;
    if (opt.disabled) return;
    if (controlledValue === void 0) setInternalValue(opt.value);
    onChange == null ? void 0 : onChange(opt.value);
    setOpen(false);
    (_a = triggerRef.current) == null ? void 0 : _a.focus();
  };
  const handleKeyDown = (e) => {
    var _a;
    if (disabled) return;
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      (_a = triggerRef.current) == null ? void 0 : _a.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => {
        const next = i + 1;
        return next < options.length ? next : i;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => {
        const prev = i - 1;
        return prev >= 0 ? prev : 0;
      });
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0) handleSelect(options[focusedIndex]);
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusedIndex(options.length - 1);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { ref, className: cn("relative w-full", className) }, label && /* @__PURE__ */ React.createElement("label", { id: labelId, className: "block text-sm font-medium text-[var(--fds-color-text-primary)] mb-1.5" }, label), /* @__PURE__ */ React.createElement(
    "button",
    {
      ref: triggerRef,
      type: "button",
      disabled,
      onClick: () => setOpen((v) => !v),
      onKeyDown: handleKeyDown,
      className: cn(
        "w-full flex items-center justify-between px-3.5 py-2.5 rounded-[var(--fds-radius-lg)] border text-sm text-left transition-all",
        "bg-[var(--fds-color-bg-base)]",
        "focus:outline-none focus:ring-2 focus:ring-offset-0",
        hasError ? "border-[var(--fds-color-danger)] focus:ring-[var(--fds-color-danger)]" : open ? "border-[var(--fds-color-primary)] ring-2 ring-[var(--fds-color-primary)]" : "border-[var(--fds-color-border)]",
        disabled && "opacity-40 cursor-not-allowed"
      ),
      "aria-haspopup": "listbox",
      "aria-expanded": open,
      "aria-controls": listboxId,
      "aria-labelledby": label ? labelId : void 0,
      "aria-invalid": hasError || void 0,
      "aria-describedby": hasDesc ? descId : void 0
    },
    /* @__PURE__ */ React.createElement("span", { className: selected ? "text-[var(--fds-color-text-primary)]" : "text-[var(--fds-color-text-tertiary)]" }, selected ? selected.label : placeholder),
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        "aria-hidden": "true",
        className: cn("w-4 h-4 text-[var(--fds-color-text-tertiary)] transition-transform", open ? "rotate-180" : ""),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
      },
      /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 9l6 6 6-6" })
    )
  ), open && /* @__PURE__ */ React.createElement(
    "ul",
    {
      id: listboxId,
      role: "listbox",
      "aria-labelledby": label ? labelId : void 0,
      onKeyDown: handleKeyDown,
      className: "absolute z-[var(--fds-z-dropdown,100)] mt-1 w-full rounded-[var(--fds-radius-lg)] border border-[var(--fds-color-border)] bg-[var(--fds-color-bg-base)] shadow-[var(--fds-shadow-lg)] overflow-hidden py-1 max-h-56 overflow-y-auto"
    },
    options.map((opt, idx) => /* @__PURE__ */ React.createElement(
      "li",
      {
        key: opt.value,
        role: "option",
        "aria-selected": value === opt.value,
        "aria-disabled": opt.disabled,
        "data-focused": focusedIndex === idx ? "true" : void 0,
        onClick: () => handleSelect(opt),
        className: cn(
          "flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors",
          opt.disabled ? "opacity-40 cursor-not-allowed text-[var(--fds-color-text-tertiary)]" : focusedIndex === idx ? "bg-[var(--fds-color-bg-elevated)] text-[var(--fds-color-text-primary)]" : value === opt.value ? "text-[var(--fds-color-primary)] font-medium bg-[var(--fds-color-primary-subtle)]" : "text-[var(--fds-color-text-primary)] hover:bg-[var(--fds-color-bg-elevated)]"
        )
      },
      opt.label,
      value === opt.value && /* @__PURE__ */ React.createElement("svg", { "aria-hidden": "true", className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }))
    ))
  ), hasDesc && /* @__PURE__ */ React.createElement(
    "p",
    {
      id: descId,
      role: hasError ? "alert" : void 0,
      className: cn("text-sm mt-1.5", hasError ? "text-[var(--fds-color-danger)]" : "text-[var(--fds-color-text-secondary)]")
    },
    errorText || helperText
  ));
}

// components/fds/Skeleton.tsx
var roundedMap = {
  sm: "rounded-[var(--fds-radius-sm)]",
  md: "rounded-[var(--fds-radius-md)]",
  lg: "rounded-[var(--fds-radius-lg)]",
  full: "rounded-full"
};
function Skeleton({ className, rounded = "md" }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "aria-hidden": "true",
      className: cn(
        "animate-pulse bg-[var(--fds-color-gray-200)] dark:bg-[var(--fds-color-border)]",
        roundedMap[rounded],
        className
      )
    }
  );
}
function SkeletonText({ lines = 3, className }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-2", className) }, Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ React.createElement(
    Skeleton,
    {
      key: i,
      className: cn("h-4", i === lines - 1 ? "w-3/4" : "w-full"),
      rounded: "md"
    }
  )));
}
function SkeletonCard() {
  return /* @__PURE__ */ React.createElement("div", { className: "p-4 rounded-[var(--fds-radius-xl)] border border-[var(--fds-color-border)] space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "w-10 h-10", rounded: "full" }), /* @__PURE__ */ React.createElement("div", { className: "flex-1 space-y-2" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-3.5 w-1/3" }), /* @__PURE__ */ React.createElement(Skeleton, { className: "h-3 w-1/2" }))), /* @__PURE__ */ React.createElement(SkeletonText, { lines: 3 }));
}

// components/fds/Spinner.tsx
var sizeMap2 = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
var colorMap = {
  primary: "text-[var(--fds-color-primary)]",
  white: "text-white",
  current: "text-current"
};
function Spinner({ size = "md", variant = "primary", className }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: cn("animate-spin", sizeMap2[size], colorMap[variant], className),
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-label": "\uB85C\uB529 \uC911",
      role: "status"
    },
    /* @__PURE__ */ React.createElement(
      "circle",
      {
        className: "opacity-20",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "3"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        className: "opacity-80",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      }
    )
  );
}

// components/fds/Tabs.tsx
var import_react9 = require("react");
function Tabs({ items, value: controlled, defaultValue, onChange, variant = "line", children }) {
  var _a;
  const uid = (0, import_react9.useId)();
  const [internal, setInternal] = (0, import_react9.useState)(defaultValue ?? ((_a = items[0]) == null ? void 0 : _a.value) ?? "");
  const active = controlled !== void 0 ? controlled : internal;
  const tablistRef = (0, import_react9.useRef)(null);
  const getTabId = (value) => `${uid}-tab-${value}`;
  const getPanelId = (value) => `${uid}-panel-${value}`;
  const handleChange = (val) => {
    if (controlled === void 0) setInternal(val);
    onChange == null ? void 0 : onChange(val);
  };
  const handleKeyDown = (e, currentValue) => {
    var _a2, _b;
    const enabledItems = items.filter((i) => !i.disabled);
    const currentIdx = enabledItems.findIndex((i) => i.value === currentValue);
    let nextIdx = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIdx = (currentIdx + 1) % enabledItems.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIdx = (currentIdx - 1 + enabledItems.length) % enabledItems.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = enabledItems.length - 1;
    }
    if (nextIdx >= 0) {
      const nextItem = enabledItems[nextIdx];
      handleChange(nextItem.value);
      (_b = (_a2 = tablistRef.current) == null ? void 0 : _a2.querySelector(`[id="${getTabId(nextItem.value)}"]`)) == null ? void 0 : _b.focus();
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: tablistRef,
      role: "tablist",
      className: cn(
        "flex",
        variant === "line" ? "border-b border-[var(--fds-color-border)]" : "p-1 bg-[var(--fds-color-bg-elevated)] rounded-[var(--fds-radius-lg)] gap-1"
      )
    },
    items.map((item) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: item.value,
        id: getTabId(item.value),
        role: "tab",
        "aria-selected": active === item.value,
        "aria-controls": getPanelId(item.value),
        disabled: item.disabled,
        tabIndex: active === item.value ? 0 : -1,
        onClick: () => !item.disabled && handleChange(item.value),
        onKeyDown: (e) => handleKeyDown(e, item.value),
        className: cn(
          "relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-color-primary)]",
          item.disabled && "opacity-40 cursor-not-allowed",
          variant === "line" ? cn(
            "px-4 py-2.5",
            active === item.value ? "text-[var(--fds-color-primary)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--fds-color-primary)] after:rounded-t" : "text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)]"
          ) : cn(
            "px-4 py-1.5 rounded-[var(--fds-radius-md)] flex-1",
            active === item.value ? "bg-[var(--fds-color-bg-base)] text-[var(--fds-color-text-primary)] shadow-[var(--fds-shadow-sm)]" : "text-[var(--fds-color-text-secondary)] hover:text-[var(--fds-color-text-primary)]"
          )
        )
      },
      item.label
    ))
  ), children && items.map((item) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: item.value,
      id: getPanelId(item.value),
      role: "tabpanel",
      "aria-labelledby": getTabId(item.value),
      hidden: active !== item.value,
      className: "mt-4"
    },
    active === item.value && children(active)
  )));
}

// components/fds/Textarea.tsx
var import_react10 = require("react");
var Textarea = (0, import_react10.forwardRef)(
  ({ label, helperText, errorText, maxLength, showCount, resize = "vertical", className, onChange, value, defaultValue, id, ...props }, ref) => {
    const uid = (0, import_react10.useId)();
    const textareaId = id ?? uid;
    const descId = `${textareaId}-desc`;
    const [internal, setInternal] = (0, import_react10.useState)(String(defaultValue ?? ""));
    const controlled = value !== void 0;
    const current = controlled ? String(value) : internal;
    const hasError = !!errorText;
    const hasDesc = !!(errorText || helperText);
    const handleChange = (e) => {
      if (!controlled) setInternal(e.target.value);
      onChange == null ? void 0 : onChange(e);
    };
    const resizeClass = {
      none: "resize-none",
      vertical: "resize-y",
      auto: "resize-none"
    };
    return /* @__PURE__ */ React.createElement("div", { className: "w-full" }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: textareaId, className: "block text-sm font-medium text-[var(--fds-color-text-primary)] mb-1.5" }, label), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        ref,
        id: textareaId,
        value: controlled ? value : internal,
        onChange: handleChange,
        maxLength,
        rows: 4,
        "aria-invalid": hasError || void 0,
        "aria-describedby": hasDesc ? descId : void 0,
        className: cn(
          "w-full px-3.5 py-2.5 rounded-[var(--fds-radius-lg)] border text-sm",
          "bg-[var(--fds-color-bg-base)] text-[var(--fds-color-text-primary)]",
          "placeholder:text-[var(--fds-color-text-tertiary)]",
          "transition-all focus:outline-none focus:ring-2 focus:ring-offset-0",
          hasError ? "border-[var(--fds-color-danger)] focus:ring-[var(--fds-color-danger)]" : "border-[var(--fds-color-border)] focus:border-[var(--fds-color-primary)] focus:ring-[var(--fds-color-primary)]",
          props.disabled && "opacity-40 cursor-not-allowed bg-[var(--fds-color-bg-elevated)]",
          resizeClass[resize],
          className
        ),
        ...props
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mt-1.5" }, hasDesc && /* @__PURE__ */ React.createElement(
      "p",
      {
        id: descId,
        role: hasError ? "alert" : void 0,
        className: cn("text-sm", hasError ? "text-[var(--fds-color-danger)]" : "text-[var(--fds-color-text-secondary)]")
      },
      errorText || helperText
    ), showCount && maxLength && /* @__PURE__ */ React.createElement("span", { "aria-live": "polite", className: "text-xs text-[var(--fds-color-text-tertiary)] shrink-0 ml-auto" }, current.length, "/", maxLength)));
  }
);
Textarea.displayName = "Textarea";

// components/fds/Toast.tsx
var variantStyles5 = {
  default: "bg-[var(--fds-color-gray-900)] dark:bg-[var(--fds-color-gray-100)] text-white dark:text-[var(--fds-color-gray-900)]",
  success: "bg-[var(--fds-color-success)] text-white",
  danger: "bg-[var(--fds-color-danger)] text-white",
  warning: "bg-[var(--fds-color-warning)] text-white"
};
var Icon = ({ variant }) => {
  if (variant === "success") {
    return /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }));
  }
  if (variant === "danger") {
    return /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }));
  }
  if (variant === "warning") {
    return /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }));
  }
  return null;
};
function Toast({ message, description, variant = "default", action, onClose }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: cn(
        "flex items-start gap-3 px-4 py-3 rounded-[var(--fds-radius-xl)] shadow-[var(--fds-shadow-lg)]",
        "max-w-sm w-full",
        variantStyles5[variant]
      )
    },
    /* @__PURE__ */ React.createElement(Icon, { variant }),
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold leading-5" }, message), description && /* @__PURE__ */ React.createElement("p", { className: "text-sm opacity-80 mt-0.5" }, description)),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 shrink-0" }, action && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: action.onClick,
        className: "text-sm font-semibold opacity-90 hover:opacity-100 underline underline-offset-2"
      },
      action.label
    ), onClose && /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "opacity-70 hover:opacity-100", "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))))
  );
}

// components/fds/Toggle.tsx
var import_react11 = require("react");
var Toggle = (0, import_react11.forwardRef)(
  ({ label, description, size = "md", disabled, className, ...props }, ref) => {
    const trackSize = size === "sm" ? "w-8 h-4" : "w-11 h-6";
    const thumbSize = size === "sm" ? "w-3 h-3" : "w-5 h-5";
    const thumbTranslate = size === "sm" ? "peer-checked:translate-x-4" : "peer-checked:translate-x-5";
    return /* @__PURE__ */ React.createElement(
      "label",
      {
        className: cn(
          "flex items-center gap-3 cursor-pointer",
          disabled && "opacity-40 cursor-not-allowed"
        )
      },
      /* @__PURE__ */ React.createElement("div", { className: "relative shrink-0" }, /* @__PURE__ */ React.createElement(
        "input",
        {
          ref,
          type: "checkbox",
          role: "switch",
          disabled,
          className: "sr-only peer",
          ...props
        }
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: cn(
            "rounded-full transition-colors duration-200",
            "bg-[var(--fds-color-border-strong)] peer-checked:bg-[var(--fds-color-primary)]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--fds-color-primary)] peer-focus-visible:ring-offset-2",
            trackSize,
            className
          )
        }
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: cn(
            "absolute top-0.5 left-0.5 bg-white rounded-full shadow transition-transform duration-200",
            thumbSize,
            thumbTranslate
          )
        }
      )),
      (label || description) && /* @__PURE__ */ React.createElement("div", null, label && /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-[var(--fds-color-text-primary)]" }, label), description && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--fds-color-text-secondary)] mt-0.5" }, description))
    );
  }
);
Toggle.displayName = "Toggle";

// components/fds/Tooltip.tsx
var import_react12 = require("react");
function Tooltip({ content, children, placement = "top", delay = 0, className }) {
  const [visible, setVisible] = (0, import_react12.useState)(false);
  const timer = (0, import_react12.useRef)(null);
  const show = () => {
    timer.current = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
  };
  (0, import_react12.useEffect)(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);
  const placementStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  return /* @__PURE__ */ React.createElement("span", { className: "relative inline-flex", onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide }, children, visible && /* @__PURE__ */ React.createElement(
    "span",
    {
      role: "tooltip",
      className: cn(
        "absolute z-[var(--fds-z-tooltip,500)] whitespace-nowrap pointer-events-none",
        "px-2.5 py-1.5 rounded-[var(--fds-radius-md)]",
        "bg-[var(--fds-color-gray-800)] text-white text-xs font-medium",
        "shadow-[var(--fds-shadow-md)]",
        "animate-in fade-in duration-150",
        placementStyles[placement],
        className
      )
    },
    content
  ));
}

// components/fds/icons.tsx
function Icon2({ size = 24, children, "aria-label": ariaLabel, ...props }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-label": ariaLabel,
      "aria-hidden": ariaLabel ? void 0 : true,
      role: ariaLabel ? "img" : void 0,
      ...props
    },
    children
  );
}
function ChevronRightIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7" }));
}
function ChevronLeftIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M15 19l-7-7 7-7" }));
}
function ChevronDownIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M6 9l6 6 6-6" }));
}
function ChevronUpIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M18 15l-6-6-6 6" }));
}
function CloseIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M18 6L6 18M6 6l12 12" }));
}
function CheckIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M5 13l4 4L19 7" }));
}
function SearchIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "M21 21l-4.35-4.35" }));
}
function HomeIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }));
}
function UserIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" }));
}
function SettingsIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" }));
}
function BellIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" }), /* @__PURE__ */ React.createElement("path", { d: "M13.73 21a2 2 0 01-3.46 0" }));
}
function HeartIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" }));
}
function ShareIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "5", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "19", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" }));
}
function EditIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }), /* @__PURE__ */ React.createElement("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" }));
}
function TrashIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ React.createElement("path", { d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" }), /* @__PURE__ */ React.createElement("path", { d: "M10 11v6M14 11v6" }), /* @__PURE__ */ React.createElement("path", { d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" }));
}
function PlusIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }));
}
function MinusIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }));
}
function InfoIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 16v-4M12 8h.01" }));
}
function WarningIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v4M12 17h.01" }));
}
function ErrorIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M15 9l-6 6M9 9l6 6" }));
}
function CopyIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" }));
}
function DownloadIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" }));
}
function UploadIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 8 12 3 7 8" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "15" }));
}
function LinkIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ React.createElement("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" }));
}
function LockIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11V7a5 5 0 0110 0v4" }));
}
function UnlockIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11V7a5 5 0 019.9-1" }));
}
function EyeIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
}
function EyeOffIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" }), /* @__PURE__ */ React.createElement("path", { d: "M14.12 14.12a3 3 0 01-4.24-4.24" }), /* @__PURE__ */ React.createElement("line", { x1: "1", y1: "1", x2: "23", y2: "23" }));
}
function CalendarIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }));
}
function ClockIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("polyline", { points: "12 6 12 12 16 14" }));
}
function MailIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ React.createElement("polyline", { points: "22,6 12,13 2,6" }));
}
function PhoneIcon(props) {
  return /* @__PURE__ */ React.createElement(Icon2, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" }));
}
var iconComponents = {
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronDown: ChevronDownIcon,
  ChevronUp: ChevronUpIcon,
  Close: CloseIcon,
  Check: CheckIcon,
  Search: SearchIcon,
  Home: HomeIcon,
  User: UserIcon,
  Settings: SettingsIcon,
  Bell: BellIcon,
  Heart: HeartIcon,
  Share: ShareIcon,
  Edit: EditIcon,
  Trash: TrashIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  Info: InfoIcon,
  Warning: WarningIcon,
  Error: ErrorIcon,
  Copy: CopyIcon,
  Download: DownloadIcon,
  Upload: UploadIcon,
  Link: LinkIcon,
  Lock: LockIcon,
  Unlock: UnlockIcon,
  Eye: EyeIcon,
  EyeOff: EyeOffIcon,
  Calendar: CalendarIcon,
  Clock: ClockIcon,
  Mail: MailIcon,
  Phone: PhoneIcon
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Avatar,
  AvatarGroup,
  Badge,
  BellIcon,
  BottomSheet,
  Button,
  CalendarIcon,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CheckIcon,
  Checkbox,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Chip,
  ChipGroup,
  ClockIcon,
  CloseIcon,
  CopyIcon,
  Divider,
  DownloadIcon,
  EditIcon,
  ErrorIcon,
  EyeIcon,
  EyeOffIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  Input,
  LinkIcon,
  LockIcon,
  MailIcon,
  MinusIcon,
  Modal,
  PhoneIcon,
  PlusIcon,
  Progress,
  Radio,
  RadioGroup,
  SearchIcon,
  Select,
  SettingsIcon,
  ShareIcon,
  Skeleton,
  SkeletonCard,
  SkeletonText,
  Spinner,
  StepProgress,
  Tabs,
  Textarea,
  Toast,
  Toggle,
  Tooltip,
  TrashIcon,
  UnlockIcon,
  UploadIcon,
  UserIcon,
  WarningIcon,
  iconComponents
});
//# sourceMappingURL=index.js.map