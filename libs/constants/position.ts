import type { PositionType } from '../types';

type PositionKeys = PositionType | 'abs' | 'fix' | 'rel';

export const POSITION: Record<PositionKeys, PositionType> = {
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
    sticky: 'sticky',
    abs: 'absolute',
    fix: 'fixed',
    rel: 'relative',
};

export function getPosition(
    pos: PositionKeys | undefined
): PositionType | undefined {
    return pos && POSITION[pos];
}
