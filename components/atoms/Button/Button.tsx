import type { ReactNode } from '@/libs/common';
import { Component } from '@/libs/common';

interface ButtonProps {
    children: ReactNode | JSX.Element;
}

export class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return <></>;
    }
}
