import type { Direction } from './direction';
import { CommonProps } from './common';

export namespace Display {
    export namespace Flex {
        export type Keys = 'flex' | 'in-flex' | 'inline-flex';

        export type NowrapProps = { nowrap?: boolean };

        export type TypeProps = { type?: Keys };

        export type Props = TypeProps & NowrapProps & Direction.Props;

        export type LongProps = TypeProps & NowrapProps & Direction.LongProps;

        export type PropsWithCommon = CommonProps & Props;

        export type LongPropsWithCommon = CommonProps & LongProps;
    }

    export namespace Grid {
        export type Keys = 'grid' | 'in-grid' | 'inline-grid';

        export type Columns = string;

        export type Rows = string;

        export type ColumnsProps = { columns?: Columns };

        export type RowsProps = { rows?: Rows };

        export type TypeProps = { type?: Keys };

        export type Props = TypeProps & RowsProps & ColumnsProps;

        export type PropsWithCommon = CommonProps & Props;
    }

    export type Keys = Flex.Keys | Grid.Keys;

    export type OnlyTypeProps = {
        type?: Keys;
    };

    export type Props = Flex.Props | Grid.Props;
}
