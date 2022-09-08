import { Component } from 'react';
import { IconProps, getIconComponent } from './index';

export default class Icon extends Component<IconProps, any, any> {
    constructor(props: IconProps) {
        super(props);
    }

    public render() {
        const { name: $name, size, ...$props } = this.props;
        const IconComponent = getIconComponent($name);

        return (
            <figure {...$props}>
                <IconComponent size={size ?? '1'} />
            </figure>
        );
    }
}
