import { Item, List } from '@/atoms';
import { PropsWithChildren, PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';

type NavigationItemProps = Required<PropsWithChildren<{}>>;

function NavigationItem({ children }: NavigationItemProps) {
    return <a className="w-full">{children}</a>;
}

export function HeaderNavigation({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'header_navigation');
    const navigation = [
        { children: content('home') },
        { children: content('product') },
        { children: content('pricing') },
        { children: content('contact') },
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
