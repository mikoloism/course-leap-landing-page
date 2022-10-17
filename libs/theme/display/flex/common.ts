export type CreateClassNameType<T extends 'col' | 'row'> =
    | `flex-${T}`
    | `flex-${T}-reverse`;
