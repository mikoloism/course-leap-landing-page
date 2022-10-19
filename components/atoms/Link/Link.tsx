import type { PropsWithClassName, PropsWithCommon } from '@/libs/common';
import { classnames, Component, Link as NextLink } from '@/libs/common';

type HrefProps = { href: string };
type OverlayProps = { overlay: boolean };
type Props = PropsWithCommon & HrefProps & OverlayProps;

export class Link extends Component<Props> {
    static defaultProps: Omit<Props, 'href'> = {
        overlay: false,
    };

    private OVERLAY_CLASSNAME: string =
        'absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 block z-50';

    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { href } = this.props;
        const className = this.createClassName();

        return (
            <NextLink {...this.parseLinkPropsDTO({ href })}>
                <a {...this.parseAnchorPropsDTO({ className, href })}>
                    {this.props.children}
                </a>
            </NextLink>
        );
    }

    private parseAnchorPropsDTO({
        className,
        href,
    }: PropsWithClassName<HrefProps>) {
        return { className, ...this.normalizeLink(href) };
    }

    private parseLinkPropsDTO({ href }: HrefProps) {
        return { href, ...this.normalizeLink(href) };
    }

    private createClassName(): string {
        return classnames(
            { [this.OVERLAY_CLASSNAME]: this.props.overlay },
            this.props.className
        );
    }

    private isLinkInPage(link: string): boolean {
        return link.startsWith('#');
    }

    private isLinkExternal(link: string): boolean {
        return (
            link.startsWith('https://') ||
            link.startsWith('http://') ||
            (!link.startsWith('/') && !link.startsWith('#'))
        );
    }

    private normalizeLink(link: string): object {
        if (this.isLinkInPage(link)) return { rel: 'noopener' };
        if (this.isLinkExternal(link)) return { target: '_blank' };
        return { 'data-alternative': 'internal-link' };
    }
}
