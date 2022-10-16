import type * as Color from './color';
import type * as Gap from './gap';
import type * as PlaceAlign from './place-align';
import type * as Position from './position';

export type PropsWithAll = Props & ColorProps;

export type Props = AlignProps & PositionProps;

export type AlignProps = PlaceAlign.Props & Gap.Props;

export type PositionProps = Position.Props;

export type ColorProps = Color.Props;
