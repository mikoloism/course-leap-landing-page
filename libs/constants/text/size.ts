import type { CreateTextClassName } from './common';
import { TextElement as Element } from './element';

export module TextSize {
    export type TailwindKeys = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    export type HeadingKeys = Element.HeadingKeys;
    export type TextKeys =
        | 'standard'
        | 'subtitle'
        | 'paragraph'
        | 'link'
        | 'btn';

    export type Keys = TailwindKeys | HeadingKeys | TextKeys;

    export type Props = { size?: Keys };
}

export module TextSize {
    export type ClassName = CreateTextClassName<Keys>;

    export type ConstantRecord = Record<
        TextSize.Keys | Element.Keys,
        ClassName
    >;

    export const DEFAULT_KEY: Keys = 'standard';

    export const CLASSNAMES: ConstantRecord = {
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

    export function getClassName(size: Keys | undefined): ClassName {
        return CLASSNAMES[size ?? DEFAULT_KEY];
    }
}
