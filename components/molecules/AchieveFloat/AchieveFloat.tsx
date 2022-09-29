import { Group, Icon, Separator, Text } from '@/atoms';

export function AchieveFloat({ icon, title, description, grid, color }: any) {
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
            <Separator className="order-3" />
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
