import { Group, Image, Link, Text } from '@/atoms';

export function UserAvatar({ avatar }: any) {
    return (
        <Image
            className="next-image w-20 h-20"
            src={avatar}
            alt="avatar-1"
            style={{
                gridColumn: '1/13',
                gridRow: '1/13',
                borderRadius: '9999rem',
            }}
        />
    );
}

export function UserRole({ role }: any) {
    return <Text className="w-full h-1/2">{role}</Text>;
}

export function Username({ username }: any) {
    return (
        <Text
            as="strong"
            size="link"
            color="primary"
            className="w-full h-1/2">
            {username}
        </Text>
    );
}

export function UserInfo({ children }: any) {
    return (
        <Group
            placeContent="start"
            className="h-full"
            style={{ width: 'calc(100% - 5.5rem)' }}>
            {children}
        </Group>
    );
}

export function UserDetails({ children }: any) {
    return (
        <Group
            pos="relative"
            dir="row"
            gapx="2"
            className="w-8/12 h-20 order-3">
            <Link
                overlay
                href="/user/#">
                see review
            </Link>
            {children}
        </Group>
    );
}