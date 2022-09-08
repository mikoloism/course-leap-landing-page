import Icon from '@/atoms/Icon';
import { Component, memo, $ } from '@/libs/common';
import { ButtonProps } from './index';

const tailwind = {
    variant: {
        fill: 'border-0 border-none',
        outline: 'border-2 border-solid',
        text: 'border-0 border-none',
    },
    fill: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        accent: 'bg-accent text-white',
        gray: 'bg-gray text-black',
        black: 'bg-black text-white',
        white: 'bg-white text-primary',
    },

    outline: {
        primary: 'bg-transparent text-primary border-primary',
        secondary: 'bg-transparent text-secondary border-secondary',
        accent: 'bg-transparent text-accent border-accent',
        gray: 'bg-transparent text-gray border-gray',
        black: 'bg-transparent text-black border-black',
        white: 'bg-transparent text-white border-white',
    },

    text: {
        primary: 'bg-transparent text-primary',
        secondary: 'bg-transparent text-secondary',
        accent: 'bg-transparent text-accent',
        gray: 'bg-transparent text-gray',
        black: 'bg-transparent text-black',
        white: 'bg-transparent text-white',
    },
};

function withOutline(color: string, classNames: string): string {
    return `${classNames} ${tailwind.variant.outline} ${
        (tailwind.outline as any)[color]
    }`;
}

function withFill(color: string, classNames: string): string {
    return `${classNames} ${tailwind.variant.fill} ${
        (tailwind.fill as any)[color]
    }`;
}

function withText(color: string, classNames: string): string {
    return `${classNames} ${tailwind.variant.text} ${
        (tailwind.text as any)[color]
    }`;
}

function withColor(
    color: string,
    classNames: string,
    decorator: (color: string, classNames: string) => string
): string {
    return decorator.call({}, color, classNames);
}

class ButtonComponent extends Component<ButtonProps> {
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

        const $className = $(
            $baseClass,
            $onActive,
            $onHover,
            !!this.props?.icon && $onHoverIcon,

            /* fill */
            {
                ['border-0 border-none']: $variant === 'fill',
                [`bg-${$color}`]: $variant === 'fill' && !!$color,
                [`text-white`]: [
                    'black',
                    'primary',
                    'gray',
                    'secondary',
                    'accent',
                ].includes($color),
                [`text-black`]: ['white'].includes($color) || !$color,
            },

            /* outline */
            {
                ['border-2 border-solid']: $variant === 'outline',
                [`border-${$color}`]: $color && $variant === 'outline',
                [`text-${$color}`]: $color && $variant === 'outline',
                [`bg-transparent`]: $color && $variant === 'outline',
                [`hover:bg-${$color}`]: $color && $variant === 'outline',
            },

            /* text */
            {
                ['border-0 border-none']: $variant === 'text',
                [`bg-transparent`]: $variant === 'text',
                [`text-${$color}`]: $color && $variant === 'text',
            },
            this.props.className
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

export const Button = memo(ButtonComponent);