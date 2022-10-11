import { CreateFontClassName } from './common';

export module Font {
    export type Props = Name.Props & Weight.Props;

    export import Weight = FontWeight;
    export import Name = FontName;
}

export module FontWeight {
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
}

export module FontWeight {
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
}

export module FontName {
    export type Key = string;

    export type Props = { font?: Key };

    export const DEFAULT_FONT_FAMILY = 'montserrat';
}
