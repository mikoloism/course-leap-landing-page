import { Group, Icon, Text } from '@/atoms';
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
                    name="heart-fill"
                    scale="0.4"
                />
                <Text color="secondary">{content('company')}</Text>
                <Text color="secondary">{content('reserved')}</Text>
            </Group>
        </Group>
    );
}
