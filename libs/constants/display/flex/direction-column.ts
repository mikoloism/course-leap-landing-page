import * as Direction from '../../direction';
import { CreateClassNameType } from './common';

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

export function isValidKey(value: string): value is Keys {
    return isReverse(value) || isNoReverse(value);
}

export function isReverse(value: string): value is KeysWithReverse {
    return KEYS_REVERSE.indexOf(value as KeysWithReverse) >= 0;
}

export function isNoReverse(value: string): value is KeysWithoutReverse {
    return KEYS.indexOf(value as KeysWithoutReverse) >= 0;
}

export function createClassName(direction: Keys): ClassName {
    return isNoReverse(direction)
        ? 'flex-col'
        : isReverse(direction)
        ? 'flex-col-reverse'
        : 'flex-col';
}
