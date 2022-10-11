import type { CommonKeys } from './common';

export module PlaceItems {
    export type KeysWithoutCommon = 'baseline';

    export type Keys = CommonKeys | KeysWithoutCommon;

    export type PropsWithoutCommon = { placeItems?: KeysWithoutCommon };

    export type Props = { placeItems?: Keys };
}

export module PlaceItems {
    type CreateClassNameType<T extends string> = `place-items-${T}`;

    export type ClassName = CreateClassNameType<Keys>;

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
}
