import { classnames } from '@/libs/common';
import { Color, Display, Gap, PlaceAlign, Position } from '@/libs/theme';
import { StyleComponentProps } from './type';

export class GroupStyleFactory<T extends StyleComponentProps> {
    private props: T = {} as T;

    public constructor(props: T) {
        this.props = props;
    }

    public getClassName(): string {
        return this.mergeClassNames(
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
        const display = new Display.StyleFactory();

        let flexProps = this.props as Display.Flex.Props;
        display.setFlexTypeProps(flexProps);

        let gridProps = this.props as Display.Grid.Props;
        display.setGridTypeProps(gridProps);

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

class PlaceAlignStyleFactory extends PlaceAlign.StyleFactory {
    protected DEFAULT_PLACE_CONTENT: PlaceAlign.PlaceContent.Keys = 'center';
    protected DEFAULT_PLACE_ITEMS: PlaceAlign.PlaceItems.Keys = 'center';
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
