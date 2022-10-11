import { TextColor } from '../color';
import { TextAlign } from './align';
import { TextElement } from './element';
import { Font as _Font } from './font';
import { TextSize } from './size';

export module Text {
    export type PropsWithSize = Size.Props & Element.Props;

    export type PropsWithAlign = PropsWithSize & Align.Props;

    export type Props = PropsWithAlign & Font.Props;

    export import Color = TextColor;
    export import Align = TextAlign;
    export import Element = TextElement;
    export import Font = _Font;
    export import Size = TextSize;
}

export type CreateClassName<T extends string, K extends string> = `${T}-${K}`;
export type CreateTextClassName<T extends string> = CreateClassName<'text', T>;
export type CreateFontClassName<T extends string> = CreateClassName<'font', T>;
