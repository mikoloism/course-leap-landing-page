import { CreateClassNameType, GapSize } from './common';

export module GapX {
    export type Size = GapSize;

    export type Props = { gapx?: Size };
}

export module GapX {
    export type ClassName = CreateClassNameType<'x'>;

    export type ConstantRecord = Record<Size, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        1: 'gap-x-1',
        2: 'gap-x-2',
        3: 'gap-x-3',
        4: 'gap-x-4',
        5: 'gap-x-5',
        6: 'gap-x-6',
        7: 'gap-x-7',
        8: 'gap-x-8',
        9: 'gap-x-9',
        10: 'gap-x-10',
        12: 'gap-x-12',
        14: 'gap-x-14',
        16: 'gap-x-16',
        20: 'gap-x-20',
        32: 'gap-x-32',
    } as const;

    export function getClassName(
        gapx: Size | undefined
    ): ClassName | undefined {
        return gapx && CLASSNAMES[gapx];
    }
}
