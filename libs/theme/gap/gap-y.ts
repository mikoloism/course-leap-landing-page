import type { GapSize, CreateClassNameType } from './common';

export type Size = GapSize;

export type Props = { gapy?: Size };

export type ClassName = CreateClassNameType<'y'>;

export type ConstantRecord = Record<Size, ClassName>;

export const CLASSNAMES: ConstantRecord = {
    1: 'gap-y-1',
    2: 'gap-y-2',
    3: 'gap-y-3',
    4: 'gap-y-4',
    5: 'gap-y-5',
    6: 'gap-y-6',
    7: 'gap-y-7',
    8: 'gap-y-8',
    9: 'gap-y-9',
    10: 'gap-y-10',
    12: 'gap-y-12',
    14: 'gap-y-14',
    16: 'gap-y-16',
    20: 'gap-y-20',
    32: 'gap-y-32',
} as const;

export function getClassName(gapy: Size | undefined): ClassName | undefined {
    return gapy && CLASSNAMES[gapy];
}
