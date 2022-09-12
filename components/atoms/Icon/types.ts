import { BaseProps } from '@/libs/common';

export enum IconName {
    Alarm          = 'alarm',
    ArrowRight     = 'arrow-right',
    Bookmark       = 'bookmark',
    BookOpen       = 'book-open',
    CheckUnderline = 'check-underline',
    ChevronRight   = 'chevron-right',
    CreditCard     = 'credit-card',
    DownloadBox    = 'download-box',
    Eye            = 'eye',
    Heart          = 'heart',
    Instagram      = 'instagram',
    LinearChart    = 'linear-chart',
    Linkedin       = 'linkedin',
    ShoppingCart   = 'shopping-cart',
    StarFill       = 'star-fill',
    Star           = 'star',
    Tag            = 'tag',
    Twitter        = 'twitter',
}

// NOTE : to use in another components as `icon` props type
export type IconType = IconName | `${IconName}`;

export interface IconProps extends BaseProps {
    name   : IconType;
    nowrap?: boolean;
    scale? : string | number;
}
