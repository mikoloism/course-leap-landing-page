import { PlaceContent as _PlaceContent } from './place-content';
import { PlaceItems as _PlaceItems } from './place-items';

export module PlaceAlign {
    export type Keys = PlaceContent.Keys | PlaceItems.Keys;

    export type Props = PlaceContent.Props & PlaceItems.Props;

    type PlaceAlignArgs = {
        content?: PlaceContent.Keys;
        items?: PlaceItems.Keys;
    };

    export function getClassName({ content, items }: PlaceAlignArgs): string {
        return [
            PlaceContent.getClassName(content),
            PlaceItems.getClassName(items),
        ].join(' ');
    }

    export import PlaceContent = _PlaceContent;
    export import PlaceItems = _PlaceItems;
}

export type CommonKeys = 'center' | 'start' | 'end';

export const getPlaceAlign = PlaceAlign.getClassName;
