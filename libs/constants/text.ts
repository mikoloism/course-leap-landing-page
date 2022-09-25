import type {
    FontWeightType,
    TextAlignType,
    TextElementType,
    TextSize,
} from '@/atoms/Text/types';
import type { ColorType } from '../types';

type TextClassName<T extends string> = `text-${T}`;
type TextSizeKey = TextSize | TextElementType;

type FontWeightClassName = `font-${FontWeightType}`;
type TextSizeClassName = TextClassName<TextSize>;
type TextColorClassName = TextClassName<ColorType>;
type TextAlignClassName = TextClassName<TextAlignType>;

export const TEXT_WEIGHT: Record<FontWeightType, FontWeightClassName> = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
};

export const TEXT_SIZE: Record<TextSizeKey, TextSizeClassName> = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6',
    standard: 'text-standard',
    paragraph: 'text-paragraph',
    link: 'text-link',
    btn: 'text-btn',
    subtitle: 'text-subtitle',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    span: 'text-standard',
    strong: 'text-standard',
    em: 'text-standard',
    p: 'text-paragraph',
} as const;

export const TEXT_COLOR: Record<ColorType, TextColorClassName> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    gray: 'text-gray',
    white: 'text-white',
    black: 'text-black',
} as const;

export const TEXT_ALIGN: Record<TextAlignType, TextAlignClassName> = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
    justify: 'text-justify',
} as const;

export function getFontWeight(
    fontWeight: FontWeightType | undefined
): FontWeightClassName | undefined {
    return fontWeight && TEXT_WEIGHT[fontWeight];
}

export function getTextSize(size: TextSizeKey | undefined): TextSizeClassName {
    return TEXT_SIZE[size ?? 'standard'];
}

export function getTextColor(color: ColorType | undefined): TextColorClassName {
    return TEXT_COLOR[color ?? 'gray'];
}

export function getTextAlign(
    align: TextAlignType | undefined
): TextAlignClassName {
    return TEXT_ALIGN[align ?? 'justify'];
}
