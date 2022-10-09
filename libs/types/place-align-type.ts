export namespace PlaceAlign {
    export namespace PlaceContent {
        export type KeysWithoutCommon = 'between' | 'around' | 'evenly';

        export type Keys = PlaceAlign.Keys | KeysWithoutCommon;

        export type PropsWithoutCommon = { placeCommon?: KeysWithoutCommon };

        export type Props = { placeContent?: Keys };
    }

    export namespace PlaceItems {
        export type KeysWithoutCommon = 'baseline';

        export type Keys = PlaceAlign.Keys | KeysWithoutCommon;

        export type PropsWithoutCommon = { placeItems?: KeysWithoutCommon };

        export type Props = { placeItems?: Keys };
    }

    export type Keys = 'center' | 'start' | 'end';

    export type BothKeys = PlaceContent.Keys | PlaceItems.Keys;

    export type Props = PlaceContent.Props & PlaceItems.Props;
}
