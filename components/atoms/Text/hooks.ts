import type { AsPropsType } from './types';

const TextComponents: Record<AsPropsType, React.ReactNode> | null = null;

export function getTextComponent(type: AsPropsType) {
    return TextComponents?.[type];
}
