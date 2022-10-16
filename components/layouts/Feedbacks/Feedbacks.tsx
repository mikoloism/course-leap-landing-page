import { Group } from '@/atoms';
import { FeedbacksHeader } from '@/organisms/Feedbacks/Header';
import { Reviews } from '@/organisms/Reviews';

export default function Feedbacks() {
    return (
        <Group
            gapy="16"
            color="secondary"
            className="h-[115vh] w-full">
            <FeedbacksHeader />
            <Reviews />
        </Group>
    );
}
