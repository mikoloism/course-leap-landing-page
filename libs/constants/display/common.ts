import { classnames } from '@/libs/common';
import * as Flex from './flex';
import * as Grid from './grid';

export type Keys = Flex.Keys | Grid.Keys;

export type Props = Flex.Props | Grid.Props;

export type PropsWithCommon = Flex.PropsWithCommon | Grid.PropsWithCommon;

export type ClassName = Flex.ClassName | Grid.ClassName;

export type OnlyTypeProps = { type?: Keys };

type GetByDisplayArg = GetByFlexArg | GetByGridArg;

type GetByFlexArg = Flex.Props;

type GetByGridArg = Grid.Props;

export function getClassNameByDisplay({
    type,
    ...props
}: GetByDisplayArg): string {
    if (Flex.isDisplayFlex(type)) {
        return createClassNameByDisplayFlex({ type, ...props });
    }

    if (Grid.isDisplayGrid(type)) {
        return createClassNameByDisplayGrid({ type, ...props });
    }

    return createClassNameByDisplayFlex({ type: 'flex', ...props });
}

export function createClassNameByDisplayFlex({
    type,
    dir,
    nowrap,
}: GetByFlexArg): string {
    return classnames(
        Flex.createClassName(type),
        Flex.createFlexDirectionClassName(dir),
        Flex.createNoWrapClassName(nowrap)
    );
}

export function createClassNameByDisplayGrid({
    type,
    columns,
    rows,
}: GetByGridArg): string {
    return Grid.getClassName(type) as string;
}

export class StyleFactory {
    protected DEFAULT_DISPLAY_TYPE = Flex.DEFAULT_KEY;
    protected DEFAULT_FLEX_DIRECTION = Flex.Direction.DEFAULT_KEY;
    private type: Keys | undefined;
    private props: Props = {};

    public constructor(type: Keys | undefined) {
        this.type = type ?? this.DEFAULT_DISPLAY_TYPE;
    }

    public setFlexTypeProps(
        direction: Flex.Direction.Keys | undefined,
        nowrap: boolean | undefined
    ): void {
        this.props = {
            type: this.type,
            dir: direction ?? this.DEFAULT_FLEX_DIRECTION,
            nowrap: nowrap,
        } as Flex.Props;
    }

    public setGridTypeProps(
        columns: string | undefined,
        rows: string | undefined
    ): void {
        this.props = { type: this.type, columns, rows } as Grid.Props;
    }

    public createClassName(): ClassName {
        return this.getClassNameByDisplay();
    }

    private getClassNameByDisplay(): ClassName {
        return getClassNameByDisplay({ type: this.type, ...this.props });
    }

    //* DEPRECATED */
    private getClassNameByDisplayFlex(): Flex.ClassName {
        const props = this.props as Flex.Props;

        return createClassNameByDisplayFlex({
            type: this.getDisplayType() as Flex.Keys,
            dir: props.dir,
            nowrap: props.nowrap,
        });
    }

    private isDisplayFlex(): boolean {
        const type = this.getDisplayType();

        return Flex.isDisplayFlex(type);
    }

    private getClassNameByDisplayGrid(): Grid.ClassName {
        const props = this.props as Grid.Props;

        return createClassNameByDisplayGrid({
            type: props.type,
            columns: props.columns,
            rows: props.rows,
        });
    }

    private isDisplayGrid(): boolean {
        const type = this.getDisplayType();

        return Grid.isDisplayGrid(type);
    }
    //* */

    private getDisplayType(): Keys {
        return this?.type ?? this.DEFAULT_DISPLAY_TYPE;
    }
}
