export type ColumnKeys = 'column' | 'vertical' | 'col' | 'vert';

export type ReverseKeys = `${'rev' | 'reverse'}-${ColumnKeys}`;

export type Keys = ColumnKeys | ReverseKeys;

type DirectionColumnKeys = Keys;

export type LongProps = { direction?: DirectionColumnKeys };

export type Props = { dir?: DirectionColumnKeys };
