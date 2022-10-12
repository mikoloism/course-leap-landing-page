import { classnames } from '@/libs/common';
import { Color, Display, Gap, PlaceAlign, Position } from '@/libs/constants';
import { StyleComponentProps } from './type';

export class GroupStyle<T extends StyleComponentProps = StyleComponentProps> {
    private LAYOUT_MODE_CLASSNAME = 'w-screen h-screen p-0' as const;
    private DEFAULT_DISPLAY_TYPE = Display.Flex.DEFAULT_KEY;
    private DEFAULT_PLACE_CONTENT = 'center' as const;
    private DEFAULT_PLACE_ITEMS = 'center' as const;
    private props: T = {} as T;

    constructor(props: T) {
        this.setProps(props);
    }

    public getClassName(): string {
        return this.mergeClassNames(
            this.getBackgroundColorClassName(),
            this.getClassNameByDisplay(),
            this.getGapSizeClassName(),
            this.getLayoutModeClassName(),
            this.getPlaceAlignClassName(),
            this.getPositionsClassName(),
            this.getManualClassName()
        );
    }

    private mergeClassNames(
        ...args: Array<string | object | undefined>
    ): string {
        return classnames(...args);
    }

    private getBackgroundColorClassName(): string {
        return this.hasColorProps() ? this.getBackgroundColor() : '';
    }

    private getBackgroundColor(): Color.Background.ClassName {
        return Color.Background.getClassName(this.props.color);
    }

    private hasColorProps(): boolean {
        return !!this.props?.color;
    }

    private getClassNameByDisplay(): Display.ClassName {
        if (this.isDisplayGrid()) {
            return this.getClassNameByDisplayGrid();
        }

        if (this.isDisplayFlex()) {
            return this.getClassNameByDisplayFlex();
        }

        return '';
    }

    private getDisplayType(): Display.Keys {
        return this.props?.type ?? this.DEFAULT_DISPLAY_TYPE;
    }

    private isDisplayFlex(): boolean {
        const type = this.getDisplayType();

        return Display.Flex.isDisplayFlex(type);
    }

    private isDisplayGrid(): boolean {
        const type = this.getDisplayType();

        return Display.Grid.isDisplayGrid(type);
    }

    private getClassNameByDisplayGrid(): Display.Grid.ClassName {
        const props = this.parseType<Display.Grid.Props>();

        return Display.getClassNameByDisplayGrid({
            type: props.type,
            columns: props.columns,
            rows: props.rows,
        });
    }

    private getClassNameByDisplayFlex(): Display.Flex.ClassName {
        const props = this.parseType<Display.Flex.Props>();

        return Display.getClassNameByDisplayFlex({
            type: props.type,
            dir: props.dir,
            nowrap: props.nowrap,
        });
    }

    private getGapSizeClassName(): string {
        return Gap.getClassName({
            gapx: this.props.gapx,
            gapy: this.props.gapy,
        });
    }

    private getLayoutModeClassName(): string {
        return this.hasLayoutProps() ? this.getLayoutMode() : '';
    }

    private getLayoutMode(): string {
        return this.LAYOUT_MODE_CLASSNAME;
    }

    private hasLayoutProps(): boolean {
        return !!this.props?.layout;
    }

    private getPlaceAlignClassName(): PlaceAlign.ClassName {
        return PlaceAlign.getClassName({
            content: this.getPlaceContent(),
            items: this.getPlaceItems(),
        });
    }

    private getPlaceContent(): PlaceAlign.PlaceContent.Keys {
        return this.props?.placeContent ?? this.DEFAULT_PLACE_CONTENT;
    }

    private getPlaceItems(): PlaceAlign.PlaceItems.Keys {
        return this.props.placeItems ?? this.DEFAULT_PLACE_ITEMS;
    }

    private getPositionsClassName(): Position.ClassName | '' {
        return Position.getClassName(this.props?.pos) ?? '';
    }

    private getManualClassName(): string {
        return this.props?.className ?? '';
    }

    public setProps(props?: T): void {
        if (props) {
            this.props = props;
        }
    }

    private parseType<P>(): P {
        return this.props as unknown as P;
    }
}
