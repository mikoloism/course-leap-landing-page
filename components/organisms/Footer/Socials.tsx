import { Group, Icon, Item, Link, List } from '@/atoms';
import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';

export const createExternalLink = (domain: string, endpoint: string) => {
    return `https:/\/${domain}.com/${endpoint}/`;
};

export function SocialItem({ name }: { name: any }) {
    return (
        <Link
            href={createExternalLink(
                name === 'linkedin' ? 'www.linkedin' : name,
                name === 'linkedin' ? 'in/mikoloism' : 'mikoloism'
            )}
            className="w-full h-full inline-flex flex-wrap flex-col place-content-center place-items-center">
            <Icon
                name={name}
                scale="scale-[1.3]"
            />
        </Link>
    );
}

export function Socials() {
    const { content } = useContent('landing-page', 'footer_socials');
    const icons = [
        { name: 'linkedin' },
        { name: 'instagram' },
        { name: 'twitter' },
    ];

    return (
        <Group
            placeContent="start"
            gapy="12"
            className="w-[20%] h-full pt-9">
            <Header
                level="h3"
                title={content('title')}
                width="9"
                description={content('description')}
                className="place-content-start place-items-start w-full"
            />

            <List
                dir="row"
                gapx="10"
                placeContent="start"
                className="fill-primary w-full h-16"
                data={icons}
                Component={Item(
                    SocialItem,
                    'flex flex-wrap flex-col place-content-start place-items-start w-1/5 h-full'
                )}
                $key="name"
            />
        </Group>
    );
}
