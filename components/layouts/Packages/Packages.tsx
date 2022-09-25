import { Group } from '@/atoms';
import { useContent } from '@/libs/hooks/useContent';
import { Header } from '@/molecules/Header';
import { ProductItem } from '@/organisms/Product';

function useFakeFetch(): any {
    const SINGLE_PRODUCT_ITEM = {
        department: 'English Department',
        name: 'Graphic Design',
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        stars: '4.9',
        sale: {
            amount: '15',
            unit: 'Sales',
        },
        price: {
            old: '$16.48',
            new: '$6.48',
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
                cover: '/assets/images/image-3.jpeg',
                ...SINGLE_PRODUCT_ITEM,
            },
            {
                id: 1,
                cover: '/assets/images/image-5.jpg',
                ...SINGLE_PRODUCT_ITEM,
            },
            {
                id: 2,
                cover: '/assets/images/image-4.jpg',
                ...SINGLE_PRODUCT_ITEM,
            },
        ],
        error: undefined,
    };
}

export default function Packages() {
    const { data } = useFakeFetch();
    const { content } = useContent('landing-page', 'packages');

    return (
        <Group
            gapy={16}
            className="w-screen h-[135vh]">
            <Group
                placeContent="start"
                className="w-10/12 px-4">
                <Header
                    level="h2"
                    title={content('title')}
                    description={content('description')}
                    width="10"
                    className="flex flex-wrap flex-col place-content-center place-items-center items-start w-6/12"
                />
            </Group>
            <Group
                style={{ height: 'calc(135vh - 32rem)' }}
                className="w-full overflow-hidden">
                <Group
                    dir="row"
                    gapx="20"
                    className="w-[86%] px-24">
                    {data.slice(0, 3).map((item: any) => {
                        return (
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        );
                    })}
                </Group>
            </Group>
        </Group>
    );
}
