import { createElement as ReactCreateElement } from 'react';

export function createElement(element: any, props: any, children: any) {
    return ReactCreateElement(element ?? 'span', props ?? null, children ?? '');
}

export const create$element = createElement;
