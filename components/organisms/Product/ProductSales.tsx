import { Group, Icon, Text } from '@/atoms';
import type { ProductSalesProps as Props } from './types';

export function ProductSales({ amount, unit }: Props) {
    return (
        <Group
            dir="row"
            placeContent="start"
            className="fill-gray-400 w-full">
            <Icon name="download-box" />
            <Text as="strong">
                {amount} {unit}
            </Text>
        </Group>
    );
}
