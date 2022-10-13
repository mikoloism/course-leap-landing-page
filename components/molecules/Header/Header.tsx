import type { HeadingElementType } from '@/atoms/Text/types';
import type { Color } from '@/libs/constants';
import { Text } from '@/components/atoms';
import React from 'react';

type HeaderColorType =
    | Color.Names
    | { title?: Color.Names; description?: Color.Names };

interface Props
    extends React.PropsWithChildren<{
        className?: string;
        level: HeadingElementType;
        title: string;
        description?: string;
        Before?: any;
        After?: any;
        color?: HeaderColorType;
        width?: number | string;
    }> {}

function getColor(
    color: HeaderColorType | undefined,
    property: 'title' | 'description'
): Color.Names {
    // no color props passed
    if (!color) {
        return property === 'title'
            ? 'secondary'
            : 'gray' /* description description color */;
    }

    // both title and description are same color
    if (typeof color === 'string') return color;

    // color is object but wasn't set for property
    if (!color[property]) {
        return property === 'title'
            ? 'secondary'
            : 'gray' /* description default color */;
    }

    // color is object and set for property
    return color[property] ?? 'secondary';
}

function getWidth(width: number | undefined): string {
    const WIDTH = [
        '',
        'w-1/12',
        'w-2/12',
        'w-3/12',
        'w-4/12',
        'w-5/12',
        'w-6/12',
        'w-7/12',
        'w-8/12',
        'w-9/12',
        'w-10/12',
        'w-11/12',
        'w-12/12',
    ];

    return WIDTH[width ?? 11];
}

export function Header(props: Props) {
    const BeforeComponent = props.Before;
    const AfterComponent = props.After;
    return (
        <header className={props.className ?? ''}>
            {BeforeComponent && <BeforeComponent />}
            <Text
                as={props.level}
                color={getColor(props.color, 'title')}>
                {props.title}
            </Text>
            {props.description && (
                <Text
                    as="p"
                    className={getWidth(props.width as number)}
                    color={getColor(props.color, 'description')}>
                    {props.description}
                </Text>
            )}
            {AfterComponent && <AfterComponent />}
        </header>
    );
}
