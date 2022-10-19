import { Group, Image } from '@/atoms';
import style from '@/styles/products.module.css';
import { ActionBar } from '../ActionBar';
import type { ProductCoverProps as Props } from './types';

export function ProductCover({ cover }: Props) {
    return (
        <Group
            pos="relative"
            className="order-1 w-full h-5/12 overflow-hidden">
            <Image
                className="next-image w-full h-full group-hover:blur-sm"
                alt="image-cover-1"
                src={cover}
                imageClassName={style.productCoverImage}
            />
            <ActionBar productId={cover} />
        </Group>
    );
}
