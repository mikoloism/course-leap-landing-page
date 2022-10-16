export type Props = { nowrap?: boolean };

type GetNoWrapReturn = typeof FLEX_WRAP | typeof FLEX_NO_WRAP;

export const FLEX_NO_WRAP = '' as const;

export const FLEX_WRAP = 'flex-wrap' as const;

export function createClassName(nowrap: boolean = false): GetNoWrapReturn {
    return !!nowrap ? FLEX_NO_WRAP : FLEX_WRAP;
}
