import { Component } from 'react';
import { getTextComponent, TextProps } from './index';

export default class Text extends Component<TextProps> {
    constructor(props: TextProps) {
        super(props);
    }

    public render() {
        const { type, children, ...props } = this.props;
        const TextComponent = getTextComponent(type);
        return <TextComponent {...props}>{children}</TextComponent>;
    }
}
