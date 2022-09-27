import { Text } from '@/atoms';
import { PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';

export function HeaderBrand({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'header');

    return (
        <Text
            as="h3"
            color="white"
            className={className}>
            {content('brand')}
        </Text>
    );
}
