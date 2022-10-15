import { Group, Separator } from '@/atoms';
import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';
import { MoreButton } from '@/molecules/MoreButton';

export function AchievementHeader() {
    const { content } = useContent('landing-page', 'achievements');

    return (
        <Group
            placeItems="start"
            className="w-1/2 h-full">
            <Header
                level="h2"
                title={content('title')}
                description={content('description')}
                Before={() => <Separator heavy />}
                className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12"
            />

            <MoreButton />
        </Group>
    );
}
