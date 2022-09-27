import { Item, Link, List } from '@/atoms';
import { PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';

type NavigationItemProps = { text: string };

function NavigationItem({ text }: NavigationItemProps) {
    return <Link href={`#${text ?? ''}`}>{text}</Link>;
}

export function HeaderNavigation({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'header_navigation');
    const navigation = [
        { text: content('home') },
        { text: content('product') },
        { text: content('pricing') },
        { text: content('contact') },
    ];

    return (
        <nav
            className={`flex-wrap flex-row inline-flex place-content-center place-items-center w-full h-full ${className}`}>
            <List
                data={navigation}
                dir="row"
                className="w-full h-full space-x-0 space-y-0 p-0"
                Component={Item<NavigationItemProps>(
                    NavigationItem,
                    'w-1/4 h-full list-none flex flex-col flex-wrap place-justify-center place-content-center font-montserrat text-link'
                )}
            />
        </nav>
    );
}
