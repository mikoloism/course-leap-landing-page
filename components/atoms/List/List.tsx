import { $ } from '@/libs/common';
import {
    getFlexDirection,
    getGapSize,
    getPlaceContent,
    getPlaceItems,
} from '@/libs/constants';
import type { FlexProps } from '@/libs/types';
import { getKeyProperty } from './hooks';
import type { DataProps, DataType, KeyProps } from './types';

interface Props<T> extends FlexProps, DataProps<T>, KeyProps<T> {
    Component?: any;
    className?: string;
}

export function List<T>({ data, $key, Component, ...props }: Props<T>) {
    const $className = $(
        'flex list-none',
        // TODO : use `@/atoms/Group/` hooks to style or create common hooks
        getFlexDirection(props.dir),
        getPlaceItems(props.placeItems, 'center'),
        getPlaceContent(props.placeContent, 'center'),
        getGapSize({ gapx: props.gapx, gapy: props.gapy }),
        { 'flex-wrap': !props.nowrap },
        props.className
    );

    return (
        <ul className={$className}>
            {data.map((value: DataType<T>, index: number) => {
                let validKey = getKeyProperty<T>({ key: $key, value, index });

                return (
                    <Component
                        key={validKey}
                        {...value}
                    />
                );
            })}
        </ul>
    );
}
