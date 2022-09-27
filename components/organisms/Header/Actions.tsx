import { Group, Icon, Link, Text } from '@/atoms';
import { $, PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';

export function HeaderActionGroup({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'header_actions');
    const $loginClassName = $(
        'rounded-md w-[45%] h-20',
        'inline-flex flex-wrap flex-row place-items-center place-content-center'
    );

    const $joinUsClassName = $(
        $loginClassName,
        'bg-primary fill-white text-center'
    );

    return (
        <Group
            dir="row"
            type="inline-flex"
            className={`w-full h-full ${className}`}>
            <Link
                href="#login"
                className={$loginClassName}>
                <Text
                    size="link"
                    color="white">
                    {content('login')}
                </Text>
            </Link>
            <Link
                href="#login"
                className={$joinUsClassName}>
                <Text
                    size="link"
                    color="white"
                    className="w-1/2 h-1/2">
                    {content('join_us')}
                </Text>
                <Icon
                    name="arrow-right"
                    className="w-1/4 h-1/4 overflow-hidden"
                />
            </Link>
        </Group>
    );
}
