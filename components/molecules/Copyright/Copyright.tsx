import { Group, Icon, Link, Text } from '@/atoms';
import { useContent } from '@/libs/hooks';

export function Copyright() {
    const { content } = useContent('landing-page', 'copyright');

    return (
        <Group className="h-16 w-screen bg-gray-200 mt-16">
            <Group
                gapx="2"
                dir="row">
                <Text color="secondary">{content('created')}</Text>
                <Icon
                    className="fill-accent"
                    scale="scale-[0.4]"
                    name="heart-fill"
                />
                <Text color="secondary">{content('company')} and</Text>
                <Link href="https://codepen.io/mikoloism">
                    <Text color="primary"> Mikoloism.com </Text>
                </Link>
                <Text color="secondary">{content('reserved')}</Text>
            </Group>
        </Group>
    );
}
