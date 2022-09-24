import { Icon } from '@/atoms/Icon';
import { Link } from '@/atoms/Link';
import { Group } from '@/atoms/Group';
import { List } from '@/atoms/List';
import { Text } from '@/atoms/Text';
import { Item } from '@/components/atoms/List/Item';
import { Header } from '@/molecules/Header';

const $content = {
    social: {
        title: 'Get In Touch',
        paragraph: 'the quick fox jumps over the lazy dog',
        icons: [
            { name: 'linkedin' },
            { name: 'instagram' },
            { name: 'twitter' },
        ],
    },

    information: {
        title: 'Company info',
        nav: [
            { text: 'About Us' },
            { text: 'Carrier' },
            { text: 'We are hiring' },
            { text: 'Blog' },
        ],
    },

    features: {
        title: 'Features',
        nav: [
            { text: 'Business Marketing' },
            { text: 'User Analytic' },
            { text: 'Live Chat' },
            { text: 'Unlimited Support' },
        ],
    },

    resources: {
        title: 'Resources',
        nav: [
            { text: 'IOS & Android' },
            { text: 'Watch a Demo' },
            { text: 'Customers' },
            { text: 'API' },
        ],
    },

    /* Love <=> <Icon name="heart" /> */
    /* Company <=> <Text>Figma<no-space>land</Text> */
    copyright: 'Made With Love By Company All Right Reserved',
};

const NavigationItem = ({ text }: { text: any }) => {
    return (
        <Link
            href="/#"
            className="w-full h-full inline-flex flex-wrap flex-col place-content-start place-items-center">
            {text}
        </Link>
    );
};

const Navigation = ({ items }: { items: any }) => {
    return (
        <nav
            className="flex flex-wrap flex-col place-content-center place-items-center w-full"
            style={{ height: 'calc(100% - 32rem)' }}>
            <List
                className="w-full h-full gap-y-6"
                placeContent="start"
                data={items}
                Component={Item(
                    NavigationItem,
                    'flex flex-wrap flex-col place-content-center place-items-center w-full h-1/4'
                )}
            />
        </nav>
    );
};

function Resources() {
    return (
        <Group
            gapx="4"
            className="w-[20%] h-full">
            <Header
                level="h3"
                title={$content.resources.title}
                className="flex flex-wrap flex-col place-content-start place-items-start w-full"
            />
            <Navigation items={$content.resources.nav} />
        </Group>
    );
}

function Features() {
    return (
        <Group
            gapx="4"
            className="w-[20%] h-full">
            <Header
                level="h3"
                title={$content.features.title}
                className="flex flex-wrap flex-col place-content-start place-items-start w-full"
            />
            <Navigation items={$content.features.nav} />
        </Group>
    );
}

function Information() {
    return (
        <Group
            gapx="4"
            className="w-[20%] h-full">
            <Header
                level="h3"
                title={$content.information.title}
                className="flex flex-wrap flex-col place-content-start place-items-start w-full"
            />
            <Navigation items={$content.information.nav} />
        </Group>
    );
}

const createExternalLink = (domain: string, endpoint: string) => {
    return `https:/\/${domain}.com/${endpoint}/`;
};

function SocialItem({ name }: { name: any }) {
    return (
        <Link
            href={createExternalLink(
                name === 'linkedin' ? 'www.linkedin' : name,
                name === 'linkedin' ? 'in/mikoloism' : 'mikoloism'
            )}
            className="w-full h-full inline-flex flex-wrap flex-col place-content-center place-items-center">
            <Icon
                name={name}
                scale="1.3"
            />
        </Link>
    );
}

function Socials() {
    return (
        <Group
            placeContent="start"
            gapy="12"
            className="w-[20%] h-full pt-9">
            <Header
                level="h3"
                title={$content.social.title}
                width="9"
                description={$content.social.paragraph}
                className="flex flex-wrap flex-col place-content-start place-items-start w-full"
            />

            <List
                dir="row"
                gapx="10"
                placeContent="start"
                className="fill-primary w-full h-16"
                data={$content.social.icons}
                Component={Item(
                    SocialItem,
                    'flex flex-wrap flex-col place-content-start place-items-start w-1/5 h-full'
                )}
                $key="name"
            />
        </Group>
    );
}

function Copyright() {
    return (
        <Group
            className="h-16 w-screen bg-gray-200"
            style={{ marginTop: '4rem' }}>
            <Text
                as="p"
                size="standard"
                color="secondary">
                {$content.copyright}
            </Text>
        </Group>
    );
}

export default function Footer() {
    return (
        <>
            <footer
                className="flex flex-wrap flex-col place-content-center place-items-center w-screen"
                id="footer">
                <section className="flex flex-wrap flex-row-reverse place-content-center place-items-center w-8/12 gap-x-6">
                    <Resources />
                    <Features />
                    <Information />
                    <Socials />
                </section>
            </footer>
            <Copyright />
        </>
    );
}
