export const POSITION: Record<string, string> = {
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
    sticky: 'sticky',
    abs: 'absolute',
    fix: 'fixed',
    rel: 'relative',
};
export function getPosition(pos: string): string {
    return POSITION[pos];
}
