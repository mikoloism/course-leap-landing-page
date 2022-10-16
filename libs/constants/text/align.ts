import type { CreateTextClassName } from './common';

export type Keys = 'center' | 'right' | 'left' | 'justify';

export type Props = { align?: Keys };

export type ClassName = CreateTextClassName<Keys>;

export type ConstantRecord = Record<Keys, ClassName>;

export const DEFAULT_KEY: Keys = 'justify';

export const CLASSNAMES: ConstantRecord = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
    justify: 'text-justify',
} as const;

export function getClassName(align: Keys | undefined): ClassName {
    return CLASSNAMES[align ?? DEFAULT_KEY];
}
