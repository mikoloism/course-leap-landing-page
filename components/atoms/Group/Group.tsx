import { $, Component, PropsWithAll, PropsWithClassName } from '@/libs/common';
import {
    Color,
    CommonProps,
    Display,
    Gap,
    PlaceAlign,
    Position,
} from '@/libs/constants';
import { GroupRender } from './GroupRender';

type StyleProps = PropsWithClassName<
    CommonProps & Color.Props & Display.Props
> & {
    layout?: boolean;
};

type Props = PropsWithAll<StyleProps>;

export class Group extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = this.getStyleFromClassName();

        return (
            <GroupRender
                className={className}
                style={this.props.style ?? {}}>
                {this.props.children}
            </GroupRender>
        );
    }

    private getStyleFromClassName(): string {
        return $(
            this.getBackgroundColorClassName(),
            this.getClassNameByDisplay(),
            this.getGapSizeClassName(),
            this.getLayoutModeClassName(),
            this.getPlaceAlignClassName(),
            this.getPositionsClassName(),
            this.props.className
        );
    }

    private getBackgroundColorClassName(): string {
        return this.props.color
            ? Color.Background.getClassName(this.props.color)
            : '';
    }

    private getClassNameByDisplay(): string | '' {
        const type = this.props?.type ?? Display.Flex.DEFAULT_KEY;

        if (Display.Grid.isDisplayGrid(type)) {
            const props = this.props as Display.Grid.Props;

            return Display.getClassNameByDisplayGrid({
                type: props.type,
                columns: props.columns,
                rows: props.rows,
            });
        }

        if (Display.Flex.isDisplayFlex(type)) {
            const props = this.props as Display.Flex.Props;

            return Display.getClassNameByDisplayFlex({
                type: props.type,
                dir: props.dir,
                nowrap: props.nowrap,
            });
        }

        return '';
    }

    private getGapSizeClassName(): string {
        return Gap.getClassName({
            gapx: this.props.gapx,
            gapy: this.props.gapy,
        });
    }

    private getLayoutModeClassName(): string {
        const LAYOUT_MODE_CLASSNAME = 'w-screen h-screen p-0';

        return this.props.layout ? LAYOUT_MODE_CLASSNAME : '';
    }

    private getPlaceAlignClassName(): string {
        const DEFAULT_PLACE_CONTENT = 'center';
        const DEFAULT_PLACE_ITEMS = 'center';

        return PlaceAlign.getClassName({
            content: this.props.placeContent ?? DEFAULT_PLACE_CONTENT,
            items: this.props.placeItems ?? DEFAULT_PLACE_ITEMS,
        });
    }

    private getPositionsClassName(): string {
        return this.props.pos
            ? (Position.getClassName(this.props.pos) as string)
            : '';
    }
}
