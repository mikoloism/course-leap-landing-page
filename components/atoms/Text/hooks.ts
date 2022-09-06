import { TextProps, TextComponents } from './index';

export function getTextComponent(type: TextProps['type']) {
    return TextComponents[type];
}
