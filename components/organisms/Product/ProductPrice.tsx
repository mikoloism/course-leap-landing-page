import { Group, Text } from '@/atoms';
import type { ProductPriceProps as Props } from './types';

export function ProductPrice({ price, old }: Props) {
    return (
        <Group
            gapx="2"
            dir="row"
            placeContent="start"
            className="w-full px-4">
            {old && (
                <Text
                    as="span"
                    size="paragraph"
                    className="text-gray-400">
                    {old}
                </Text>
            )}
            <Text
                as="strong"
                size="paragraph">
                <span className="text-accent-green">{price}</span>
            </Text>
        </Group>
    );
}
