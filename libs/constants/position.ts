export module Position {
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

export module Position {
    export type ClassName = LongKeys;

    export type ConstantRecord = Record<Keys, ClassName>;

    export const CLASSNAMES: ConstantRecord = {
        absolute: 'absolute',
        fixed: 'fixed',
        relative: 'relative',
        sticky: 'sticky',
        abs: 'absolute',
        fix: 'fixed',
        rel: 'relative',
        stk: 'sticky',
    };

    export function getClassName(
        position: Keys | undefined
    ): ClassName | undefined {
        return position && CLASSNAMES[position];
    }
}
