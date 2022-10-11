import { $, PropsWithCommon } from '@/libs/common';
import { PlaceAlign, Text as TextStyle } from '@/libs/constants';
import { createElement } from '@/libs/hooks/createElement';

type Props = PropsWithCommon & TextStyle.Props & PlaceAlign.Props;

export function Text(props: Props) {
    const { placeContent, placeItems, children, className, ...textStyle } =
        props;

    const $className = $(
        TextStyle.DEFAULT_CLASSNAME,
        TextStyle.getClassName(textStyle),
        PlaceAlign.getClassName({
            content: placeContent ?? 'start',
            items: placeItems ?? 'center',
        }),
        props.className
    );

    return createElement(
        props.as as TextStyle.Element.Keys,
        { className: $className },
        props.children
    );
}
