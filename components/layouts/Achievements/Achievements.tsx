import { Group } from '@/atoms';
import { AchievementFloats } from '@/organisms/AchievementFloats';
import { AchievementHeader } from '@/organisms/AchievementHeader';

export default function Achievements() {
    return (
        <Group className="w-screen h-[135vh] py-48 bg-white">
            <AchievementHeader />
            <AchievementFloats />
        </Group>
    );
}
