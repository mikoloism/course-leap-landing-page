import type { Color } from './color';
import type { Gap } from './gap';
import type { PlaceAlign } from './place-align';
import type { Position } from './position';

export module Common {
    export type PropsWithAll = Props & ColorProps;

    export type Props = AlignProps & PositionProps;

    export type AlignProps = PlaceAlign.Props & Gap.Props;

    export type PositionProps = Position.Props;

    export type ColorProps = Color.Props;
}
