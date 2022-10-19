import { Group } from '@/atoms';
import type { PropsWithChildren } from '@/libs/common';
import type { ItemType } from '../Product';
import { ProductItem } from '../Product';

type DataType = Array<ItemType>;
type ErrorType = undefined | void;
type ReturnType = {
    data: DataType;
    error: ErrorType;
};

function useFakeFetch(): ReturnType {
    const SINGLE_PRODUCT_ITEM = {
        department: 'English Department',
        title: 'Graphic Design',
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        stars: '4.9',
        sale: {
            amount: '15',
            unit: 'Sales',
        },
        price: {
            old: '$16.48',
            price: '$6.48',
        },
        duration: '22hr 30min',
        lessons: '64 Lessons',
        tag: 'Progress',
        badge: 'Sale',
    };

    return {
        data: [
            {
                id: 0,
                cover: '/image-3.jpeg',
                ...SINGLE_PRODUCT_ITEM,
            },
            {
                id: 1,
                cover: '/image-5.jpg',
                ...SINGLE_PRODUCT_ITEM,
            },
            {
                id: 2,
                cover: '/image-4.jpg',
                ...SINGLE_PRODUCT_ITEM,
            },
        ],
        error: undefined,
    };
}

function ProductsContainer({ children }: PropsWithChildren) {
    return (
        <Group>
            <Group
                dir="row"
                gapx="20"
                className="w-[86%] px-24">
                {children}
            </Group>
        </Group>
    );
}

export function PackagesContainer() {
    const { data } = useFakeFetch();

    return (
        <ProductsContainer>
            {data.map((item: ItemType) => {
                return (
                    <ProductItem
                        key={item.id}
                        item={item}
                    />
                );
            })}
        </ProductsContainer>
    );
}
