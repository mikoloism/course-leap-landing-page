export type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingElementSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextElementType = 'span' | 'strong' | 'em' | 'p';
export type TextElementSize =
    | 'standard'
    | 'subtitle'
    | 'paragraph'
    | 'link'
    | 'btn';

export type AsPropsType = HeadingElementType | TextElementType;
export interface AsProps {
    as?: AsPropsType;
}

export type TextSizeType =
    | HeadingElementSize
    | TextElementSize
    | 'link'
    | 'btn';
export interface TextSizeProps {
    size?: TextSizeType;
}

export type ColorType =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';
export interface ColorProps {
    color?: ColorType;
}

export type FontWeightType =
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
export type FontNameType = string;
export interface FontProps {
    font?: FontNameType;
    weight?: FontWeightType;
}

export type TextAlignType = 'center' | 'left' | 'right' | 'justify';
export interface TextAlignProps {
    align?: TextAlignType;
}
