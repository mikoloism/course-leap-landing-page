import type { GapTypes } from '../types';

type CreateClassNameType<T extends 'x' | 'y'> = `gap-${T}-${GapTypes.Size}`;

export namespace Gap {
    export namespace X {
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

    export namespace Y {
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

        export function getClassName(
            gapy: Size | undefined
        ): ClassName | undefined {
            return gapy && CLASSNAMES[gapy];
        }
    }

    export type Size = GapTypes.Size;

    type GapSizeArg = GapTypes.Props;

    export function getClassName({ gapx, gapy }: GapSizeArg): string {
        let className = '';

        if (gapx) className += `${X.getClassName(gapx)}`;

        if (gapy) className += `${Y.getClassName(gapy)}`;

        return className;
    }
}
