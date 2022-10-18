import { Group, Icon, Link, Text } from '@/components/atoms';

export default function Error404() {
    return (
        <Group
            color="white"
            type="grid"
            placeItems="center"
            placeContent="center"
            className="w-screen h-screen">
            <Group
                dir="col"
                className="z-10 cursor-default">
                <Group
                    dir="row"
                    gapx="4">
                    <Text
                        className="inline-flex"
                        as="span"
                        size="h5"
                        color="gray">
                        404
                    </Text>
                    <span className="w-[3px] h-[32px] rounded-full bg-accent inline-flex"></span>
                    <Text
                        className="inline-flex"
                        as="span"
                        size="h5">
                        Page Not Found
                    </Text>
                </Group>
                <Group>
                    <Link href="/">
                        <Group dir="row">
                            <Text
                                as="span"
                                size="h5"
                                color="primary">
                                I will take you home
                            </Text>
                            <Icon
                                name="chevron-right"
                                className="fill-primary -mr-5"
                            />
                        </Group>
                    </Link>
                </Group>
            </Group>
            <Icon
                name="heart-fill"
                scale="25"
                className="fixed t-half l-half opacity-5 z-0 animate-heart-beat"
            />
        </Group>
    );
}
