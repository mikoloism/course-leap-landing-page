import { classnames } from '@/libs/common';
import { PlaceContent as _PlaceContent } from './place-content';
import { PlaceItems as _PlaceItems } from './place-items';

export module PlaceAlign {
    export import PlaceContent = _PlaceContent;
    export import PlaceItems = _PlaceItems;

    export type Keys = PlaceContent.Keys | PlaceItems.Keys;

    export type Props = PlaceContent.Props & PlaceItems.Props;

    export type ClassName =
        | `${PlaceContent.ClassName} ${PlaceItems.ClassName}`
        | `${PlaceItems.ClassName} ${PlaceContent.ClassName}`
        | PlaceContent.ClassName
        | PlaceItems.ClassName;

    type PlaceAlignArgs = {
        content?: PlaceContent.Keys;
        items?: PlaceItems.Keys;
    };

    export function getClassName({
        content,
        items,
    }: PlaceAlignArgs): ClassName {
        return classnames(
            PlaceContent.getClassName(content),
            PlaceItems.getClassName(items)
        ) as ClassName;
    }
}

export type CommonKeys = 'center' | 'start' | 'end';

export const getPlaceAlign = PlaceAlign.getClassName;
