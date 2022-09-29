import { Group } from '@/atoms';
import { PackagesHeader, PackagesWrapper } from '@/organisms/Packages';

export default function Packages() {
    return (
        <Group
            dir="row"
            layout
            gapy="16"
            className="h-[125vh]">
            <PackagesHeader />
            <PackagesWrapper />
        </Group>
    );
}
