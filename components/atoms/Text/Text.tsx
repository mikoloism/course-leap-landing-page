import { $ } from '@/libs/common';
import {
    getFontWeight,
    getPlaceContent,
    getPlaceItems,
    getTextAlign,
    getTextColor,
    getTextSize,
} from '@/libs/constants';
import { createElement } from '@/libs/hooks/createElement';
import { PlaceProps } from '@/libs/types';
import {
    AlignProps,
    AsProps,
    AsPropsType,
    ColorProps,
    FontProps,
    SizeProps,
} from './types';

interface Props
    extends AsProps,
        SizeProps,
        ColorProps,
        FontProps,
        AlignProps,
        PlaceProps,
        Partial<React.PropsWithChildren<{ className?: string }>> {}

export function Text(props: Props) {
    const $className = $(
        'flex flex-wrap flex-col',
        'font-montserrat',
        getTextColor(props.color),
        getTextAlign(props.align),
        getFontWeight(props.weight),
        getTextSize(props.size ?? props.as),
        getPlaceContent(props.placeContent, 'start'),
        getPlaceItems(props.placeItems, 'center'),
        props.className
    );

    return createElement(
        props.as as AsPropsType,
        { className: $className },
        props.children
    );
}
