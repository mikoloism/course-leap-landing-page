import { classnames } from '@/libs/common';
import { Component, Link as NextLink } from '@/libs/common';

interface LinkProps extends React.PropsWithChildren<{}> {
    className?: string;
    href: string;
    overlay?: boolean;
}

export class Link extends Component<LinkProps> {
    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        const $className = classnames(
            this.props.overlay &&
                'absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 block z-50',
            this.props.className
        );

        return (
            <NextLink href={this.props.href}>
                <a className={$className}>{this.props.children}</a>
            </NextLink>
        );
    }
}
