import { classnames } from '@/libs/common';
import { Color, Display, Gap, PlaceAlign, Position } from '@/libs/constants';
import { StyleComponentProps } from './type';

export class GroupStyleFactory<T extends StyleComponentProps> {
    private props: T = {} as T;

    constructor(props: T) {
        this.props = props;
    }

    public getClassName(): string {
        return classnames(
            this.getBackgroundColorClassName(),
            this.getDisplayClassName(),
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
        return new Color.BackgroundStyleFactory(
            this.props.color
        ).createClassName();
    }

    private getDisplayClassName(): string {
        let props: any = this.props;
        const display = new DisplayStyleFactory(this.props.type);

        props = props as Display.Flex.Props;
        display.setFlexTypeProps(props.dir, props.nowrap);

        props = props as Display.Grid.Props;
        display.setGridTypeProps(props.columns, props.rows);

        return display.createClassName() as string;
    }

    private getGapSizeClassName(): string {
        return Gap.getClassName({
            gapx: this.props.gapx,
            gapy: this.props.gapy,
        });
    }

    private getLayoutModeClassName(): string {
        return new LayoutModeStyle(this.props.layout).createClassName();
    }

    private getPlaceAlignClassName(): PlaceAlign.ClassName {
        return new PlaceAlignStyleFactory(
            this.props.placeContent,
            this.props.placeItems
        ).createClassName();
    }

    private getPositionsClassName(): Position.ClassName | '' {
        return Position.getClassName(this.props?.pos) ?? '';
    }

    private getManualClassName(): string {
        return this.props?.className ?? '';
    }
}

class LayoutModeStyle {
    protected LAYOUT_MODE_CLASSNAME = 'w-screen h-screen p-0' as const;

    public constructor(private isLayoutMode: boolean | undefined = false) {}

    public createClassName(): string | '' {
        return this.isLayoutModeActive() ? this.getLayoutModeClassName() : '';
    }

    private getLayoutModeClassName(): string {
        return this.LAYOUT_MODE_CLASSNAME;
    }

    private isLayoutModeActive(): boolean {
        return !!this?.isLayoutMode;
    }
}

class PlaceAlignStyleFactory extends PlaceAlign.StyleFactory {
    protected DEFAULT_PLACE_CONTENT: PlaceAlign.PlaceContent.Keys = 'center';
    protected DEFAULT_PLACE_ITEMS: PlaceAlign.PlaceItems.Keys = 'center';
}

class DisplayStyleFactory extends Display.StyleFactory {
    protected DEFAULT_DISPLAY_TYPE: Display.Flex.Keys = 'flex';
    protected DEFAULT_FLEX_DIRECTION: Display.Flex.Direction.Keys = 'row';
}
