import * as Direction from '../../direction/direction';
import { CreateClassNameType } from './common';

export type Keys = Direction.RowKeys;

export type KeysWithReverse = Direction.RowReverseKeys;

export type KeysWithoutReverse = Direction.RowWithoutReverseKeys;

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
        ? 'flex-row'
        : isReverse(direction)
        ? 'flex-row-reverse'
        : 'flex-row';
}
