import { Item, Link, List } from '@/atoms';

export function FooterNavigationItem({
    text,
    href,
}: {
    text: any;
    href?: string;
}) {
    return (
        <Link
            href={href ?? '#'}
            className="w-full h-full inline-flex flex-wrap flex-col place-content-start place-items-center">
            {text}
        </Link>
    );
}

export function FooterNavigation({ items }: { items: any }) {
    return (
        <nav
            className="flex flex-wrap flex-col place-content-center place-items-center w-full"
            style={{ height: 'calc(100% - 32rem)' }}>
            <List
                gapy="6"
                className="w-full h-full"
                placeContent="start"
                data={items}
                Component={Item(
                    FooterNavigationItem,
                    'flex flex-wrap flex-col place-content-center place-items-center w-full h-1/4'
                )}
            />
        </nav>
    );
}
