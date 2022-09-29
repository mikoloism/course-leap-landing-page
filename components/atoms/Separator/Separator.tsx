import { PropsWithClassName } from '@/libs/common';

export function Separator({
    className,
    heavy,
}: PropsWithClassName<{ heavy?: boolean }>) {
    const $className = `w-3/12 ${
        heavy ? 'h-[6px]' : 'h-1'
    } bg-accent rounded-full ${className ?? ''}`;

    return <span className={$className}></span>;
}
