import type * as Column from './direction-column';
import type * as Row from './direction-row';

export type DirectionKeys = KeysWithoutReverse | KeysWithReverse;

export type KeysWithReverse = Row.ReverseKeys | Column.ReverseKeys;

export type KeysWithoutReverse = Row.RowKeys | Column.ColumnKeys;

export type LongProps = Row.LongProps | Column.LongProps;

export type Props = Row.Props | Column.Props;
