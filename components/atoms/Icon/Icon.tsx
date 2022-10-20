import { classnames, Component } from '@/libs/common';
import { getIconComponent } from './hooks';
import type { IconProps } from './types';

export class Icon extends Component<IconProps> {
    static defaultProps: Omit<IconProps, 'name'> = {
        scale: 'scale-[0.7]',
    };

    constructor(props: IconProps) {
        super(props);
    }

    public render() {
        const { name, scale, className, ...props } = this.props;
        const IconComponent = getIconComponent(name);
        const $className = classnames(
            'inline-flex flex-wrap flex-row place-content-center place-items-center',
            className
        );

        return (
            <figure
                className={$className}
                {...props}>
                <IconComponent scale={scale} />
            </figure>
        );
    }
}
