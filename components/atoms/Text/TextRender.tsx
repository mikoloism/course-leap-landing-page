import { Component } from '@/libs/common';
import { createElement } from '@/libs/hooks/createElement';
import type { TextRenderProps, ValidElementName } from './types';

type Props = TextRenderProps;

export class TextRender extends Component<Props> {
    protected DEFAULT_ELEMENT_NAME: ValidElementName = 'span';
    protected DEFAULT_ELEMENT_PROPS = { className: '', children: '' };

    public constructor(props: Props) {
        super(props);
    }

    public static parseProps(props: any): Props {
        return {
            as: props.as,
            children: props.children,
            className: props.className,
        };
    }

    public render() {
        const TextComponent = this.renderTextComponent as any;
        const { as: elementName, ...elementProps } = this.props;
        const propsOfRender = {
            elementName: elementName ?? this.DEFAULT_ELEMENT_NAME,
            elementProps: elementProps ?? this.DEFAULT_ELEMENT_PROPS,
        };

        return <TextComponent {...propsOfRender} />;
    }

    private renderTextComponent(props: any) {
        return createElement<ValidElementName>(
            props.elementName,
            props.elementProps
        );
    }
}
