import * as X from './gap-x';
import * as Y from './gap-y';

export type { GapNumericSize as NumericSize } from './common';

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
