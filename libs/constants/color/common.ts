export type CreateClassNameType<T extends 'bg' | 'text'> = `${T}-${ColorNames}`;

export type ColorNames =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';
