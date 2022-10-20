import type { IconType } from '@/atoms';
import { Icon } from '@/atoms';
import type { PropsWithClassName } from '@/libs/common';

type Props = PropsWithClassName<{
    icon: IconType;
}>;

export function ActionButton({ icon, className }: Props) {
    return (
        <button
            type="button"
            className={`w-14 h-14 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-full bg-white fill-black hover:scale-125 transition-all ${
                className ?? ''
            }`}>
            <Icon
                name={icon}
                scale="scale-[0.5]"
            />
        </button>
    );
}
