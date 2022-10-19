import { Group, Icon, Link, Text } from '@/atoms';
import { classnames, PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';

export function HeaderActionGroup({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'header_actions');

    return (
        <Group
            dir="row"
            type="inline-flex"
            className={`w-full h-full ${className}`}>
            <ActionLink
                Component={LoginLink}
                text={content('login')}
            />
            <ActionLink
                Component={JoinUsLink}
                text={content('join_us')}
            />
        </Group>
    );
}

function LoginLink({ text }: { text: string }) {
    const className = createClassName();

    return (
        <Link
            href="#cta-login"
            className={className}>
            <span
                id="cta-login"
                className="hidden"
                aria-hidden></span>
            <Text
                size="link"
                color="white">
                {text}
            </Text>
        </Link>
    );
}

function JoinUsLink({ text }: { text: string }) {
    const className = classnames(
        createClassName(),
        'bg-primary fill-white text-center'
    );

    return (
        <Link
            href="#cta-join-us"
            className={className}>
            <span
                id="cta-join-us"
                className="hidden"
                aria-hidden></span>
            <Text
                size="link"
                color="white"
                className="w-1/2 h-1/2">
                {text}
            </Text>
            <Icon
                name="arrow-right"
                className="w-1/4 h-1/4 overflow-hidden"
            />
        </Link>
    );
}

function ActionLink({ Component, text }: any) {
    return <Component text={text} />;
}

function createClassName() {
    return 'rounded-md w-[45%] h-20 inline-flex flex-wrap flex-row place-items-center place-content-center';
}
