import { Group } from '@/atoms';
import { AchievementFloats } from '@/organisms/AchievementFloats';
import { AchievementHeader } from '@/organisms/AchievementHeader';

export default function Achievements() {
    return (
        <Group
            layout
            color="white">
            <AchievementHeader />
            <AchievementFloats />
        </Group>
    );
}
