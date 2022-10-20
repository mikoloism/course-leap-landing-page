import { Item, Link, List } from '@/atoms';
import { classnames, Component, PropsWithClassName } from '@/libs/common';
import { useContent as retrieveContent } from '@/libs/hooks';
import style from '@/styles/header.module.css';

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
                    className={`h-1/2 group overflow-hidden`}
                    href={`#page-${href.toLowerCase()}`}>
                    <span
                        id={`page-${href.toLowerCase()}`}
                        className="hidden"
                        aria-hidden></span>
                    <span
                        className={classnames(
                            style['navigation-text-wrapper'],
                            'animate-push-in-down',
                            'group-hover:animate-push-out-up'
                        )}>
                        <span className={style['navigation-text-top']}>
                            {text}
                        </span>
                        <span className={style['navigation-text-bottom']}>
                            {text}
                        </span>
                    </span>
                </Link>
            );
        }, 'w-1/4 h-full list-none flex flex-col flex-wrap place-justify-center place-content-center font-montserrat text-link');
    }
}

//* DEPRECATED *//
class NavigationAnimation {
    private withCharacterAnimation(Component: any, text: string) {
        return (
            <Component>
                {this.convertTextToCharacters(text).map(
                    (character: string, index: number) => (
                        <this.CharacterComponent
                            key={`${character} - ${index}`}
                            character={character}
                            delay={index}
                        />
                    )
                )}
            </Component>
        );
    }

    private convertTextToCharacters(text: string): Array<string> {
        const characters: Array<string> = [];

        for (let index = 0; index < text.length; index++) {
            characters.push(text[index]);
        }

        return characters;
    }

    private CharacterComponent(props: { character: string; delay: number }) {
        const delayPerMilSecond = `1${props.delay}0`;
        const groupClassName =
            'inline-flex place-content-start place-items-center flex-col h-full overflow-hidden border-b border-transparent group-hover:border-b-primary transition';
        const className = classnames(
            `delay-[${delayPerMilSecond}ms group-hover:-translate-y-full transform transition`
        );

        return (
            <span className={groupClassName}>
                <span className={className}>{props.character}</span>
                <span className={`text-primary ${className}`}>
                    {props.character}
                </span>
            </span>
        );
    }
}
//* *//
