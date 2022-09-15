import { $ } from '@/libs/common';
import type {
    AsKey,
    FlexAlign,
    FlexDirection,
    ItemType,
    StyleProps,
} from './types';

export function getAsKey(
    key: AsKey | undefined,
    index: number,
    item: ItemType
): string | number {
    if (typeof key === 'string') {
        return item[key];
    }

    if (key instanceof Array) {
        return key[index];
    }

    if (typeof key === 'function' && 'call' in key) {
        return key.call({}, item as any, index as number);
    }

    return index;
}

export function getDirection(direction: FlexDirection | undefined): string {
    const cols = ['col', 'column', 'vertical'];
    const rows = ['row', 'horizontal'];
    const colsReverse = ['col-reverse', 'column-reverse', 'vertical-reverse'];
    const rowsReverses = ['row-reverse', 'horizontal-reverse'];

    return direction
        ? $({
              'flex-col': cols.includes(direction),
              'flex-row': rows.includes(direction),
              'flex-col-reverse': colsReverse.includes(direction),
              'flex-row-reverse': rowsReverses.includes(direction),
          })
        : 'flex-col';
}

export function getPlaceContent(placeContent: FlexAlign | undefined): string {
    return placeContent
        ? $({
              'place-content-center': placeContent === 'center',
              'place-content-start': placeContent === 'start',
              'place-content-end': placeContent === 'end',
          })
        : 'place-content-center';
}

export function getPlaceItems(placeItems: FlexAlign | undefined): string {
    return placeItems
        ? $({
              'place-items-center': placeItems === 'center',
              'place-items-start': placeItems === 'start',
              'place-items-end': placeItems === 'end',
          })
        : 'place-items-center';
}

export function getGapX(gap: number | string | undefined) {
    return 'gap-x-' + gap;
}

export function getGapY(gap: number | string | undefined) {
    return 'gap-y-' + gap;
}

export function getStyle(props: StyleProps): string {
    return $(
        'flex list-none',
        getDirection(props.dir),
        getPlaceItems(props.placeItems),
        getPlaceContent(props.placeContent),
        getGapX(props.gapx),
        getGapY(props.gapy),
        { 'flex-wrap': !props.nowrap }
    );
}
