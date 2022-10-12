import { PropsWithAll, PropsWithClassName } from '@/libs/common';
import { Common, Display } from '@/libs/constants';

export type GroupComponentProps = FlexComponentProps | GridComponentProps;

export type FlexComponentProps = PropsWithAll<FlexStyleProps>;
export type FlexStyleProps = Display.Flex.Props & StyleProps;

export type GridComponentProps = PropsWithAll<GridStyleProps>;
export type GridStyleProps = Display.Grid.Props & StyleProps;

export type StyleComponentProps =
    | PropsWithClassName & StyleProps & Display.Props;

type StyleProps = Common.PropsWithAll & LayoutModeProps;

export type LayoutModeProps = { layout?: boolean };
