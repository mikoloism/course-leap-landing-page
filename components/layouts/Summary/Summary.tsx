import { Group } from '@/atoms';
import { SummaryCover, SummaryHeader } from '@/organisms/Summary';

export default function Summary() {
    return (
        <Group
            layout
            dir="row"
            color="white">
            <SummaryHeader />
            <SummaryCover />
        </Group>
    );
}
