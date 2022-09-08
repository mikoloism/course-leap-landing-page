import { Component } from 'react';
import { IconProps, getIconComponent } from './index';

export default class Icon extends Component<IconProps, any, any> {
    constructor(props: IconProps) {
        super(props);
    }

    public render() {
        const {
            name: $name,
            height,
            width,
            nowrap = false,
            ...$props
        } = this.props;
        const $width = width ? width.toString() : 'inherit';
        const $height = height ? height.toString() : 'inherit';
        const IconComponent = getIconComponent($name);

        return (
            <figure {...$props}>
                <IconComponent
                    width={$width}
                    height={$height}
                />
            </figure>
        );
    }
}
