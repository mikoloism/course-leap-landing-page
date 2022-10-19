import type { PropsWithChildren } from '@/libs/common';

export type ProductBadgeProps = PropsWithChildren;

export type ProductCoverProps = { cover: string };

export type ProductContentProps = {
    description: string;
    department: string;
    title: string;
    stars: string;
};

export type ProductSalesProps = { amount: string; unit: string };

export type ProductPriceProps = { price: string; old?: string };

export type ProductInformationProps = {
    tag: string;
    lessons: string;
    duration: string;
};

export type ProductDetailsProps = ProductInformationProps & {
    price: ProductPriceProps;
    sale: ProductSalesProps;
};

export type ItemProps = {
    badge: string;
    id: number;
} & ProductContentProps &
    ProductDetailsProps &
    ProductCoverProps;

export type ProductItemProps = { item: ItemProps };
