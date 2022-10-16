export type GapNumericSize =
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
export type GapStringSize = `${GapNumericSize}`;

export type GapSize = GapNumericSize | GapStringSize;

export type CreateClassNameType<T extends 'x' | 'y'> = `gap-${T}-${GapSize}`;
