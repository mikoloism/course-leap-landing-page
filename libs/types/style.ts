import { Exact } from './exact';

export type FlexType = 'flex' | 'in-flex' | 'inline-flex';
export type GridType = 'grid' | 'in-grid' | 'inline-grid';
export type GroupType = FlexType | GridType;

export type GroupPosition = 'relative' | 'absolute' | 'fixed' | 'sticky';
export interface PositionProps {
    pos?: GroupPosition;
}

export type RowDirection =
    | 'row'
    | 'rev-row'
    | 'reverse-row'
    | 'hor'
    | 'rev-hor'
    | 'reverse-hor'
    | 'horizontal'
    | 'rev-horizontal'
    | 'reverse-horizontal';
export type ColumnDirection =
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
export type DirectionType = RowDirection | ColumnDirection;
export interface DirectionProps {
    dir?: DirectionType;
}

export type PlaceCommon = 'center' | 'start' | 'end' | 'unset';
export type PlaceContent = 'between' | 'around' | 'evenly';
export type PlaceItems = 'baseline';
export interface PlaceProps {
    placeItems?: PlaceItems | PlaceCommon;
    placeContent?: PlaceContent | PlaceCommon;
}

export interface GapProps {
    gapx?: number | string;
    gapy?: number | string;
}

export interface CommonProps
    extends PlaceProps,
        DirectionProps,
        PositionProps,
        GapProps {}

interface OnlyFlexProps {
    nowrap?: boolean;
}

interface OnlyGridProps {
    columns?: string;
    rows?: string;
}

// flex|inline-flex
export type FlexProps = OnlyFlexProps & CommonProps;

// grid|inline-grid
export type GridProps = OnlyGridProps & CommonProps;

export type PropsType =
    | Exact<{ type?: FlexType } & FlexProps>
    | Exact<{ type?: GridType } & GridProps>;
