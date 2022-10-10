import type { Direction, Display } from '../types';

type CreateClassNameType<T extends 'col' | 'row'> =
    | `flex-${T}`
    | `flex-${T}-reverse`;

export namespace FlexDirection {
    export namespace Row {
        export type Keys = Direction.RowKeys;

        export type KeysWithReverse = Direction.RowReverseKeys;

        export type KeysWithoutReverse = Direction.RowWithoutReverseKeys;

        export type ClassName = CreateClassNameType<'row'>;

        export const KEYS: Array<KeysWithoutReverse> = [
            'hor',
            'horizontal',
            'row',
        ];

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

        export function isNoReverse(
            value: string
        ): value is KeysWithoutReverse {
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

    export namespace Column {
        export type Keys = Direction.ColumnKeys;

        export type KeysWithReverse = Direction.ColumnReverseKeys;

        export type KeysWithoutReverse = Direction.ColumnWithoutReverseKeys;

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

        export function isNoReverse(
            value: string
        ): value is KeysWithoutReverse {
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

    export type Keys = Direction.Keys;

    export type ClassName = Row.ClassName | Column.ClassName;

    export const DEFAULT_KEY: Keys = 'col';

    export const DEFAULT_CLASSNAME: ClassName = 'flex-row';

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

export namespace Flex {
    export const Direction = FlexDirection;

    export type Keys = Display.Flex.Keys;

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
}
