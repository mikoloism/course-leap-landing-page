import { classnames } from '@/libs/common';
import { PlaceAlign, Text } from '@/libs/constants';
import { TextStyleProps } from './types';

type Props = TextStyleProps;

export class TextStyleFactory {
    public constructor(private props: Props) {}

    public static parseProps(props: any): Props {
        if (props?.children != undefined) {
            const { children, ...parsedProps } = props;
            return parsedProps;
        }

        return props;
    }

    public createClassName() {
        const { className, placeContent, placeItems, ...textStyle } =
            this.props;

        return this.mergeClassNames(
            this.getTextStyleClassName(),
            this.getPlaceAlignClassName(),
            this.getManualClassName()
        );
    }

    private mergeClassNames(
        ...classNames: Array<string | boolean | undefined>
    ): string {
        return classnames(...classNames);
    }

    private getTextStyleClassName(): string {
        const textStyleProps = TextUtilStyleFactory.parseProps(this.props);

        return new TextUtilStyleFactory(textStyleProps).createClassName();
    }

    private getPlaceAlignClassName(): string {
        return new PlaceAlignStyleFactory(
            this.props.placeContent,
            this.props.placeItems
        ).createClassName();
    }

    private getManualClassName(): string {
        return this.props.className ?? '';
    }
}

class TextUtilStyleFactory extends Text.StyleFactory {}

class PlaceAlignStyleFactory extends PlaceAlign.StyleFactory {
    protected override DEFAULT_PLACE_CONTENT: PlaceAlign.PlaceContent.Keys =
        'start';
    protected override DEFAULT_PLACE_ITEMS: PlaceAlign.PlaceItems.Keys =
        'center';
}
