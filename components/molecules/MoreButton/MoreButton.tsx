import { Icon, Link, Text } from '@/atoms';
import { useContent } from '@/libs/hooks';

type Props = {
    href?: string;
    text?: string;
    outline?: boolean;
};

export function MoreButton({ href, text, outline }: Props) {
    const { content } = useContent('landing-page', 'common');
    href ??= '#';
    text ??= content('call_to_action');
    const $className = `rounded-full h-20 w-56 bg-transparent inline-flex flex-wrap flex-row place-items-center place-content-center fill-primary ${
        outline ? 'border border-primary' : 'justify-start'
    }`;

    return (
        <Link
            href={href ?? '#'}
            className={$className}>
            <Text
                size="link"
                color="primary"
                placeContent="center"
                className="w-fit h-full">
                {text}
            </Text>
            <Icon
                name="chevron-right"
                className="w-[20%] h-full overflow-hidden"
                scale="0.8"
            />
        </Link>
    );
}
