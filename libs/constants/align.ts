import type { PlaceCommon, PlaceContent, PlaceItems } from '../types';

type PlaceClassName<
    T extends 'items' | 'content',
    C extends PlaceItemsType | PlaceContentType
> = `place-${T}-${C}`;

type PlaceItemsType = PlaceItems | PlaceCommon;
type PlaceContentType = PlaceContent | PlaceCommon;
type PlaceItemsClassName = PlaceClassName<'items', PlaceItemsType>;
type PlaceContentClassName = PlaceClassName<'content', PlaceContentType>;
type PlaceItemsRecord = Record<PlaceItemsType, PlaceItemsClassName>;
type PlaceContentRecord = Record<PlaceContentType, PlaceContentClassName>;

export const PLACE_ITEMS: PlaceItemsRecord = {
    center: 'place-items-center',
    start: 'place-items-start',
    end: 'place-items-end',
    baseline: 'place-items-baseline',
};

export const PLACE_CONTENT: PlaceContentRecord = {
    center: 'place-content-center',
    start: 'place-content-start',
    end: 'place-content-end',
    between: 'place-content-between',
    around: 'place-content-around',
    evenly: 'place-content-evenly',
};

export function getPlaceItems(
    items?: PlaceItemsType,
    defaultContent: PlaceItemsType = 'start'
): PlaceItemsClassName {
    return PLACE_ITEMS[items || defaultContent];
}

export function getPlaceContent(
    content?: PlaceContentType,
    defaultContent: PlaceContentType = 'start'
): PlaceContentClassName {
    return PLACE_CONTENT[content || defaultContent];
}
