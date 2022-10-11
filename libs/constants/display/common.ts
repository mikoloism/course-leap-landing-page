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

export module Display {
    type GetByDisplayArg = GetByFlexArg | GetByGridArg;
    type GetByFlexArg = Flex.Props;
    type GetByGridArg = Grid.Props;

    export function getClassNameByDisplay({
        type,
        ...props
    }: GetByDisplayArg): string {
        if (Flex.isDisplayFlex(type)) {
            return getClassNameByDisplayFlex({ type, ...props });
        }

        if (Grid.isDisplayGrid(type)) {
            return getClassNameByDisplayGrid({ type, ...props });
        }

        return getClassNameByDisplayFlex({ type: 'flex', ...props });
    }

    export function getClassNameByDisplayFlex({
        type,
        dir,
        nowrap,
    }: GetByFlexArg): string {
        return [
            Flex.getClassName(type),
            Flex.getDirectionClassName(dir),
            Flex.getNoWrapClassName(nowrap),
        ].join(' ');
    }

    export function getClassNameByDisplayGrid({
        type,
        columns,
        rows,
    }: GetByGridArg): string {
        return Grid.getClassName(type) as string;
    }
}
