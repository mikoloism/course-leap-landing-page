import type { PropsWithChildren } from '@/libs/common';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

export function Button({ children, ...props }: ButtonProps) {
    return <button {...props}>{children}</button>;
}
