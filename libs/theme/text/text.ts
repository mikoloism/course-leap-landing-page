import * as Color from '../color';
import * as Align from './align';
import * as Element from './element';
import * as Font from './font';
import * as Size from './size';

export type SizeProps = Size.Props & Element.Props;

export type AlignProps = SizeProps & Align.Props;

export type Props = AlignProps & Font.Props & Color.Props;

type GetSizeArg = Size.Props & { element: Element.Keys };

export const DEFAULT_CLASSNAME = 'inline-flex flex-wrap flex-col';

export const DEFAULT_FONT_FAMILY = 'font-montserrat';

export function getSizeClassName({
    size,
    element,
}: GetSizeArg): Size.ClassName {
    return Size.getClassName(size ?? element);
}

export function getClassName(props: Props): string {
    const correctSize = props.size ?? props.as ?? Size.DEFAULT_KEY;
    const className = new ClassName();
    const { Weight } = Font;

    if (correctSize) className.append(Size.getClassName(correctSize));
    if (props.align) className.append(Align.getClassName(props.align));
    if (props.color) className.append(Color.Text.getClassName(props.color));
    if (props.weight) className.append(Weight.getClassName(props.weight));

    className.append(DEFAULT_FONT_FAMILY);

    return className.retrieve();
}

export class StyleFactory {
    protected DEFAULT_ELEMENT_NAME: Element.Keys = Element.DEFAULT_ELEMENT;
    protected DEFAULT_ELEMENT_SIZE: Size.Keys = Size.DEFAULT_KEY;
    protected DEFAULT_FONT_FAMILY: string = DEFAULT_FONT_FAMILY;
    protected DEFAULT_CLASSNAME: string = DEFAULT_CLASSNAME;

    public static parseProps(props: any): Props {
        return {
            as: props.as,
            size: props.size,
            color: props.color,
            align: props.align,
            font: props.font,
            weight: props.weight,
        };
    }

    public constructor(private props: Props) {}

    public createClassName(): string {
        return [getClassName(this.props), this.DEFAULT_CLASSNAME]
            .join(' ')
            .trim();
    }
}

class ClassName {
    private className: string = '';

    retrieve(): string {
        return this.className.trim();
    }

    append(className: string | undefined): this {
        this.className += ` ${className}` ?? '';

        return this;
    }
}
