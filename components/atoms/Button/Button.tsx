import Icon from '@/atoms/Icon';
import { Component, memo, $ } from '@/libs/common';
import { ButtonProps } from './index';

const hover = {
    fill: {
        primary: 'active:bg-primary/75',
        secondary: 'active:bg-secondary/75',
        accent: 'active:bg-accent/75',
        gray: 'active:bg-gray/75',
        black: 'active:bg-black/75',
        white: 'active:bg-white/75',
    },

    outline: {
        primary: `hover:bg-primary hover:text-white`,
        secondary: `hover:bg-secondary hover:text-white`,
        accent: `hover:bg-accent hover:text-white`,
        gray: `hover:bg-gray hover:text-white`,
        black: `hover:bg-black hover:text-white`,
        white: `hover:bg-white hover:text-black`,
    },

    text: {
        primary: 'hover:border-2 hover:border-solid hover:border-currentColor',
        secondary:
            'hover:border-2 hover:border-solid hover:border-currentColor',
        accent: 'hover:border-2 hover:border-solid hover:border-currentColor',
        gray: 'hover:border-2 hover:border-solid hover:border-currentColor',
        black: 'hover:border-2 hover:border-solid hover:border-currentColor',
        white: 'hover:border-2 hover:border-solid hover:border-currentColor',
    },
};

interface IDecorator {
    [key: string]: boolean | undefined;
}

function withWhiteText(color: string): IDecorator {
    return {
        [`text-white`]: [
            'black',
            'primary',
            'gray',
            'secondary',
            'accent',
        ].includes(color),
        [`text-black`]: ['white'].includes(color) || !color,
    };
}

function withFill(color: string): IDecorator {
    return {
        ['border-0 border-none']: true,
        [`bg-${color}`]: !!color,
        [(hover.fill as any)[color]]: true /* hover */,
        ...withWhiteText(color),
    };
}

function withOutline(color: string): IDecorator {
    return {
        ['border-2 border-solid']: true,
        [`border-currentColor`]: true,
        [`text-${color}`]: true,
        [`bg-transparent`]: true,
        [(hover.outline as any)[color]]: true /* hover */,
    };
}

function withText(color: string): IDecorator {
    return {
        ['border-0 border-none']: true,
        [`bg-transparent`]: true,
        [`text-${color}`]: true,
        [(hover.text as any)[color]]: true /* hover */,
    };
}

function withColor(
    color: string,
    className: string[],
    decorator: (color: string) => IDecorator
) {
    return $(decorator.call({}, color), className);
}

export class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    public render() {
        const $color = this.props?.color ?? 'primary';
        const $variant = this.props?.variant ?? 'fill';
        const $baseClass =
            'py-4 px-8 space-x-0 space-y-0 outline-0 stroke-0 shadow-none rounded-md transition text-btn font-montserrat';
        const $onActive = 'active:transform active:scale-95';
        const $onHoverIcon = 'hover:gap-8';
        const $onHover = 'hover:transform hover:scale-105';

        const $className = withColor(
            $color,
            [$baseClass, $onActive],
            {
                fill: withFill,
                outline: withOutline,
                text: withText,
            }[$variant]
        );

        return (
            <button
                type="button"
                className={$className}>
                {this.props?.children && this.props.children}
                {this.props?.icon && <Icon name={this.props.icon} />}
            </button>
        );
    }
}
