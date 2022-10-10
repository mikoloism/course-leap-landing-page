import type { PlaceAlign } from '../types';

type CreateClassNameType<
    T extends 'items' | 'content',
    K extends PlaceAlign.BothKeys
> = `place-${T}-${K}`;

export namespace PlaceItems {
    export type Keys = PlaceAlign.PlaceItems.Keys;

    export type ClassName = CreateClassNameType<'items', Keys>;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        center: 'place-items-center',
        start: 'place-items-start',
        end: 'place-items-end',
        baseline: 'place-items-baseline',
    };

    export const DEFAULT_KEY: Keys = 'start';

    export function getClassName(
        key: Keys | undefined,
        defaultKey: Keys = DEFAULT_KEY
    ): ClassName {
        return CLASSNAMES[key || defaultKey];
    }
}

export namespace PlaceContent {
    export type Keys = PlaceAlign.PlaceContent.Keys;

    export type ClassName = CreateClassNameType<'content', Keys>;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        center: 'place-content-center',
        start: 'place-content-start',
        end: 'place-content-end',
        between: 'place-content-between',
        around: 'place-content-around',
        evenly: 'place-content-evenly',
    };

    export const DEFAULT_KEY: Keys = 'start';

    export function getClassName(
        key: Keys | undefined,
        defaultKey: Keys = DEFAULT_KEY
    ): ClassName {
        return CLASSNAMES[key || defaultKey];
    }
}

type PlaceAlignArgs = { content?: PlaceContent.Keys; items?: PlaceItems.Keys };

export function getPlaceAlign({ content, items }: PlaceAlignArgs): string {
    return [
        PlaceContent.getClassName(content),
        PlaceItems.getClassName(items),
    ].join(' ');
}
