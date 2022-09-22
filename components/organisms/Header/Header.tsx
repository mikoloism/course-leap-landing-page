import { Group, Icon, Item, Link, List, Text } from '@/components/atoms';

const $content = {
    brand: 'BrandName',
    navigation: [
        { children: 'Home' },
        { children: 'Product' },
        { children: 'Pricing' },
        { children: 'Contact' },
    ],
    login: 'Login',
    joinUs: 'JOIN US',
};

interface NavigationItemProps {
    children: any;
}

function NavigationItem({ children }: NavigationItemProps) {
    return <a className="w-full">{children}</a>;
}

export default function Header(props?: any) {
    return (
        <header
            id="header"
            className="grid grid-cols-12 grid-rows-6 w-screen h-36 place-content-center place-items-center bg-secondary text-white text-center font-montserrat px-32 sticky top-0">
            <Text
                as="h3"
                color="white"
                className="col-start-1 col-end-3 row-start-1 row-end-7">
                {$content.brand}
            </Text>
            <nav
                id="navigation"
                className="flex-wrap flex-row inline-flex place-content-center place-items-center w-full h-full col-start-4 col-end-8 row-start-1 row-end-7">
                <List
                    items={$content.navigation}
                    dir="row"
                    className="w-full h-full space-x-0 space-y-0 p-0"
                    Component={Item<NavigationItemProps>(
                        NavigationItem,
                        'w-1/4 h-full list-none flex flex-col flex-wrap place-justify-center place-content-center font-montserrat text-link'
                    )}
                />
            </nav>
            <Group
                dir="row"
                type="inline-flex"
                className="col-start-10 col-end-13 row-start-1 row-end-7 w-full h-full">
                <Link
                    href="#login"
                    className="rounded-md w-[45%] h-20 text-white text-center text-link inline-flex flex-wrap flex-row place-items-center place-content-center">
                    {$content.login}
                </Link>
                <Link
                    href="#login"
                    className="rounded-md w-[45%] h-20 bg-primary text-center inline-flex flex-wrap flex-row place-items-center place-content-center fill-white">
                    <Text
                        size="link"
                        color="white"
                        className="w-1/2 h-1/2">
                        {$content.joinUs}
                    </Text>
                    <Icon
                        name="arrow-right"
                        className="w-1/4 h-1/4 overflow-hidden"
                    />
                </Link>
            </Group>
        </header>
    );
}
