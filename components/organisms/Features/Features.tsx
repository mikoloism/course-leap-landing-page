import { Group, Icon, Link, Text } from '@/components/atoms';
import { Header } from '@/components/molecules/Header';

const style = (classNames: string) => {
    return classNames.replace(/[\s]{1,}/gi, ' ');
};

const $content = {
    title: 'Watch our Courses',
    description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
    cta: `Learn More`,
    items: [
        {
            id: 0,
            title: 'Certified Teacher',
            description: `
			The gradual
			accumulation of
			information about`,
            icon: 'check-underline',
            color: 'bg-box-bg-blue fill-primary',
            grid: 'col-start-2 col-end-6  row-start-3 row-end-7',
        },
        {
            id: 1,
            title: 'Market Analysis',
            description: `
			The gradual
			accumulation of
			information about`,
            icon: 'credit-card',
            color: 'bg-box-bg-red fill-accent',
            grid: 'col-start-7 col-end-11 row-start-5 row-end-[10]',
        },
        {
            id: 2,
            title: 'Sales Planning',
            description: `
			The gradual
			accumulation of
			information about`,
            icon: 'tag',
            color: 'bg-box-bg-green fill-accent-green',
            grid: 'col-start-2 col-end-6  row-start-[8] row-end-[12]',
        },
    ],
};

function FeatureItem({ icon, title, description, grid, color }: any) {
    return (
        <Group
            gapy="4"
            placeItems="start"
            className={`py-5 px-8 shadow-accented text-left w-full h-full rounded-xl ${grid}`}>
            <Text
                as="h5"
                color="secondary"
                className="order-2">
                {title}
            </Text>
            <span
                id="block"
                className="order-3 w-3/12 h-1 bg-accent rounded-full"></span>
            <Text
                as="p"
                className="order-4">
                {description}
            </Text>
            <Icon
                scale="0.8"
                className={`order-1 w-24 h-24 rounded-2xl ${color}`}
                name={icon as any}
            />
        </Group>
    );
}

export default function Features() {
    return (
        <Group className="w-screen h-[135vh] py-48 bg-white">
            <Group
                placeItems="start"
                className="w-1/2 h-full">
                <Header
                    level="h2"
                    title={$content.title}
                    description={$content.description}
                    Before={() => (
                        <span
                            id="block"
                            className="w-3/12 h-[6px] bg-accent rounded-full"></span>
                    )}
                    className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12"
                />
                <Link
                    href="#"
                    className="rounded-full h-20 w-56 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center justify-start fill-primary text-primary">
                    <Text
                        color="primary"
                        placeContent="center"
                        className="w-fit h-full">
                        {$content.cta}
                    </Text>
                    <Icon
                        name="chevron-right"
                        className="w-[20%] h-full overflow-hidden"
                        scale="0.8"
                    />
                </Link>
            </Group>
            <section
                className="w-1/2 h-full grid grid-cols-12 place-items-center justify-around"
                style={{ gridTemplateRows: 'repeat(12,1fr)' }}>
                {$content.items.map((item) => {
                    return (
                        <FeatureItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            color={item.color}
                            grid={item.grid}
                        />
                    );
                })}
            </section>
        </Group>
    );
}
