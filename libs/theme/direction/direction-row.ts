export type RowKeys = 'row' | 'hor' | 'horizontal';

export type ReverseKeys = `${'rev' | 'reverse'}-${RowKeys}`;

export type Keys = RowKeys | ReverseKeys;

type DirectionRowKeys = Keys;

export type LongProps = { direction?: DirectionRowKeys };

export type Props = { dir?: DirectionRowKeys };
