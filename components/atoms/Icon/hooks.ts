import { IconProps, IconComponents } from './index';

export function getIconComponent(name: IconProps['name']) {
    return IconComponents[name];
}
