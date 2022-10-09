export namespace Position {
    export type LongKeys = 'relative' | 'absolute' | 'fixed' | 'sticky';

    export type ShortKeys = 'rel' | 'abs' | 'fix' | 'stk';

    export type Keys = ShortKeys | LongKeys;

    export type Props = {
        pos?: Keys;
    };

    export type LongProps = {
        position?: Keys;
    };
}
