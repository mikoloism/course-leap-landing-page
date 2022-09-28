import { ColorType } from '../types';

export const BACKGROUND_COLOR: Record<ColorType, `bg-${ColorType}`> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    gray: 'bg-gray',
    black: 'bg-black',
    white: 'bg-white',
} as const;

export function getBackgroundColor(color: ColorType): `bg-${ColorType}` {
    return BACKGROUND_COLOR[color];
}
