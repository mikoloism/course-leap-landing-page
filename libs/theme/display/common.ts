import { classnames } from '@/libs/common';
import * as Flex from './flex';
import * as Grid from './grid';

export type Keys = Flex.FlexKey | Grid.GridKeys;

export type Props = Flex.Props | Grid.Props;

export type PropsWithCommon = Flex.PropsWithCommon | Grid.PropsWithCommon;

export type ClassName = Flex.ClassName | Grid.ClassName;

export type OnlyTypeProps = { type?: Keys };

type GetByDisplayArg = GetByFlexArg | GetByGridArg;

type GetByFlexArg = Flex.Props;

type GetByGridArg = Grid.Props;

export function getClassNameByDisplay(props: GetByDisplayArg): string {
    if (Flex.isDisplayFlex(props.type ?? '')) {
        let flexProps = props as Required<GetByFlexArg>;
        return createClassNameByDisplayFlex(flexProps);
    }

    if (Grid.isDisplayGrid(props.type ?? '')) {
        // TODO : display-grid is coming
        return createClassNameByDisplayGrid({
            type: 'grid',
            rows: '',
            columns: '',
        });
    }

    let flexProps = props as Required<GetByFlexArg>;
    return createClassNameByDisplayFlex({ ...flexProps, type: 'flex' });
}

export function createClassNameByDisplayFlex(
    props: Required<GetByFlexArg>
): string {
    const { type, dir, nowrap } = props;

    return classnames(
        Flex.createClassName(type),
        Flex.createFlexDirectionClassName(dir),
        Flex.createNoWrapClassName(nowrap)
    );
}

export function createClassNameByDisplayGrid(props: GetByGridArg): string {
    const { type, columns, rows } = props;

    return Grid.getClassName(type) as string;
}

export class StyleFactory {
    private props: Props = {};
    private flexProps: Flex.Props = {};
    private gridProps: Grid.Props = {};

    public constructor() {}

    public setFlexTypeProps(props: GetByFlexArg): void {
        const { type, dir, nowrap } = props;

        this.props.type = type;
        this.flexProps = { type, dir, nowrap };
    }

    public setGridTypeProps(props: GetByGridArg): void {
        const { type, columns, rows } = props;

        this.props.type = type;
        this.gridProps = { type, columns, rows };
    }

    public createClassName(): ClassName {
        return this.getClassNameByDisplay();
    }

    private getClassNameByDisplay(): ClassName {
        if (this.isDisplayFlex()) {
            return createClassNameByDisplayFlex(
                this.flexProps as Required<Flex.Props>
            );
        }

        if (this.isDisplayGrid()) {
            return createClassNameByDisplayGrid(this.gridProps);
        }

        return createClassNameByDisplayFlex({
            ...this.flexProps,
            type: 'flex',
        } as Required<Flex.Props>);
    }

    //* DEPRECATED */
    private getClassNameByDisplayFlex(): Flex.ClassName {
        const props = this.props as Flex.Props;

        return createClassNameByDisplayFlex({
            type: this.flexProps.type,
            dir: props.dir,
            nowrap: props.nowrap,
        } as Required<Flex.Props>);
    }

    private isDisplayFlex(): boolean {
        return Flex.isDisplayFlex(this.props.type ?? this.flexProps.type ?? '');
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
        return Grid.isDisplayGrid(this.props.type ?? this.gridProps.type ?? '');
    }
    //* */
}
