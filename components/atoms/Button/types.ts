import { BaseColorProps, BaseProps, BaseVariantProps } from '@/libs/common';
import type { IconType } from '../Icon';

export interface ButtonProps
    extends BaseProps,
        BaseVariantProps,
        BaseColorProps {
    icon?: IconType;
}
