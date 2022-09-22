import { $ } from '@/libs/common';
import React, { Component } from 'react';

type AsType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'strong'
    | 'em'
    | 'p';
type TextSizeType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'paragraph'
    | 'standard'
    | 'link'
    | 'btn';

type TextColorType =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';

interface TextProps {
    as?: AsType;
    children?: any;
    className?: string;
    size?: number | TextSizeType;
    weight?: number | string;
    font?: string;
    color?: TextColorType;
    align?: 'center' | 'left' | 'right' | 'justify';
    placeContent?: 'center' | 'start' | 'end';
    placeItems?: 'center' | 'start' | 'end';
}

const TEXT_SIZE = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6',
    subtitle: 'text-subtitle',
    paragraph: 'text-paragraph',
    link: 'text-link',
    btn: 'text-btn',
    standard: 'text-standard',

    // by-element
    p: 'text-paragraph',
    span: 'text-standard',

    // tailwind
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
} as const as any;

const TEXT_COLOR = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    gray: 'text-gray',
    black: 'text-black',
    white: 'text-white',
} as const as any;

const TEXT_ALIGN = {
    center: 'text-center',
    right: 'text-right',
    left: 'text-left',
    justify: 'text-justify',
} as const as any;

function createElement(element: AsType, props: any, children: any) {
    return React.createElement(
        element ?? 'span',
        props ?? null,
        children ?? ''
    );
}

export function Text(props: TextProps) {
    const { as: $as, children: $children } = props;

    const $className = $(
        TEXT_SIZE[props.size ?? props.as ?? 'standard'],
        TEXT_COLOR[props.color ?? 'gray'],
        TEXT_ALIGN[props.align ?? 'justify'],
        props.font ? 'font-' + props.font : 'font-montserrat',
        props.weight ? 'font-' + props.weight : '',
        props.placeContent
            ? 'place-content-' + props.placeContent
            : 'place-content-start',
        props.placeItems
            ? 'place-items-' + props.placeItems
            : 'place-items-center',
        'flex flex-wrap flex-col',
        props.className
    );

    const $props = { className: $className };

    return createElement($as as AsType, $props, $children);
}
