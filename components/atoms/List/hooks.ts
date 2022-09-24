import type { DataType, KeyType } from './types';

interface GetKeyProperty<T> {
    key: KeyType<T> | undefined;
    value: DataType<T> | undefined;
    index: number;
}
type GetKeyResult = string | number;

export function getKeyProperty<T>({
    key,
    value,
    index,
}: GetKeyProperty<T>): GetKeyResult {
    if (!key) return index;

    if (typeof key === 'string') return (value as Record<any, any>)[key];

    if (key instanceof Array) return key[index];

    if (typeof key === 'function' && 'call' in key) {
        return key.call({}, value as any, index as number);
    }

    return index;
}
