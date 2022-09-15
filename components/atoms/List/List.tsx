import { $, Component } from '@/libs/common';
import { getAsKey, getStyle } from './hooks';
import type { AsKey, ItemType, StyleProps } from './types';

interface ListProps extends StyleProps {
    items: Array<ItemType>;
    asKey?: AsKey;
    className?: string;
    children?: any | any[];
    Component?: any | any[];
}

export function List({ items, asKey, ...props }: ListProps) {
    const $className = $(getStyle(props as StyleProps), props.className);
    const ChildrenComponent = props.children ?? props.Component;

    return (
        <ul className={$className}>
            {items.map((item: ItemType, index: number) => {
                let $key = getAsKey(asKey, index, item);

                return (
                    <li key={$key}>
                        <ChildrenComponent {...item} />
                    </li>
                );
            })}
        </ul>
    );
}
