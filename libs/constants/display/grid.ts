import type * as Common from '../common';

export type GridKeys = 'grid' | 'in-grid' | 'inline-grid';

export type Columns = string;

export type Rows = string;

export type ColumnsProps = { columns?: Columns };

export type RowsProps = { rows?: Rows };

export type TypeProps = { type?: GridKeys };

export type Props = TypeProps & RowsProps & ColumnsProps;

export type PropsWithCommon = Common.Props & Props;

export type ClassName = Omit<GridKeys, 'in-grid'>;

export const KEYS: Array<GridKeys> = ['grid', 'in-grid', 'inline-grid'];

export const CLASSNAMES: Record<GridKeys, ClassName> = {
    grid: 'grid',
    'in-grid': 'inline-grid',
    'inline-grid': 'inline-grid',
} as const;

export function isDisplayGrid(value: string): value is GridKeys {
    return KEYS.indexOf(value as GridKeys) >= 0;
}

export function getClassName(
    display: GridKeys | undefined
): ClassName | undefined {
    return display && CLASSNAMES[display];
}
