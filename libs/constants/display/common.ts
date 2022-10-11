import { Flex as _Flex } from './flex';
import { Grid as _Grid } from './grid';

export module Display {
    export type Keys = Flex.Keys | Grid.Keys;

    export type OnlyTypeProps = {
        type?: Keys;
    };

    export type Props = Flex.Props | Grid.Props;

    export import Flex = _Flex;
    export import Grid = _Grid;
}
