import { BaseProps } from '@/libs/common';

export enum IconName {
    ArrowRight = 'arrow-right',
    CheckUnderline = 'check-underline',
    ChevronRight = 'chevron-right',
    CreditCard = 'credit-card',
    Tag = 'tag',
}

// NOTE : to use in another components as `icon` props type
export type IconType = IconName | `${IconName}`;

export interface IconProps extends BaseProps {
    name: IconType;
}
