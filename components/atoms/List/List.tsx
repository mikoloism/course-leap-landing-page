import { classnames, PropsWithClassName } from '@/libs/common';
import { Display, PlaceAlign, Gap } from '@/libs/theme';
import { getKeyProperty } from './hooks';
import type { DataProps, DataType, KeyProps } from './types';

type StyleProps = Gap.Props & PlaceAlign.Props & Display.Flex.Props;

type Props<T> = PropsWithClassName<StyleProps & KeyProps<T> & DataProps<T>> & {
    Component?: any;
};

const DEFAULT_PLACE_CONTENT = 'center';
const DEFAULT_PLACE_ITEMS = 'center';
const DEFAULT_DISPLAY_TYPE = 'flex';
const DEFAULT_FLEX_DIRECTION = 'row';
const NONE_LIST_CLASSNAME = 'list-none';

const defaultProps = {
    dir: 'row',
    nowrap: false,
    type: 'flex',
};

export function List<T>({ data, $key, Component, ...props }: Props<T>) {
    let className = classnames(
        NONE_LIST_CLASSNAME,

        Display.createClassNameByDisplayFlex({
            type: DEFAULT_DISPLAY_TYPE,
            dir: props.dir ?? DEFAULT_FLEX_DIRECTION,
            nowrap: props.nowrap ?? false,
        }),
        PlaceAlign.getClassName({
            content: props.placeContent ?? DEFAULT_PLACE_CONTENT,
            items: props.placeItems ?? DEFAULT_PLACE_ITEMS,
        }),
        Gap.getClassName({ gapx: props.gapx, gapy: props.gapy }),

        props.className
    );

    return (
        <ul className={className}>
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
