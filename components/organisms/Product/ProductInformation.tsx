import { Group, Icon, Text } from '@/atoms';
import type { ProductInformationProps as Props } from './types';

export function ProductInformation({ duration, lessons, tag }: Props) {
    return (
        <Group
            dir="row"
            className="w-full">
            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                placeContent="start"
                className="fill-primary w-1/3">
                <Icon
                    name="alarm"
                    scale="scale-[0.5]"
                    className="w-[24%]"
                />
                <Text
                    placeContent="center"
                    className="inline-flex">
                    {duration}
                </Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-gold w-1/3">
                <Icon
                    name="book-open"
                    scale="scale-[0.5]"
                    className="w-[24%]"
                />
                <Text placeContent="center">{lessons}</Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-green w-1/3">
                <Icon
                    name="bookmark"
                    scale="scale-[0.5]"
                    className="w-[24%]"
                />
                <Text placeContent="center">{tag}</Text>
            </Group>
        </Group>
    );
}
