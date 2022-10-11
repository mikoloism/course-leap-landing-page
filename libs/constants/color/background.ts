import { ColorNames } from './common';

export module BackgroundColor {
    export type Keys = ColorNames;

    export type ClassName = `bg-${Keys}`;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        accent: 'bg-accent',
        black: 'bg-black',
        gray: 'bg-gray',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        white: 'bg-white',
    } as const;

    export const DEFAULT_KEY: Keys = 'white';

    export function getClassName(background: Keys = DEFAULT_KEY): ClassName {
        return CLASSNAMES[background];
    }
}
