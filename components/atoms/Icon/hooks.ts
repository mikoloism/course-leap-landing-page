import { IconComponents } from './icons/icon-repository';
import type { IconType } from './types';

export function getIconComponent(name: IconType) {
    return IconComponents[name];
}
