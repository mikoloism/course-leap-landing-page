// NOTE : this file used in as `tailwindcss` pre-built classNames

/** v.2
 * TODO : refactor
 * ```ts
 * export function getDirection(direction: FlexDirection | undefined): string {
 *  const rows = ['row', 'horizontal'];
 *  const colsReverse = ['col-reverse', 'column-reverse', 'vertical-reverse'];
 *  const rowsReverse = ['row-reverse', 'horizontal-reverse'];
 *
 *  if (!direction) return 'flex-col';
 *
 *  if (rows.includes(direction as string)) return 'flex-row';
 *  if (rowsReverse.includes(direction as string)) return 'flex-row-reverse';
 *  if (colsReverse.includes(direction as string)) return 'flex-col-reverse';
 *
 *  return 'flex-col';
 * }
 * ```
 */

import type { FlexType } from '../types/style';

export type ExactFlexDisplay = 'flex' | 'inline-flex';
const prefix = ['rev-', 'reverse-'];
const row = ['row', 'hor', 'horizontal'];
const column = ['col', 'vert', 'vertical', 'column'];
const flexType = ['flex', 'inline-flex', 'in-flex'];

export function merge(prefix: string[], value: string[]): string[] {
    return prefix.reduce(function (PrevPrefix: any[], currentPrefix: string) {
        return PrevPrefix.concat(
            value.reduce(function (prevValue: string[], currentValue: string) {
                return prevValue.concat(
                    (currentPrefix + currentValue) as string
                );
            }, [] as any[])
        );
    }, [] as any[]);
}

export function createFlex(keys: string[], value: string) {
    return keys.reduce(
        (prev, key) => Object.assign(prev, { [key]: value }),
        {}
    );
}

export const FLEX_DISPLAY: Record<FlexType, ExactFlexDisplay> = {
    flex: 'flex',
    'in-flex': 'inline-flex',
    'inline-flex': 'inline-flex',
};

export const FLEX_ROW = {
    ...createFlex(row, 'flex-row'),
    ...createFlex(merge(prefix, row), 'flex-row-reverse'),
};

export const FLEX_COLUMN = {
    ...createFlex(column, 'flex-col'),
    ...createFlex(merge(prefix, column), 'flex-col-reverse'),
};

export const FLEX_DIRECTION = {
    ...FLEX_ROW,
    ...FLEX_COLUMN,
};

export function isFlex(type: string): type is FlexType {
    return flexType.includes(type);
}

export function getFlexDisplay(type: FlexType): ExactFlexDisplay {
    return FLEX_DISPLAY[type];
}

export function getFlexDirection(
    dir?: string,
    defaultDir: string = 'col'
): string {
    return (FLEX_DIRECTION as Record<string, string>)[dir || defaultDir];
}
