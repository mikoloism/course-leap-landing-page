import {
    $,
    Component,
    PropsWithAll,
    PropsWithClassName,
    PropsWithCommon,
} from '@/libs/common';
import {
    getBackgroundColor,
    getFlexDirection,
    getFlexDisplay,
    getGapSize,
    getGridDisplay,
    getPlaceAlign,
    getPlaceContent,
    getPlaceItems,
    getPosition,
    isFlex,
    isGrid,
} from '@/libs/constants';
import type {
    ColorType,
    DisplayType,
    PlaceCommon,
    PlaceContent,
    PlaceItems,
    PropsType,
} from '@/libs/types';

type StyleProps = PropsWithClassName<PropsType> & {
    layout?: boolean;
    color?: ColorType;
};

type Props = PropsWithAll<StyleProps>;

class GroupComponent extends Component<PropsWithAll<{}>> {
    constructor(props: PropsWithCommon<{}>) {
        super(props);
    }

    private RenderWithStyleProps(props: PropsWithAll<{}>) {
        return (
            <section
                className={props.className}
                style={props.style}>
                {props.children}
            </section>
        );
    }

    private RenderWithoutStyleProps(props: PropsWithCommon<{}>) {
        return <section className={props.className}>{props.children}</section>;
    }

    private hasStyleProps(): boolean {
        return !!this.props?.style;
    }

    render() {
        const RenderComponent = this.hasStyleProps()
            ? this.RenderWithStyleProps
            : this.RenderWithoutStyleProps;

        return <RenderComponent {...this.props} />;
    }
}

export class Group extends Component<Props> {
    private static DEFAULT_DISPLAY_TYPE: DisplayType = 'flex';
    private static DEFAULT_PLACE_ITEMS: PlaceCommon | PlaceItems = 'center';
    private static DEFAULT_PLACE_CONTENT: PlaceCommon | PlaceContent = 'center';
    private $className: string | undefined;
    private $displayType: DisplayType = Group.DEFAULT_DISPLAY_TYPE;

    constructor(props: Props) {
        super(props);
        this.getStyleFromClassName();
    }

    private getDisplayTypeClassName(): string {
        return isFlex(this.$displayType)
            ? getFlexDisplay(this.$displayType)
            : isGrid(this.$displayType)
            ? getGridDisplay(this.$displayType)
            : Group.DEFAULT_DISPLAY_TYPE;
    }

    private getFlexDirectionClassName(): string {
        return getFlexDirection(this.props.dir);
    }

    private isFlexNoWrap(): boolean {
        return (this.props as any).nowrap;
    }

    private getFlexWrapClassName(): string {
        return this.isFlexNoWrap() ? '' : 'flex-wrap';
    }

    private getDisplayFlexClassName(): string {
        return [
            this.getFlexDirectionClassName(),
            this.getFlexWrapClassName(),
        ].join(' ');
    }

    private getDisplayGridClassName(): string {
        return $(
            'grid-cols-' + (this.props as any).columns,
            'grid-rows-' + (this.props as any).rows
        );
    }

    private getClassNameByDisplay(): string {
        return isFlex(this.$displayType)
            ? this.getDisplayFlexClassName()
            : this.getDisplayGridClassName();
    }

    private getGapSizeClassName(): string {
        return getGapSize({ gapx: this.props.gapx, gapy: this.props.gapy });
    }

    private getPlaceAlignClassName(): string {
        return getPlaceAlign({
            content: this.props?.placeContent ?? Group.DEFAULT_PLACE_CONTENT,
            items: this.props?.placeItems ?? Group.DEFAULT_PLACE_ITEMS,
        });
    }

    private getStyleFromClassName(): void {
        this.$className = $(
            this.getClassNameByDisplay(),
            this.getDisplayTypeClassName(),
            this.getGapSizeClassName(),
            this.getPlaceAlignClassName(),
            this.props.color && getBackgroundColor(this.props.color),
            this.props.layout && 'w-screen h-screen p-0',
            this.props.pos && getPosition(this.props.pos),
            this.props.className
        );
    }

    public render() {
        return (
            <GroupComponent
                className={this.$className}
                style={this.props.style ?? {}}>
                {this.props.children}
            </GroupComponent>
        );
    }
}
