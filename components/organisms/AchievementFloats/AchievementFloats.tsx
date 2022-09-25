import { AchieveFloat } from '@/molecules/AchieveFloat';

function useFakeFetch() {
    const SINGLE_FEATURES_ITEM = {
        description: 'The gradual accumulation of information about',
    };

    return {
        data: [
            {
                id: 0,
                title: 'Certified Teacher',
                icon: 'check-underline',
                color: 'bg-box-bg-blue fill-primary',
                grid: 'col-start-2 col-end-6  row-start-3 row-end-7',
                ...SINGLE_FEATURES_ITEM,
            },
            {
                id: 1,
                title: 'Market Analysis',
                icon: 'credit-card',
                color: 'bg-box-bg-red fill-accent',
                grid: 'col-start-7 col-end-11 row-start-5 row-end-[10]',
                ...SINGLE_FEATURES_ITEM,
            },
            {
                id: 2,
                title: 'Sales Planning',
                icon: 'tag',
                color: 'bg-box-bg-green fill-accent-green',
                grid: 'col-start-2 col-end-6  row-start-[8] row-end-[12]',
                ...SINGLE_FEATURES_ITEM,
            },
        ],
        error: undefined,
    };
}

export function AchievementFloats() {
    const { data } = useFakeFetch();
    return (
        <section
            className="w-1/2 h-full grid grid-cols-12 place-items-center justify-around"
            style={{ gridTemplateRows: 'repeat(12,1fr)' }}>
            {data.slice(0, 3).map((item) => {
                return (
                    <AchieveFloat
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        color={item.color}
                        grid={item.grid}
                    />
                );
            })}
        </section>
    );
}
