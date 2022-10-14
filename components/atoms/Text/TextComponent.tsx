import { Component } from '@/libs/common';
import { TextRender } from './TextRender';
import { TextStyleFactory } from './TextStyle';
import type { TextComponentProps } from './types';

type Props = TextComponentProps;

export class TextComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = this.createStyleFromClassName();
        const renderProps = TextRender.parseProps({ ...this.props, className });

        return <TextRender {...renderProps} />;
    }

    private createStyleFromClassName() {
        const styleProps = TextStyleFactory.parseProps(this.props);

        return new TextStyleFactory(styleProps).createClassName();
    }
}
