type x = 'x';
const x = 'x' as const;
type y = 'y';
const y = 'y' as const;
type XorY = x | y;

const GapSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 32];

type GapRecord<T extends XorY = x> = Record<number, `gap-${T}-${number}`>;

export function createGapMap(type: XorY = x) {
    return GapSize.reduce(
        (gaps, size) => Object.assign(gaps, { [size]: `gap-${type}-${size}` }),
        {} // default-empty-object
    );
}

export const GAP_X: GapRecord<x> = createGapMap(x);
export const GAP_Y: GapRecord<y> = createGapMap(y);

export function getGapX(gapx?: string | number): string {
    return gapx ? GAP_X[gapx as number] : '';
}
export function getGapY(gapy?: string | number): string {
    return gapy ? GAP_Y[gapy as number] : '';
}
export function getGapSize({ gapx, gapy }: any): string {
    return `${getGapX(gapx)} ${getGapY(gapy)}`;
}
