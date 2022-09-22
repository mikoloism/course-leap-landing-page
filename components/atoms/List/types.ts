// special-react-props (aliased `key`)
export type AsKey =
    | string
    | number
    | Array<string | number>
    | ((item: any[], index: number) => string | number);

export interface ItemType {
    [key: string]: any;
}

export type FlexDirection =
    | 'vertical'
    | 'vertical-reverse'
    | 'horizontal'
    | 'horizontal-reverse'
    | 'row'
    | 'col'
    | 'column'
    | 'row-reverse'
    | 'col-reverse'
    | 'column-reverse';

export type FlexAlign = 'center' | 'start' | 'end';

export interface StyleProps {
    nowrap?: boolean;
    dir?: FlexDirection;
    placeItems?: FlexAlign;
    placeContent?: FlexAlign;

    // gap[x|y] is tailwindcss (gap-[x|y]-*)
    gapx?: string | number;
    gapy?: string | number;
}
