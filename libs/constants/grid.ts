import type { Display } from '../types';

export namespace Grid {
    export type Keys = Display.Grid.Keys;

    export type ClassName = Omit<Display.Grid.Keys, 'in-grid'>;

    export const KEYS: Array<Keys> = ['grid', 'in-grid', 'inline-grid'];

    export const CLASSNAMES: Record<Keys, ClassName> = {
        grid: 'grid',
        'in-grid': 'inline-grid',
        'inline-grid': 'inline-grid',
    } as const;

    export function isKeyDisplayGrid(value: string | undefined): value is Keys {
        return KEYS.indexOf(value as Keys) >= 0;
    }

    export function getClassName(
        display: Keys | undefined
    ): ClassName | undefined {
        return display && CLASSNAMES[display];
    }
}
