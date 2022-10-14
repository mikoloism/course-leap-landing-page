import { classnames, Component, PropsWithCommon } from '@/libs/common';
import { PlaceAlign, Text as TextStyle } from '@/libs/constants';
import { createElement } from '@/libs/hooks/createElement';

type Props = PropsWithCommon & TextStyle.Props & PlaceAlign.Props;

export class Text extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { children, ...textStyle } = this.props;

        return createElement<TextStyle.Element.Keys>(this.props.as ?? 'span', {
            className: this.getClassName(textStyle),
            children,
        });
    }

    private getClassName({
        className,
        placeContent,
        placeItems,
        ...textStyle
    }: any) {
        return classnames(
            TextStyle.DEFAULT_CLASSNAME,
            TextStyle.getClassName(textStyle),
            PlaceAlign.getClassName({
                content: placeContent ?? 'start',
                items: placeItems ?? 'center',
            }),
            className
        );
    }
}
