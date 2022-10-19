import { Group } from '@/atoms';
import { MoreButton } from '@/molecules/MoreButton';
import { ProductSales } from './ProductSales';
import { ProductPrice } from './ProductPrice';
import { ProductInformation } from './ProductInformation';
import type { ProductDetailsProps as Props } from './types';

export function ProductDetails({ sale, price, lessons, duration, tag }: Props) {
    return (
        <Group
            gapy="2"
            placeContent="start"
            className="w-full order-3">
            <ProductSales
                amount={sale.amount}
                unit={sale.unit}
            />

            <ProductPrice
                price={price.price}
                old={price.old}
            />

            <ProductInformation
                duration={duration}
                lessons={lessons}
                tag={tag}
            />

            <Group
                dir="row"
                placeContent="start"
                className="w-full">
                <MoreButton outline />
            </Group>
        </Group>
    );
}
