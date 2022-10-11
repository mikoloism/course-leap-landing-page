import { TextColor } from '../color';
import { TextAlign } from './align';
import { TextElement } from './element';
import { Font as _Font } from './font';
import { TextSize } from './size';

export module Text {
    export import Color = TextColor;
    export import Align = TextAlign;
    export import Element = TextElement;
    export import Font = _Font;
    export import Size = TextSize;

    export type PropsWithSize = Size.Props & Element.Props;

    export type PropsWithAlign = PropsWithSize & Align.Props;

    export type Props = PropsWithAlign & Font.Props & Color.Props;

    type GetSizeArg = Size.Props & { element: Element.Keys };

    export const DEFAULT_CLASSNAME = 'flex flex-wrap flex-col font-montserrat';

    export function getSizeClassName({
        size,
        element,
    }: GetSizeArg): Size.ClassName {
        return Size.getClassName(size ?? element);
    }

    export function getClassName(props: Props): string {
        const correctSize = props.size ?? props.as ?? Size.DEFAULT_KEY;
        const className = new ClassName();
        const { Weight } = _Font;

        if (correctSize) className.append(Size.getClassName(correctSize));
        if (props.align) className.append(Align.getClassName(props.align));
        if (props.color) className.append(Color.getClassName(props.color));
        if (props.weight) className.append(Weight.getClassName(props.weight));

        return className.get();
    }

    class ClassName {
        private className: string = '';

        get(): string {
            return this.className.trim();
        }

        append(className: string | undefined): this {
            this.className += ` ${className}` ?? '';

            return this;
        }
    }
}

type CreateClassName<T extends string, K extends string> = `${T}-${K}`;
export type CreateTextClassName<T extends string> = CreateClassName<'text', T>;
export type CreateFontClassName<T extends string> = CreateClassName<'font', T>;
