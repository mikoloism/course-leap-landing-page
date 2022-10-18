import { Group, Separator } from '@/atoms';
import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';
import { MoreButton } from '@/molecules/MoreButton';

export function SummaryHeader() {
    const { content } = useContent('landing-page', 'summary');

    return (
        <Group
            placeItems="start"
            className="w-1/2 h-full order-1">
            <Header
                level="h2"
                title={content('title')}
                description={content('description')}
                className="w-1/2 h-1/2 place-items-start place-content-center gap-y-12"
                Before={() => <Separator heavy />}
            />

            <MoreButton />
        </Group>
    );
}
