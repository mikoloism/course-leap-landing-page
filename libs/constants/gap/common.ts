import { GapX } from './gap-x';
import { GapY } from './gap-y';

export module Gap {
    export type NumericSize = GapNumericSize;

    export type XPropsType = X.Props;

    export type YPropsType = Y.Props;

    export type Props = XPropsType & YPropsType;

    type GapSizeArg = Props;

    export function getClassName({ gapx, gapy }: GapSizeArg): string {
        let className = '';

        if (gapx) className += `${X.getClassName(gapx)}`;

        if (gapy) className += `${Y.getClassName(gapy)}`;

        return className;
    }

    export import X = GapX;
    export import Y = GapY;
}

export type CreateClassNameType<T extends 'x' | 'y'> = `gap-${T}-${GapSize}`;

export type GapNumericSize =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 12
    | 14
    | 16
    | 20
    | 32;
export type GapStringSize = `${GapNumericSize}`;

export type GapSize = GapNumericSize | GapStringSize;
