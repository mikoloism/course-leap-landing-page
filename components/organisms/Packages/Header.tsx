import { Group } from '@/atoms';
import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';

export function PackagesHeader() {
    const { content } = useContent('landing-page', 'packages');

    return (
        <Group
            placeContent="start"
            className="w-10/12 px-4">
            <Header
                level="h2"
                title={content('title')}
                description={content('description')}
                width="10"
                className="place-content-center place-items-center items-start w-6/12"
            />
        </Group>
    );
}
