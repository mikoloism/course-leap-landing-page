import type { ReactNode } from '@/libs/common';
import { Component, Link as NextLink } from '@/libs/common';

interface LinkProps {
    className?: string;
    children: ReactNode | JSX.Element;
    href: string;
}

export class Link extends Component<LinkProps> {
    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        return (
            <NextLink href={this.props.href}>
                <a className={this.props.className ?? ''}>
                    {this.props.children}
                </a>
            </NextLink>
        );
    }
}
