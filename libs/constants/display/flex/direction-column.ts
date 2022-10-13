import type { Column } from '../../direction';
import type { CreateClassNameType } from './common';

export type Keys = Column.Keys;

type KeysWithReverse = Column.ReverseKeys;

type KeysWithoutReverse = Column.ColumnKeys;

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

export function isValidKey(value: string): value is Keys {
    return isReverseKey(value) || isNoReverseKey(value);
}

export function isReverseKey(value: string): value is KeysWithReverse {
    if (value == undefined) return false;

    return KEYS_REVERSE.includes(value as KeysWithReverse);
}

export function isNoReverseKey(value: string): value is KeysWithoutReverse {
    if (value == undefined) return false;

    return KEYS.includes(value as KeysWithoutReverse);
}

export function createClassName(direction: Keys): ClassName {
    return isNoReverseKey(direction)
        ? 'flex-col'
        : isReverseKey(direction)
        ? 'flex-col-reverse'
        : 'flex-col';
}
