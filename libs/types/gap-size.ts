export namespace Gap {
    export type NumericSize =
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 12
        | 14
        | 16
        | 20
        | 32;
    export type StringSize = `${NumericSize}`;

    export type Size = NumericSize | StringSize;

    export type XPropsType = { gapx?: Size };

    export type YPropsType = { gapy?: Size };

    export type Props = XPropsType & YPropsType;
}
