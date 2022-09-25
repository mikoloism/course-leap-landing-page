import { Group } from '@/atoms';

export function Review({ children }: any): JSX.Element {
    return (
        <Group
            gapy="12"
            className="bg-white w-[30%] h-full py-6 rounded-md">
            {children}
        </Group>
    );
}
