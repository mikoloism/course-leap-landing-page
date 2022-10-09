export namespace Direction {
    export type RowKeys =
        | 'row'
        | 'rev-row'
        | 'reverse-row'
        | 'hor'
        | 'rev-hor'
        | 'reverse-hor'
        | 'horizontal'
        | 'rev-horizontal'
        | 'reverse-horizontal';

    export type ColumnKeys =
        | 'column'
        | 'rev-column'
        | 'reverse-column'
        | 'vertical'
        | 'rev-vertical'
        | 'reverse-vertical'
        | 'col'
        | 'rev-col'
        | 'reverse-col'
        | 'vert'
        | 'rev-vert'
        | 'reverse-vert';

    export type Keys = RowKeys | ColumnKeys;

    export type LongColumnProps = { direction?: ColumnKeys };

    export type LongRowProps = { direction?: RowKeys };

    export type LongProps = { direction?: Keys };

    export type ColumnProps = { dir?: ColumnKeys };

    export type RowProps = { dir?: RowKeys };

    export type Props = { dir?: Keys };
}
