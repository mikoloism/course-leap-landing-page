import * as Color from '../color';
import * as Align from './align';
import * as Element from './element';
import * as Font from './font';
import * as Size from './size';

export type SizeProps = Size.Props & Element.Props;

export type AlignProps = SizeProps & Align.Props;

export type Props = AlignProps & Font.Props & Color.Props;

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
    const { Weight } = Font;

    if (correctSize) className.append(Size.getClassName(correctSize));
    if (props.align) className.append(Align.getClassName(props.align));
    if (props.color) className.append(Color.Text.getClassName(props.color));
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
