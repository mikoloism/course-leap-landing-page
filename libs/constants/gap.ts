import type { GapType } from '../types';

type x = 'x';
type y = 'y';
type XorY = x | y;
type GapRecord<T extends XorY = x> = Record<GapType, `gap-${T}-${GapType}`>;

export const GAP_X: GapRecord<x> = {
    1: 'gap-x-1',
    2: 'gap-x-2',
    3: 'gap-x-3',
    4: 'gap-x-4',
    5: 'gap-x-5',
    6: 'gap-x-6',
    7: 'gap-x-7',
    8: 'gap-x-8',
    9: 'gap-x-9',
    10: 'gap-x-10',
    12: 'gap-x-12',
    14: 'gap-x-14',
    16: 'gap-x-16',
    20: 'gap-x-20',
    32: 'gap-x-32',
} as const;
export const GAP_Y: GapRecord<y> = {
    1: 'gap-y-1',
    2: 'gap-y-2',
    3: 'gap-y-3',
    4: 'gap-y-4',
    5: 'gap-y-5',
    6: 'gap-y-6',
    7: 'gap-y-7',
    8: 'gap-y-8',
    9: 'gap-y-9',
    10: 'gap-y-10',
    12: 'gap-y-12',
    14: 'gap-y-14',
    16: 'gap-y-16',
    20: 'gap-y-20',
    32: 'gap-y-32',
} as const;

export function getGapX(gapx?: GapType): string {
    return gapx ? GAP_X[gapx] : '';
}
export function getGapY(gapy?: GapType): string {
    return gapy ? GAP_Y[gapy] : '';
}
export function getGapSize({ gapx, gapy }: any): string {
    return `${getGapX(gapx)} ${getGapY(gapy)}`;
}
