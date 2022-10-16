import { Group } from '@/atoms';

export function Review({ children }: any): JSX.Element {
    return (
        <Group
            gapy="12"
            color="white"
            className="w-[30%] h-full py-6 rounded-md hover:scale-105 transition">
            {children}
        </Group>
    );
}
