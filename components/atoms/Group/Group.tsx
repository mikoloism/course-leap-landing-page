import { $, Component, PropsWithAll } from '@/libs/common';
import {
    getBackgroundColor,
    getFlexDirection,
    getFlexDisplay,
    getGapSize,
    getGridDisplay,
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

type Props = PropsWithAll<PropsType> & {
    layout?: boolean;
    color?: ColorType;
};

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

    private getDisplayFlexClassName(): string {
        return $(getFlexDirection(this.props.dir), {
            'flex-wrap': !(this.props as any).nowrap,
        });
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
        return $(
            getPlaceContent(
                this.props.placeContent,
                Group.DEFAULT_PLACE_CONTENT
            ),
            getPlaceItems(this.props.placeItems, Group.DEFAULT_PLACE_ITEMS)
        );
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
            <section
                className={this.$className}
                style={this.props.style ?? {}}>
                {this.props.children}
            </section>
        );
    }
}
