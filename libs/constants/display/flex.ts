import type { Common } from '../common';
import type { Direction as _Direction } from '../direction';

type CreateClassNameType<T extends 'col' | 'row'> =
    | `flex-${T}`
    | `flex-${T}-reverse`;

module FlexNoWrap {
    const FLEX_NO_WRAP = '' as const;
    const FLEX_WRAP = 'flex-wrap' as const;

    type GetNoWrapReturn = typeof FLEX_WRAP | typeof FLEX_NO_WRAP;

    export function getClassName(nowrap: boolean = false): GetNoWrapReturn {
        return !!nowrap ? FLEX_NO_WRAP : FLEX_WRAP;
    }
}
export module FlexDirectionRow {
    export type Keys = _Direction.RowKeys;

    export type KeysWithReverse = _Direction.RowReverseKeys;

    export type KeysWithoutReverse = _Direction.RowWithoutReverseKeys;

    export type ClassName = CreateClassNameType<'row'>;

    export const KEYS: Array<KeysWithoutReverse> = ['hor', 'horizontal', 'row'];

    export const KEYS_REVERSE: Array<KeysWithReverse> = [
        'rev-hor',
        'reverse-hor',
        'rev-horizontal',
        'reverse-horizontal',
        'rev-row',
        'reverse-row',
    ];

    export function isRow(value: string): value is Keys {
        return isReverse(value) || isNoReverse(value);
    }

    export function isReverse(value: string): value is KeysWithReverse {
        return KEYS_REVERSE.indexOf(value as KeysWithReverse) >= 0;
    }

    export function isNoReverse(value: string): value is KeysWithoutReverse {
        return KEYS.indexOf(value as KeysWithoutReverse) >= 0;
    }

    export function getClassName(direction: Keys): ClassName {
        return isNoReverse(direction)
            ? 'flex-row'
            : isReverse(direction)
            ? 'flex-row-reverse'
            : 'flex-row';
    }
}

export module FlexDirectionColumn {
    export type Keys = _Direction.ColumnKeys;

    export type KeysWithReverse = _Direction.ColumnReverseKeys;

    export type KeysWithoutReverse = _Direction.ColumnWithoutReverseKeys;

    export type ClassName = CreateClassNameType<'col'>;

    export const KEYS: Array<KeysWithoutReverse> = [
        'col',
        'column',
        'vert',
        'vertical',
    ];

    export const KEYS_REVERSE: Array<KeysWithReverse> = [
        'rev-col',
        'reverse-col',
        'rev-column',
        'reverse-column',
        'rev-vert',
        'reverse-vert',
        'rev-vertical',
        'reverse-vertical',
    ];

    export function isColumn(value: string): value is Keys {
        return isReverse(value) || isNoReverse(value);
    }

    export function isReverse(value: string): value is KeysWithReverse {
        return KEYS_REVERSE.indexOf(value as KeysWithReverse) >= 0;
    }

    export function isNoReverse(value: string): value is KeysWithoutReverse {
        return KEYS.indexOf(value as KeysWithoutReverse) >= 0;
    }

    export function getClassName(direction: Keys): ClassName {
        return isNoReverse(direction)
            ? 'flex-col'
            : isReverse(direction)
            ? 'flex-col-reverse'
            : 'flex-col';
    }
}

export module FlexDirection {
    export import Row = FlexDirectionRow;
    export import Column = FlexDirectionColumn;

    export type Keys = _Direction.Keys;

    export type ClassName = Row.ClassName | Column.ClassName;

    export const DEFAULT_KEY: Keys = 'col';

    export const DEFAULT_CLASSNAME: ClassName = 'flex-col';

    export function isDirection(value: string | undefined): value is Keys {
        return (
            Row.isRow(value as Row.Keys) ||
            Column.isColumn(value as Column.Keys)
        );
    }

    export function getClassName(direction: Keys = DEFAULT_KEY): ClassName {
        if (Row.isRow(direction)) return Row.getClassName(direction);
        if (Column.isColumn(direction)) return Column.getClassName(direction);
        return DEFAULT_CLASSNAME;
    }
}

export module Flex {
    export type Keys = 'flex' | 'in-flex' | 'inline-flex';

    export type NowrapProps = { nowrap?: boolean };

    export type TypeProps = { type?: Keys };

    export type Props = TypeProps & NowrapProps & _Direction.Props;

    export type LongProps = TypeProps & NowrapProps & _Direction.LongProps;

    export type PropsWithCommon = Common.Props & Props;

    export type LongPropsWithCommon = PropsWithCommon & LongProps;
}

export module Flex {
    export import Direction = FlexDirection;

    export type ClassName = Omit<Keys, 'in-flex'>;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const KEYS: Array<Keys> = ['flex', 'in-flex', 'inline-flex'];

    export const CLASSNAMES: ConstantRecord = {
        flex: 'flex',
        'in-flex': 'inline-flex',
        'inline-flex': 'inline-flex',
    };

    export const DEFAULT_KEY: Keys = 'flex';

    export function isDisplayFlex(value: string | undefined): value is Keys {
        return KEYS.indexOf(value as Keys) >= 0;
    }

    export function getClassName(display: Keys = DEFAULT_KEY): ClassName {
        return CLASSNAMES[display];
    }

    export const getDirectionClassName = FlexDirection.getClassName;

    export const getNoWrapClassName = FlexNoWrap.getClassName;
}
