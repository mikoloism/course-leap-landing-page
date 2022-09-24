import type {
    FontWeightType,
    HeadingElementSize,
    TextAlignType,
    TextElementSize,
    TextElementType,
} from '@/atoms/Text/types';
import type { ColorType } from '../types';

type TailwindSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type TextSizeKey =
    | HeadingElementSize
    | TextElementSize
    | TextElementType
    | TailwindSize;

type ValidTextSize = `text-${Exclude<TextSizeKey, TextElementType>}`;
export const TEXT_SIZE: Record<TextSizeKey, ValidTextSize> = {
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
export function getTextSize(size: TextSizeKey | undefined): ValidTextSize {
    return TEXT_SIZE[size ?? 'standard'];
}

type ValidColorType = `text-${ColorType}`;
export const TEXT_COLOR: Record<ColorType, ValidColorType> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    gray: 'text-gray',
    white: 'text-white',
    black: 'text-black',
} as const;
export function getTextColor(color: ColorType | undefined): ValidColorType {
    return TEXT_COLOR[color ?? 'gray'];
}

type ValidAlignType = `text-${TextAlignType}`;
export const TEXT_ALIGN: Record<TextAlignType, ValidAlignType> = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
    justify: 'text-justify',
} as const;
export function getTextAlign(align: TextAlignType | undefined): ValidAlignType {
    return TEXT_ALIGN[align ?? 'justify'];
}

type ValidFontWeight = `font-${FontWeightType}`;
export const TEXT_WEIGHT: Record<FontWeightType, ValidFontWeight> = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
};
export function getFontWeight(
    fontWeight: FontWeightType | undefined
): ValidFontWeight | '' {
    return fontWeight ? TEXT_WEIGHT[fontWeight] : '';
}
