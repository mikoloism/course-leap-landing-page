import type { ReactNode } from 'react';

// classnames
export { default as $ } from 'classnames';

// react-types
export { Component, memo } from 'react';
export type { FC, ReactNode } from 'react';

// base-props
export interface BaseProps {
    className?: string;
    children?: ReactNode | JSX.Element;
}

// base-variant
export enum Variant {
    Fill = 'fill',
    Outline = 'outline',
    Text = 'text',
}

export type VariantType = Variant | `${Variant}`;

export interface BaseVariantProps {
    variant?: VariantType;
}

// base-color
export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Accent = 'accent',
    Gray = 'gray',
    Black = 'black',
    White = 'white',
}

export type ColorType = Color | `${Color}`;

export interface BaseColorProps {
    color?: ColorType;
}
