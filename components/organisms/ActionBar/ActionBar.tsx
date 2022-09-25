import { Group } from '@/atoms';
import { ActionButton } from '@/molecules/ActionButton';

export function ActionBar({ productId }: any) {
    return (
        <Group
            gapx="12"
            dir="row"
            pos="absolute"
            data-id="overlay-actions"
            className="w-full h-16 -bottom-24 group-hover:bottom-6 right-0 left-0 z-50 transition-all opacity-0 group-hover:opacity-100">
            <ActionButton
                icon="heart"
                className="hover:fill-accent"
            />
            <ActionButton icon="shopping-cart" />
            <ActionButton icon="eye" />
        </Group>
    );
}
