import type { Position as PositionType } from '../types';

export namespace Position {
    export type Keys = PositionType.Keys;

    export type ClassName = PositionType.LongKeys;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        absolute: 'absolute',
        fixed: 'fixed',
        relative: 'relative',
        sticky: 'sticky',
        abs: 'absolute',
        fix: 'fixed',
        rel: 'relative',
        stk: 'sticky',
    };

    export function getClassName(
        position: Keys | undefined
    ): ClassName | undefined {
        return position && CLASSNAMES[position];
    }
}
