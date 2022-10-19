import { Group, Link } from '@/atoms';
import { ProductBadge } from './ProductBadge';
import { ProductContent } from './ProductContent';
import { ProductCover } from './ProductCover';
import { ProductDetails } from './ProductDetails';
import type { ProductItemProps as Props } from './types';

export function ProductItem({ item }: Props) {
    return (
        <Group
            pos="relative"
            className="w-[30%] group overflow-hidden">
            <span
                id={`product-${item.stars}`}
                className="hidden"
                aria-hidden></span>
            <Link
                overlay
                href={`#product-${item.stars}`}
            />
            <ProductContent
                stars={item.stars}
                title={item.title}
                description={item.description}
                department={item.department}
            />
            <ProductDetails
                sale={item.sale}
                price={item.price}
                lessons={item.lessons}
                duration={item.duration}
                tag={item.tag}
            />
            <ProductCover cover={item.cover} />
            <ProductBadge>{item.badge}</ProductBadge>
        </Group>
    );
}
