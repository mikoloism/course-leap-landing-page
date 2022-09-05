import { Color, Variant } from '@/libs/common';
import { Button } from './Button';

const $content = {
    getQuoteNow: 'Get Quote Now',
};

const Template = ({ variant, color }: { variant: any; color: any }) => {
    return (
        <Button
            variant={variant}
            color={color}>
            {$content.getQuoteNow}
        </Button>
    );
};

const FillTemplate = ({ color }: { color: any }) => (
    <Template
        variant="fill"
        color={color}
    />
);

const OutlineTemplate = ({ color }: { color: any }) => (
    <Template
        variant="outline"
        color={color}
    />
);

const TextTemplate = ({ color }: { color: any }) => (
    <Template
        variant="text"
        color={color}
    />
);

/**
 * story
 **/

export default {
    title: 'System/Atoms/Button',
} as any;

export const DefaultButton = () => <Button>{$content.getQuoteNow}</Button>;

/**
 * fill
 **/

const fill = {
    DEFAULT: () => <Button variant="fill">{$content.getQuoteNow}</Button>,
    primary: () => <FillTemplate color="primary" />,
    secondary: () => <FillTemplate color="secondary" />,
    accent: () => <FillTemplate color="accent" />,
    gray: () => <FillTemplate color="gray" />,
    black: () => <FillTemplate color="black" />,
};

export const FillDefault = fill.DEFAULT;
export const FillPrimary = fill.primary;
export const FillSecondary = fill.secondary;
export const FillAccent = fill.accent;
export const FillGray = fill.gray;
export const FillBlack = fill.black;

/**
 * outline
 **/

const outline = {
    DEFAULT: () => <Button variant="outline">{$content.getQuoteNow}</Button>,
    primary: () => <OutlineTemplate color="primary" />,
    secondary: () => <OutlineTemplate color="secondary" />,
    accent: () => <OutlineTemplate color="accent" />,
    gray: () => <OutlineTemplate color="gray" />,
    black: () => <OutlineTemplate color="black" />,
};

export const OutlineDefault = outline.DEFAULT;
export const OutlinePrimary = outline.primary;
export const OutlineSecondary = outline.secondary;
export const OutlineAccent = outline.accent;
export const OutlineGray = outline.gray;
export const OutlineBlack = outline.black;

/**
 * text
 **/

const text = {
    DEFAULT: () => <Button variant="text">{$content.getQuoteNow}</Button>,
    primary: () => <TextTemplate color="primary" />,
    secondary: () => <TextTemplate color="secondary" />,
    accent: () => <TextTemplate color="accent" />,
    gray: () => <TextTemplate color="gray" />,
    black: () => <TextTemplate color="black" />,
};

export const TextDefault = text.DEFAULT;
export const TextPrimary = text.primary;
export const TextSecondary = text.secondary;
export const TextAccent = text.accent;
export const TextGray = text.gray;
export const TextBlack = text.black;
