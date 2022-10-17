// classnames
export { default as classnames } from 'classnames';

// react-types
export { Component, memo } from 'react';
export type { FC } from 'react';

// next
export { default as Image } from 'next/image';
export { default as Link } from 'next/link';

// base-props
export type PropsWithChildren<T = {}> = React.PropsWithChildren<T>;
export type PropsWithClassName<T = {}> = { className?: string } & T;
export type PropsWithStyle<T = {}> = { style?: Record<any, any> } & T;
export type PropsWithCommon<T = {}> = PropsWithClassName & PropsWithChildren & T;
export type PropsWithAll<T = {}> = PropsWithCommon<T> & PropsWithStyle;

// utility types
export type Exact<T> = { [K in keyof T]: T[K] };
