type CreateClassName<T extends string, K extends string> = `${T}-${K}`;
export type CreateTextClassName<T extends string> = CreateClassName<'text', T>;
export type CreateFontClassName<T extends string> = CreateClassName<'font', T>;
