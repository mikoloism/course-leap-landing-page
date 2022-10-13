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
        return new StyleFactory(content, items).createClassName();
    }

    export const createPlaceContentClassName = PlaceContent.getClassName;

    export const createPlaceItemsClassName = PlaceItems.getClassName;

    export class StyleFactory {
        protected DEFAULT_PLACE_CONTENT: PlaceContent.Keys = 'start' as const;
        protected DEFAULT_PLACE_ITEMS: PlaceItems.Keys = 'start' as const;

        public constructor(
            private placeContent: PlaceContent.Keys | undefined,
            private placeItems: PlaceItems.Keys | undefined
        ) {}

        public createClassName(): ClassName {
            return classnames(
                this.createPlaceItemsClassName(),
                this.createPlaceContentClassName()
            ) as ClassName;
        }

        private createPlaceContentClassName(): PlaceContent.ClassName {
            return createPlaceContentClassName(
                this.getPlaceContent(),
                this.DEFAULT_PLACE_CONTENT
            );
        }

        private getPlaceContent(): PlaceContent.Keys {
            return this?.placeContent ?? this.DEFAULT_PLACE_CONTENT;
        }

        private createPlaceItemsClassName(): PlaceItems.ClassName {
            return createPlaceItemsClassName(
                this.getPlaceItems(),
                this.DEFAULT_PLACE_ITEMS
            );
        }

        private getPlaceItems(): PlaceItems.Keys {
            return this?.placeItems ?? this.DEFAULT_PLACE_ITEMS;
        }
    }
}

export type CommonKeys = 'center' | 'start' | 'end';

export const getPlaceAlign = PlaceAlign.getClassName;
