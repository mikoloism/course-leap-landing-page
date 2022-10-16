import {
    PropsWithAll,
    PropsWithClassName,
    PropsWithCommon,
} from '@/libs/common';
import { PlaceAlign, Text } from '@/libs/constants';

export type TextComponentProps = PropsWithCommon<TextStyleProps>;

export type TextStyleProps = PropsWithClassName<Text.Props & PlaceAlign.Props>;

export type TextRenderProps = PropsWithAll<Text.Element.Props>;

export type ValidElementName = Text.Element.Keys;
