import { Component } from 'react';
import { getIconComponent } from './hooks';
import type { IconProps } from './types';

export default class Icon extends Component<IconProps, any, any> {
    constructor(props: IconProps) {
        super(props);
    }

    public render() {
        const { name: $name, scale, ...$props } = this.props;
        const IconComponent = getIconComponent($name);

        return (
            <figure {...$props}>
                <IconComponent scale={scale} />
            </figure>
        );
    }
}
