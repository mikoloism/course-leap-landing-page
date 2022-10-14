import { classnames } from '@/libs/common';
import { PlaceAlign, Text } from '@/libs/constants';
import { TextStyleProps } from './types';

type Props = TextStyleProps;

export class TextStyleFactory {
    public constructor(private props: Props) {}

    public createClassName() {
        const { className, placeContent, placeItems, ...textStyle } =
            this.props;

        return classnames(
            Text.DEFAULT_CLASSNAME,
            Text.getClassName(textStyle),
            PlaceAlign.getClassName({
                content: placeContent ?? 'start',
                items: placeItems ?? 'center',
            }),
            className
        );
    }

    public static parseProps(props: any): Props {
        if (props?.children != undefined) {
            const { children, ...parsedProps } = props;
            return parsedProps;
        }

        return props;
    }
}
