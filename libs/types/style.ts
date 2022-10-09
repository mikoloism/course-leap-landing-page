import { Exact } from './exact';

export type FlexType = 'flex' | 'in-flex' | 'inline-flex';
export type GridType = 'grid' | 'in-grid' | 'inline-grid';
export type GroupType = FlexType | GridType;

export type PositionType = 'relative' | 'absolute' | 'fixed' | 'sticky';
export interface PositionProps {
    pos?: PositionType;
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

export type PlaceCommon = 'center' | 'start' | 'end';
export type PlaceContent = 'between' | 'around' | 'evenly';
export type PlaceItems = 'baseline';
export type PlaceContentType = PlaceContent | PlaceCommon;
export type PlaceItemsType = PlaceItems | PlaceCommon;
export interface PlaceProps {
    placeItems?: PlaceItemsType;
    placeContent?: PlaceContentType;
}

export type GapNumericType =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 12
    | 14
    | 16
    | 20
    | 32;
export type GapStringType = `${GapNumericType}`;
export type GapType = GapNumericType | GapStringType;
export interface GapProps {
    gapx?: GapType;
    gapy?: GapType;
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

export type DisplayType = FlexType | GridType;

export type PropsType =
    | Exact<{ type?: FlexType } & FlexProps>
    | Exact<{ type?: GridType } & GridProps>;

export type ColorType =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';
export interface ColorProps {
    color?: ColorType;
}
