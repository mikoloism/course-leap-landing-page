import { Group, Icon, Link, Text } from '@/atoms';
import type { ProductContentProps as Props } from './types';

export function ProductContent({
    description,
    department,
    title,
    stars,
}: Props) {
    return (
        <Group
            gapy="1"
            className="order-2 w-full">
            <header className="relative flex flex-wrap flex-col place-content-center place-items-center items-start w-full gap-y-2 px-4 mt-4">
                <Text
                    as="h5"
                    color="secondary"
                    className="order-2">
                    {title}
                </Text>
                <Link
                    href={`#department-${stars}`}
                    className="order-1 text-link">
                    <span
                        id={`department-${stars}`}
                        className="hidden"
                        aria-hidden></span>
                    {department}
                </Link>
                <Text
                    as="p"
                    className="order-4">
                    {description}
                </Text>
                <Group
                    pos="absolute"
                    type="in-flex"
                    className="bg-black fill-accent-gold w-20 h-10 content-start rounded-full top-1 right-4">
                    <Icon
                        className="w-1/2 h-full"
                        name="star-fill"
                        scale="0.5"
                    />
                    <Text
                        color="white"
                        placeContent="center"
                        className="h-full inline-flex">
                        {stars}
                    </Text>
                </Group>
            </header>
        </Group>
    );
}
