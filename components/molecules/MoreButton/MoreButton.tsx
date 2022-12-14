import { Icon, Link, Text } from '@/atoms';
import { useContent } from '@/libs/hooks';

type Props = {
    text?: string;
    outline?: boolean;
};

export function MoreButton({ text, outline }: Props) {
    const { content } = useContent('landing-page', 'common');
    const href = '#cta-more-button';
    text ??= content('call_to_action');
    const className = `
    hover:scale-105 transform transition
    group-hover:bg-primary group-hover:fill-white
    rounded-full h-20 w-56 bg-transparent inline-flex flex-wrap flex-row place-items-center place-content-center fill-primary
    ${outline ? 'border border-primary' : 'justify-start'}`
        .trim()
        .replace(/\n/, ' ');

    return (
        <Link
            href={href}
            className={className}>
            <Text
                size="link"
                color="primary"
                placeContent="center"
                className="w-fit group-hover:text-white transition">
                {text}
            </Text>
            <Icon
                name="chevron-right"
                className="w-[20%] h-full overflow-hidden transition"
                scale="scale-[0.8]"
            />
        </Link>
    );
}
