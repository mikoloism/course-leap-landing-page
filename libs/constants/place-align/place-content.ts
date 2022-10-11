import { CommonKeys, CreateClassNameType } from './common';

export module PlaceContent {
    export type KeysWithoutCommon = 'between' | 'around' | 'evenly';

    export type Keys = CommonKeys | KeysWithoutCommon;

    export type PropsWithoutCommon = { placeCommon?: KeysWithoutCommon };

    export type Props = { placeContent?: Keys };
}

export module PlaceContent {
    export type ClassName = CreateClassNameType<'content', Keys>;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        center: 'place-content-center',
        start: 'place-content-start',
        end: 'place-content-end',
        between: 'place-content-between',
        around: 'place-content-around',
        evenly: 'place-content-evenly',
    };

    export const DEFAULT_KEY: Keys = 'start';

    export function getClassName(
        key: Keys | undefined,
        defaultKey: Keys = DEFAULT_KEY
    ): ClassName {
        return CLASSNAMES[key || defaultKey];
    }
}
