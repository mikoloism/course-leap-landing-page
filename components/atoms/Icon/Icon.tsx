import { classnames, Component } from '@/libs/common';
import { getIconComponent } from './hooks';
import type { IconProps } from './types';

export class Icon extends Component<IconProps, any, any> {
    constructor(props: IconProps) {
        super(props);
    }

    public render() {
        const { name: $name, scale, className, ...$props } = this.props;
        const $className = classnames(
            'inline-flex flex-wrap flex-row place-content-center place-items-center',
            className
        );
        const IconComponent = getIconComponent($name);

        return (
            <figure
                className={$className}
                {...$props}>
                <IconComponent scale={scale} />
            </figure>
        );
    }
}
