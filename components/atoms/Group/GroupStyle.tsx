import { $, PropsWithClassName } from '@/libs/common';
import {
    Color,
    CommonProps,
    Display,
    Gap,
    PlaceAlign,
    Position,
} from '@/libs/constants';

export type StyleProps =
    | Color.Props &
          CommonProps &
          Display.Props &
          PropsWithClassName & { layout?: boolean };

export class GroupStyle<T extends StyleProps> {
    private LAYOUT_MODE_CLASSNAME = 'w-screen h-screen p-0' as const;
    private DEFAULT_DISPLAY_TYPE = Display.Flex.DEFAULT_KEY;
    private DEFAULT_PLACE_CONTENT = 'center' as const;
    private DEFAULT_PLACE_ITEMS = 'center' as const;
    private props: T = {} as T;

    constructor(props: T) {
        this.setProps(props);
    }

    public getClassName() {
        return $(
            this.getBackgroundColorClassName(),
            this.getClassNameByDisplay(),
            this.getGapSizeClassName(),
            this.getLayoutModeClassName(),
            this.getPlaceAlignClassName(),
            this.getPositionsClassName(),
            this.getManualClassName()
        );
    }

    private getBackgroundColorClassName(): string {
        return this.props?.color
            ? Color.Background.getClassName(this.props.color)
            : '';
    }

    private getClassNameByDisplay(): string {
        if (this.isDisplayGrid()) {
            return this.getClassNameByDisplayGrid();
        }

        if (this.isDisplayFlex()) {
            return this.getClassNameByDisplayFlex();
        }

        return '';
    }

    private getDisplayType(): string {
        return this.props?.type ?? this.DEFAULT_DISPLAY_TYPE;
    }

    private isDisplayFlex() {
        const type = this.getDisplayType();

        return Display.Flex.isDisplayFlex(type);
    }

    private isDisplayGrid(): boolean {
        const type = this.getDisplayType();

        return Display.Grid.isDisplayGrid(type);
    }

    private getClassNameByDisplayGrid() {
        const props = this.parseType<Display.Grid.Props>();

        return Display.getClassNameByDisplayGrid({
            type: props.type,
            columns: props.columns,
            rows: props.rows,
        });
    }

    private getClassNameByDisplayFlex() {
        const props = this.parseType<Display.Flex.Props>();

        return Display.getClassNameByDisplayFlex({
            type: props.type,
            dir: props.dir,
            nowrap: props.nowrap,
        });
    }

    private parseType<P>(): P {
        return this.props as unknown as P;
    }

    private getGapSizeClassName(): string {
        return Gap.getClassName({
            gapx: this.props.gapx,
            gapy: this.props.gapy,
        });
    }

    private getLayoutModeClassName(): string {
        return this.props?.layout ? this.LAYOUT_MODE_CLASSNAME : '';
    }

    private getPlaceAlignClassName(): string {
        return PlaceAlign.getClassName({
            content: this.props.placeContent ?? this.DEFAULT_PLACE_CONTENT,
            items: this.props.placeItems ?? this.DEFAULT_PLACE_ITEMS,
        });
    }

    private getPositionsClassName(): string {
        return this.props.pos
            ? (Position.getClassName(this.props.pos) as string)
            : '';
    }

    private getManualClassName(): string {
        return this.props?.className ?? '';
    }

    public setProps(props?: T): void {
        if (props) {
            this.props = props;
        }
    }
}
