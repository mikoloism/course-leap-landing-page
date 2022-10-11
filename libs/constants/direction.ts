export module Direction {
    export type RowWithoutReverseKeys = 'row' | 'hor' | 'horizontal';

    export type RowReverseKeys = `${
        | 'rev'
        | 'reverse'}-${RowWithoutReverseKeys}`;

    export type RowKeys = RowWithoutReverseKeys | RowReverseKeys;

    export type ColumnWithoutReverseKeys =
        | 'column'
        | 'vertical'
        | 'col'
        | 'vert';

    export type ColumnReverseKeys = `${
        | 'rev'
        | 'reverse'}-${ColumnWithoutReverseKeys}`;

    export type ColumnKeys = ColumnWithoutReverseKeys | ColumnReverseKeys;

    export type Keys = RowKeys | ColumnKeys;

    export type KeysWithReverse = RowReverseKeys | ColumnReverseKeys;

    export type KeysWithoutReverse =
        | RowWithoutReverseKeys
        | ColumnWithoutReverseKeys;

    export type LongColumnProps = { direction?: ColumnKeys };

    export type LongRowProps = { direction?: RowKeys };

    export type LongProps = { direction?: Keys };

    export type ColumnProps = { dir?: ColumnKeys };

    export type RowProps = { dir?: RowKeys };

    export type Props = { dir?: Keys };
}
