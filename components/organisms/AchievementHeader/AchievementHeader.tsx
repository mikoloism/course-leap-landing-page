import { Group, Icon, Link, Text } from '@/atoms';
import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';

export function AchievementHeader() {
    const { content } = useContent('landing-page', 'achievements');
    const $_call_to_action_$ = useContent('landing-page', 'common').content(
        'call_to_action'
    );

    return (
        <Group
            placeItems="start"
            className="w-1/2 h-full">
            <Header
                level="h2"
                title={content('title')}
                description={content('description')}
                Before={() => (
                    <span
                        id="block"
                        className="w-3/12 h-[6px] bg-accent rounded-full"></span>
                )}
                className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12"
            />
            <Link
                href="#"
                className="rounded-full h-20 w-56 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center justify-start fill-primary text-primary">
                <Text
                    color="primary"
                    placeContent="center"
                    className="w-fit h-full">
                    {$_call_to_action_$}
                </Text>
                <Icon
                    name="chevron-right"
                    className="w-[20%] h-full overflow-hidden"
                    scale="0.8"
                />
            </Link>
        </Group>
    );
}
