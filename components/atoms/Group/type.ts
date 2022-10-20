import type { PropsWithClassName, PropsWithCommon } from '@/libs/common';
import { Common, Display } from '@/libs/theme';

export type GroupComponentProps = FlexComponentProps | GridComponentProps;

export type FlexComponentProps = PropsWithCommon<FlexStyleProps>;
export type FlexStyleProps = Display.Flex.Props & StyleProps;

export type GridComponentProps = PropsWithCommon<GridStyleProps>;
export type GridStyleProps = Display.Grid.Props & StyleProps;

export type StyleComponentProps =
    | PropsWithClassName & StyleProps & Display.Props;

type StyleProps = Common.PropsWithAll & LayoutModeProps;

export type LayoutModeProps = { layout?: boolean };
