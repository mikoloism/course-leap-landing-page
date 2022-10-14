import { Group } from '@/atoms';
import { PackagesHeader, PackagesContainer } from '@/organisms/Packages';

export default function Packages() {
    return (
        <Group
            layout
            dir="row"
            gapy="16"
            color="white"
            className="h-[125vh]">
            <PackagesHeader />
            <PackagesContainer />
        </Group>
    );
}
