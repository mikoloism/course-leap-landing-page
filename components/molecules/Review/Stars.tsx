import { Icon, Item, List } from '@/atoms';

function calcStars(activeStar: number = 0) {
    const ActiveStar = { name: 'star-fill', scale: 1 };
    const InactiveStar = { name: 'star', scale: 1 };
    const range = [1, 2, 3, 4, 5];

    if (activeStar < 0 || activeStar > 5) return range.map(() => InactiveStar);

    return range.map((index) =>
        index <= activeStar ? ActiveStar : InactiveStar
    );
}

export function Stars({ stars }: any) {
    return (
        <List
            className="w-full h-16 fill-accent-gold order-1"
            dir="horizontal"
            gapx="6"
            data={calcStars(stars)}
            $key={({ name }, id) => `${name}-${id}`}
            Component={Item(Icon)}
        />
    );
}
