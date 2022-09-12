import { IconType } from './types';
import { IconComponents } from './icons/icon-repository';

export function getIconComponent(name: IconType) {
    return IconComponents[name];
}
