export type CreateClassNameType<
    T extends 'content' | 'items',
    K extends string
> = `place-${T}-${K}`;

export type CommonKeys = 'center' | 'start' | 'end';
