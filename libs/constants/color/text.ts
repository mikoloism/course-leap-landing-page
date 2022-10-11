import { ColorNames } from './common';

export module TextColor {
    export type Keys = ColorNames;

    export type Props = { color?: Keys };
}

export module TextColor {
    export type ClassName = `text-${Keys}`;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const DEFAULT_KEY: Keys = 'gray';

    export const CLASSNAMES: ConstantRecord = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        gray: 'text-gray',
        white: 'text-white',
        black: 'text-black',
    } as const;

    export function getClassName(color: Keys | undefined): ClassName {
        return CLASSNAMES[color ?? DEFAULT_KEY];
    }
}
