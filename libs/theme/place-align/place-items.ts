import type { CommonKeys, CreateClassNameType } from './common';

export type KeysWithoutCommon = 'baseline';

export type Keys = CommonKeys | KeysWithoutCommon;

export type PropsWithoutCommon = { placeItems?: KeysWithoutCommon };

export type Props = { placeItems?: Keys };

export type ClassName = CreateClassNameType<'items', Keys>;

export type ConstantRecord = Record<Keys, ClassName>;

export const CLASSNAMES: ConstantRecord = {
    center: 'place-items-center',
    start: 'place-items-start',
    end: 'place-items-end',
    baseline: 'place-items-baseline',
};

export const DEFAULT_KEY: Keys = 'start';

export function getClassName(
    key: Keys | undefined,
    defaultKey: Keys = DEFAULT_KEY
): ClassName {
    return CLASSNAMES[key || defaultKey];
}
