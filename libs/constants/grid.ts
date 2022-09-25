import type { GridType } from '../types/style';

export type ExactGridDisplay = 'grid' | 'inline-grid';
const gridType = ['flex', 'inline-flex', 'in-flex'];

export const GRID_DISPLAY: Record<GridType, ExactGridDisplay> = {
    grid: 'grid',
    'in-grid': 'inline-grid',
    'inline-grid': 'inline-grid',
};

export function isGrid(type: string): type is GridType {
    return gridType.includes(type);
}

export function getGridDisplay(type: GridType): ExactGridDisplay {
    return GRID_DISPLAY[type];
}
