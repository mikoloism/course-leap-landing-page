import { Group, Icon, Image, Item, Link, List, Text } from '@/components/atoms';
import { Header } from '@/molecules/Header';

const $content = {
    title: 'Each and every client is important.',
    description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
    items: [
        {
            user: 'Regina Miles',
            link: '@username_in_twitter_or_github',
            role: 'Designer',
            paragraph: `
			Slate helps you see
			how many more days
			you need to work to
			reach your financial
			goal for the month
			and year.`,
            avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
        },
        {
            user: 'Regina Miles',
            link: '@username_in_twitter_or_github',
            role: 'Designer',
            paragraph: `
			Slate helps you see
			how many more days
			you need to work to
			reach your financial
			goal for the month
			and year.`,
            avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
        },
        {
            user: 'Regina Miles',
            link: '@username_in_twitter_or_github',
            role: 'Designer',
            paragraph: `
			Slate helps you see
			how many more days
			you need to work to
			reach your financial
			goal for the month
			and year.`,
            avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
        },
    ],
};

const stars = [
    { scale: 1, name: 'star-fill' },
    { scale: 1, name: 'star-fill' },
    { scale: 1, name: 'star-fill' },
    { scale: 1, name: 'star-fill' },
    { scale: 1, name: 'star' },
];

const FeedbackItem = ({ item }: { item: any }) => (
    <Group
        gapy="12"
        className="bg-white w-[30%] h-full py-6 rounded-md">
        <Group
            pos="relative"
            dir="row"
            gapx="2"
            className="w-8/12 h-20 order-3">
            <Link
                href="/user/#"
                overlay>
                click here to navigate to {item.user} page
            </Link>

            <Image
                className="next-image w-20 h-20"
                src={item.avatar}
                alt="avatar-1"
                style={{
                    gridColumn: '1/13',
                    gridRow: '1/13',
                    borderRadius: '9999rem',
                }}
            />
            <Group
                placeContent="start"
                className="h-full"
                style={{ width: 'calc(100% - 5.5rem)' }}>
                <Text
                    as="strong"
                    size="link"
                    color="primary"
                    className="w-full h-1/2">
                    {item.user}
                </Text>
                <Text className="w-full h-1/2">{item.role}</Text>
            </Group>
        </Group>

        <List
            className="w-full h-16 fill-accent-gold order-1"
            dir="horizontal"
            gapx="6"
            data={stars}
            $key={({ name }, id) => `${name}-${id}`}
            Component={Item(Icon)}
        />

        <Text
            as="p"
            className="order-2 px-24">
            {item.paragraph}
        </Text>
    </Group>
);

export default function Feedbacks() {
    return (
        <Group
            gapy="16"
            className="bg-secondary h-[115vh] w-full font-montserrat">
            <Header
                level="h2"
                title={$content.title}
                description={$content.description}
                color="white"
                width="8"
                className="place-self-start px-20"
            />

            <Group
                gapx="6"
                className="w-10/12"
                style={{ height: 'calc(100% - 45rem)' }}>
                {$content.items.map((item, index) => {
                    return (
                        <FeedbackItem
                            item={item}
                            key={`${item.user}${index}`}
                        />
                    );
                })}
            </Group>
        </Group>
    );
}
