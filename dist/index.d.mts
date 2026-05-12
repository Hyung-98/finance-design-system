import * as react from 'react';
import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SVGProps } from 'react';

interface AccordionItem {
    value: string;
    trigger: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
interface AccordionProps {
    items: AccordionItem[];
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    className?: string;
}
declare function Accordion({ items, type, defaultValue, className }: AccordionProps): react.JSX.Element;

interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
    className?: string;
}
declare function Avatar({ src, alt, name, size, shape, className }: AvatarProps): react.JSX.Element;
interface AvatarGroupProps {
    avatars: AvatarProps[];
    max?: number;
    size?: AvatarProps['size'];
}
declare function AvatarGroup({ avatars, max, size }: AvatarGroupProps): react.JSX.Element;

interface BadgeProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline';
    size?: 'sm' | 'md';
    children: React.ReactNode;
    className?: string;
}
declare function Badge({ variant, size, children, className }: BadgeProps): react.JSX.Element;

interface BottomSheetProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    snapPoints?: ('full' | 'half' | 'auto');
}
declare function BottomSheet({ open, onClose, title, description, children, footer }: BottomSheetProps): react.JSX.Element | null;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    fullWidth?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'elevated' | 'outline';
    padding?: 'sm' | 'md' | 'lg' | 'none';
    interactive?: boolean;
    className?: string;
    onClick?: () => void;
}
declare function Card({ children, variant, padding, interactive, className, onClick }: CardProps): react.JSX.Element;
declare function CardHeader({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react.JSX.Element;
declare function CardTitle({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react.JSX.Element;
declare function CardDescription({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react.JSX.Element;
declare function CardFooter({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react.JSX.Element;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
    indeterminate?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface ChipProps {
    children: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    onRemove?: () => void;
    variant?: 'filter' | 'tag';
    size?: 'sm' | 'md';
    className?: string;
}
declare function Chip({ children, selected, disabled, onClick, onRemove, variant, size, className, }: ChipProps): react.JSX.Element;
interface ChipGroupProps {
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    value?: string[];
    onChange?: (value: string[]) => void;
    multiple?: boolean;
    size?: ChipProps['size'];
    className?: string;
}
declare function ChipGroup({ options, value, onChange, multiple, size, className }: ChipGroupProps): react.JSX.Element;

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    label?: string;
    className?: string;
}
declare function Divider({ orientation, variant, spacing, label, className, }: DividerProps): react.JSX.Element;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
    label?: string;
    helperText?: string;
    errorText?: string;
    status?: 'default' | 'error' | 'success';
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
}
declare function Modal({ open, onClose, title, description, children, footer, size }: ModalProps): react.JSX.Element | null;

interface ProgressProps {
    value: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'success' | 'warning' | 'danger';
    showLabel?: boolean;
    label?: string;
    className?: string;
}
declare function Progress({ value, max, size, variant, showLabel, label, className, }: ProgressProps): react.JSX.Element;
interface StepProgressProps {
    current: number;
    total: number;
    className?: string;
}
declare function StepProgress({ current, total, className }: StepProgressProps): react.JSX.Element;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;
interface RadioGroupProps {
    name: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    options: {
        value: string;
        label: string;
        description?: string;
        disabled?: boolean;
    }[];
    label?: string;
    direction?: 'vertical' | 'horizontal';
}
declare function RadioGroup({ name, value: controlled, defaultValue, onChange, options, label, direction }: RadioGroupProps): react.JSX.Element;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    helperText?: string;
    errorText?: string;
    disabled?: boolean;
    className?: string;
}
declare function Select({ options, value: controlledValue, defaultValue, onChange, placeholder, label, helperText, errorText, disabled, className, }: SelectProps): react.JSX.Element;

interface SkeletonProps {
    className?: string;
    rounded?: 'sm' | 'md' | 'lg' | 'full';
}
declare function Skeleton({ className, rounded }: SkeletonProps): react.JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): react.JSX.Element;
declare function SkeletonCard(): react.JSX.Element;

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'white' | 'current';
    className?: string;
}
declare function Spinner({ size, variant, className }: SpinnerProps): react.JSX.Element;

interface TabItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface TabsProps {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    variant?: 'line' | 'pill';
    children?: (activeValue: string) => React.ReactNode;
}
declare function Tabs({ items, value: controlled, defaultValue, onChange, variant, children }: TabsProps): react.JSX.Element;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    errorText?: string;
    maxLength?: number;
    showCount?: boolean;
    resize?: 'none' | 'vertical' | 'auto';
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface ToastProps {
    message: string;
    description?: string;
    variant?: 'default' | 'success' | 'danger' | 'warning';
    action?: {
        label: string;
        onClick: () => void;
    };
    onClose?: () => void;
}
declare function Toast({ message, description, variant, action, onClose }: ToastProps): react.JSX.Element;

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    description?: string;
    size?: 'sm' | 'md';
}
declare const Toggle: react.ForwardRefExoticComponent<ToggleProps & react.RefAttributes<HTMLInputElement>>;

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
}
declare function Tooltip({ content, children, placement, delay, className }: TooltipProps): react.JSX.Element;

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
    /** 스크린리더용 레이블. 미설정 시 장식 아이콘으로 처리됩니다. */
    'aria-label'?: string;
};
declare function ChevronRightIcon(props: IconProps): react.JSX.Element;
declare function ChevronLeftIcon(props: IconProps): react.JSX.Element;
declare function ChevronDownIcon(props: IconProps): react.JSX.Element;
declare function ChevronUpIcon(props: IconProps): react.JSX.Element;
declare function CloseIcon(props: IconProps): react.JSX.Element;
declare function CheckIcon(props: IconProps): react.JSX.Element;
declare function SearchIcon(props: IconProps): react.JSX.Element;
declare function HomeIcon(props: IconProps): react.JSX.Element;
declare function UserIcon(props: IconProps): react.JSX.Element;
declare function SettingsIcon(props: IconProps): react.JSX.Element;
declare function BellIcon(props: IconProps): react.JSX.Element;
declare function HeartIcon(props: IconProps): react.JSX.Element;
declare function ShareIcon(props: IconProps): react.JSX.Element;
declare function EditIcon(props: IconProps): react.JSX.Element;
declare function TrashIcon(props: IconProps): react.JSX.Element;
declare function PlusIcon(props: IconProps): react.JSX.Element;
declare function MinusIcon(props: IconProps): react.JSX.Element;
declare function InfoIcon(props: IconProps): react.JSX.Element;
declare function WarningIcon(props: IconProps): react.JSX.Element;
declare function ErrorIcon(props: IconProps): react.JSX.Element;
declare function CopyIcon(props: IconProps): react.JSX.Element;
declare function DownloadIcon(props: IconProps): react.JSX.Element;
declare function UploadIcon(props: IconProps): react.JSX.Element;
declare function LinkIcon(props: IconProps): react.JSX.Element;
declare function LockIcon(props: IconProps): react.JSX.Element;
declare function UnlockIcon(props: IconProps): react.JSX.Element;
declare function EyeIcon(props: IconProps): react.JSX.Element;
declare function EyeOffIcon(props: IconProps): react.JSX.Element;
declare function CalendarIcon(props: IconProps): react.JSX.Element;
declare function ClockIcon(props: IconProps): react.JSX.Element;
declare function MailIcon(props: IconProps): react.JSX.Element;
declare function PhoneIcon(props: IconProps): react.JSX.Element;
declare const iconComponents: Record<string, React.ComponentType<IconProps>>;

export { Accordion, type AccordionItem, type AccordionProps, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Badge, type BadgeProps, BellIcon, BottomSheet, type BottomSheetProps, Button, type ButtonProps, CalendarIcon, Card, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, CheckIcon, Checkbox, type CheckboxProps, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, Chip, ChipGroup, type ChipGroupProps, type ChipProps, ClockIcon, CloseIcon, CopyIcon, Divider, type DividerProps, DownloadIcon, EditIcon, ErrorIcon, EyeIcon, EyeOffIcon, HeartIcon, HomeIcon, type IconProps, InfoIcon, Input, type InputProps, LinkIcon, LockIcon, MailIcon, MinusIcon, Modal, type ModalProps, PhoneIcon, PlusIcon, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, SearchIcon, Select, type SelectOption, type SelectProps, SettingsIcon, ShareIcon, Skeleton, SkeletonCard, type SkeletonProps, SkeletonText, Spinner, type SpinnerProps, StepProgress, type StepProgressProps, type TabItem, Tabs, type TabsProps, Textarea, type TextareaProps, Toast, type ToastProps, Toggle, type ToggleProps, Tooltip, type TooltipProps, TrashIcon, UnlockIcon, UploadIcon, UserIcon, WarningIcon, iconComponents };
