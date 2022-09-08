import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
} from './Heading';
import { Paragraph } from './Paragraph';
import { Small } from './Small';

export const TextComponents = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    paragraph: Paragraph,
    small: Small,
} as const;

export * from './hooks';
export { default } from './Text';
export * from './types';