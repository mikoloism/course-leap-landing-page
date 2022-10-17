import { CreateFontClassName } from '../common';

export type Keys =
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';

export type Props = { weight?: Keys };

export type ClassName = CreateFontClassName<Keys>;

export type ConstantRecord = Record<Keys, ClassName>;

export const CLASSNAMES: ConstantRecord = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
};

export function getClassName(
    fontWeight: Keys | undefined
): ClassName | undefined {
    return fontWeight && CLASSNAMES[fontWeight];
}
