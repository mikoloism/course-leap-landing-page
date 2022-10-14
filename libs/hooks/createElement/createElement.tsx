import { createElement as ReactCreateElement } from 'react';

export function createElement<ValidElementNames extends string>(
    element: ValidElementNames,
    props: any
) {
    const { children, ...elementProps } = props;

    return ReactCreateElement<typeof element>(
        element,
        elementProps ?? null,
        children ?? ''
    );
}

export const create$element = createElement;
