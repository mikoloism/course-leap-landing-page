import type { Common } from '../common';

export type Keys = 'grid' | 'in-grid' | 'inline-grid';

export type Columns = string;

export type Rows = string;

export type ColumnsProps = { columns?: Columns };

export type RowsProps = { rows?: Rows };

export type TypeProps = { type?: Keys };

export type Props = TypeProps & RowsProps & ColumnsProps;

export type PropsWithCommon = Common.Props & Props;

export type ClassName = Omit<Keys, 'in-grid'>;

export const KEYS: Array<Keys> = ['grid', 'in-grid', 'inline-grid'];

export const CLASSNAMES: Record<Keys, ClassName> = {
    grid: 'grid',
    'in-grid': 'inline-grid',
    'inline-grid': 'inline-grid',
} as const;

export function isDisplayGrid(value: string | undefined): value is Keys {
    return KEYS.indexOf(value as Keys) >= 0;
}

export function getClassName(display: Keys | undefined): ClassName | undefined {
    return display && CLASSNAMES[display];
}
