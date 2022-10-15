import { Item, Link, List } from '@/atoms';
import { Component, PropsWithClassName } from '@/libs/common';
import { useContent as retrieveContent } from '@/libs/hooks';

type Props = PropsWithClassName;

type RenderItemProps = { text: string };

export class HeaderNavigation extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <nav className={this.getClassName()}>
                <List
                    data={this.getItems()}
                    dir="row"
                    className="w-full h-full space-x-0 space-y-0 p-0"
                    Component={this.renderItem()}
                />
            </nav>
        );
    }

    private getClassName(): string {
        return `flex-wrap flex-row inline-flex place-content-center place-items-center w-full h-full ${this.props.className}`;
    }

    private getItems(): Array<{ text: string }> {
        const { content } = retrieveContent(
            'landing-page',
            'header_navigation'
        );

        return [
            { text: content('home') },
            { text: content('product') },
            { text: content('pricing') },
            { text: content('contact') },
        ];
    }

    private renderItem() {
        return Item<RenderItemProps>(({ text }: RenderItemProps) => {
            const href = text ?? '';

            return (
                <Link
                    className="group"
                    href={`#${href}`}>
                    {text}
                </Link>
            );
        }, 'w-1/4 h-full list-none flex flex-col flex-wrap place-justify-center place-content-center font-montserrat text-link');
    }
}
