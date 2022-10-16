export type CreateClassNameType<
    T extends string,
    P extends string = 'flex'
> = `${P}-${T}-${'rev' | 'reverse'}`;
