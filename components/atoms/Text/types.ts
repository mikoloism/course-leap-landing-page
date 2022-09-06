import { BaseProps } from '@/libs/common';

export interface TextBaseProps extends BaseProps {}

export enum TextType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    Paragraph = 'paragraph',
    Small = 'small',
}

export type BaseTextType = TextType | `${TextType}`;

export interface TextProps extends BaseProps {
    type: BaseTextType;
    [key: string]: any;
}
